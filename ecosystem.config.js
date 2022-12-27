module.exports = {
  apps: [
    {
      name: "cgate_v2_frontend",
      script: "npm",
      automation: false,
      args: "run start",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
  ]
};
