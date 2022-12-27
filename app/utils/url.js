export function generateUrlForPost(post_name, id) {
  return `/tin-tuc/${post_name}---${id}.html`;
}

export function generateUrlForPractice(post_name, id) {
  return `/bai-tap/${post_name}---${id}.html`;
}

export function getSlugByUrl(url) {
  // bai-tap-javascript-mang-array-va-doi-tuong-object-trinh-dien-dang-bang-table---9084.html
  let str = url;
  str = str?.replace(/\.html/g, '');

  let arr = str.split('---');
  if (arr.length > 1) {
    return arr[0];
  }

  return arr[0];
}

export function getIdByUrl(url) {
  // bai-tap-javascript-mang-array-va-doi-tuong-object-trinh-dien-dang-bang-table---9084.html
  let str = url;
  str = str?.replace(/\.html/g, '');

  let arr = str.split('---');
  if (arr.length > 1) {
    return arr[1];
  }

  return arr[0];
}

// Encode, Decode
// const encode = (str) =>
//   encodeURIComponent(str)
//     .replace(/\\-/g, '%2D')
//     .replace(/\\_/g, '%5F')
//     .replace(/\\./g, '%2E')
//     .replace(/\\!/g, '%21')
//     .replace(/\\~/g, '%7E')
//     .replace(/\\*/g, '%2A')
//     .replace(/\\'/g, '%27')
//     .replace(/\\(/g, '%28')
//     .replace(/\\)/g, '%29');

// encode("What's result of (4 + 2)?"); // "What%27s%20result%20of%20%284%20%2B%202%29%3F"

// const decode = (str) =>
//   decodeURIComponent(
//     str
//       .replace(/\\%2D/g, '-')
//       .replace(/\\%5F/g, '_')
//       .replace(/\\%2E/g, '.')
//       .replace(/\\%21/g, '!')
//       .replace(/\\%7E/g, '~')
//       .replace(/\\%2A/g, '*')
//       .replace(/\\%27/g, "'")
//       .replace(/\\%28/g, '(')
//       .replace(/\\%29/g, ')')
//   );

// decode('What%27s%20result%20of%20%284%20%2B%202%29%3F'); // "What's result of (4 + 2)?"
