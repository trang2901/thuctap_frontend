// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const next = require('next/dist/lib/is-serializable-props');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

// Mantine NextJs template
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * Remove undefined values so Next.js doesn't complain during serialization. Verified as of v11.1.2.
 */
const removeUndefined = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeUndefined(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};
const isSerializableProps = next.isSerializableProps;
next.isSerializableProps = (page, method, input) => isSerializableProps(page, method, removeUndefined(input));

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// });

module.exports = nextTranslate({
  reactStrictMode: true,
  // basePath: '',
  poweredByHeader: false,
  // distDir: 'build',
  typescript: {
    ignoreBuildErrors: true,
  },
  future: {
    webpack5: true,
  },
  env: {
    API_HOST: 'http://api.cusc.vn',
    // API_HOST: 'http://172.16.10.214:8880/test-v1',
    API_VERSION: '/api/1',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  cssModule: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
  },
  images: {
    domains: ['cusc.vn'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secretKey: 'secretKey',
    jwtToken: 'JwtToken'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // Pass through env variables
    baseUrl: process.env.BASE_URL,
    // baseApiUrl: process.env.API_URL,
    baseApiUrl: 'http://172.16.10.214:8880/test-v7',
    // staticFolder: process.env.STATIC_DIR,
    // Will be used for per SEO page default
    baseSeo: {
      robotsProps: {
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1
      }
    },
    name: process.env.NAME,
    title: process.env.TITLE,
    slogan: process.env.SLOGAN,
    description: process.env.DESCRIPTION,
    author: process.env.AUTHOR,
    image: process.env.IMAGE,
    facebookUrl: process.env.FACEBOOK_URL,
    twitterUrl: process.env.TWITTER_URL,
    instagramUrl: process.env.INSTAGRAM_URL,
    linkedInUrl: process.env.LINKEDIN_URL,
    phone: process.env.PHONE,
    address: process.env.ADDRESS,
    region: process.env.REGION,
    country: process.env.COUNTRY,
    postalCode: process.env.POSTAL_CODE,
    locale: process.env.LOCALE
  },

  webpack: (config, options) => {
    // { buildId, dev, isServer, defaultLoaders, webpack }
    console.log('webpack version:', options.webpack.version);

    config.resolve.alias['~'] = path.resolve(__dirname);

    if (!options.isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      }
    }

    // Load raw file
    config.module.rules.push({
      test: /\.my-file$/i,
      type: 'asset/source',
    });

    // URL Loader
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      type: 'asset/resource'
    });

    return config
  },
})
