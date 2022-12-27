import * as React from 'react';
import { SORT_ASC, SORT_DESC } from '@constant/index';

export function sortData(array, fieldName, ascending) {
  const sortDir = ascending ? SORT_ASC : SORT_DESC;
  array.sort(function (item1, item2) {
    if (item1[fieldName] > item2[fieldName]) {
      return 1 * sortDir;
    }
    if (item1[fieldName] < item2[fieldName]) {
      return -1 * sortDir;
    }
    return 0;
  });
  return array;
}

export function generatePropertyCode(length) {
  let result = '';
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateStringAlias(string) {
  let result = '';
  if (string && string.length) {
    result = string.split(' ').join('-');
  }
  return result;
}

export function formatNumber(num) {
  if (!num || num === '') {
    return 0;
  }
  return num
    .toString()
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function numFormatter(num) {
  if (!num || num === '') {
      return 0;
    }

  if(num > 999 && num < 1000000){
      return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
  } else if(num > 1000000){
      return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
  } else if(num < 900){
      return num; // if value < 1000, nothing to do
  }
}

export const shimmerLoader = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#adadad" offset="20%" />
          <stop stop-color="#999999" offset="50%" />
          <stop stop-color="#adadad" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#adadad" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

export const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const getImageIfExist = (imageList) => {
  if (imageList?.ProjectOverview?.length > 0) {
    const foundOverView = imageList?.ProjectOverview?.find(item => item?.ImagePath?.lastIndexOf('http', 0) === 0);
    return foundOverView?.ImagePath ?? '';
  } else if (imageList?.ApartmentSpace?.length > 0) {
    const foundApartmentSpace = imageList?.ApartmentSpace?.find(item => item?.ImagePath?.lastIndexOf('http', 0) === 0);
    return foundApartmentSpace?.ImagePath ?? '';
  } else if (imageList?.ApartmentModel?.length > 0) {
    const foundApartmentModel = imageList?.ApartmentModel?.find(item => item?.ImagePath?.lastIndexOf('http', 0) === 0);
    return foundApartmentModel?.ImagePath ?? '';
  } else if (imageList?.DesignGround?.length > 0) {
    const foundDesignGround = imageList?.DesignGround?.find(item => item?.ImagePath?.lastIndexOf('http', 0) === 0);
    return foundDesignGround?.ImagePath ?? '';
  } else {
    return '';
  }
}

export const checkValidateImageURL = (urlString) => {
  const [status, setStatus] = React.useState('progress');
  React.useEffect(() => {
    setStatus('progress');
    let hasChangedURL = false;
    const image = new Image();
    image.src = urlString;
    image.addEventListener('load', () => {
      if (!hasChangedURL) setStatus('valid');
    });
    image.addEventListener('error', () => {
      if (!hasChangedURL) setStatus('invalid');
    });
    return () => {
      hasChangedURL = false;
    };
  }, [urlString]);
  return status;
}

// MTMEN: Check object is empty
export const isEmpty = (obj) => {

  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== "object") return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}

export const jsonToQueryString = (json) => {
  return '?' +
    Object.keys(json).map(function (key) {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(json[key]);
    }).join('&');
}

export const customAliasByLanguage = (alias, locale = 'vi') => {
  let customAlias = '';
  if (locale === 'en') {
    customAlias = `/${locale}/${alias}`;
  } else {
    customAlias = `/${alias}`;
  }

  return customAlias;
}

const checkToFixed = (number, toFix) => {
	if (number >= 1.0e+9) {
    return !!((number / 1.0e+9) % 1) ? toFix : 0;
  } else if (number >= 1.0e+6) {
    return !!((number / 1.0e+6) % 1) ? toFix : 0;
  } else if (number >= 1.0e+3) {
    return !!((number / 1.0e+3) % 1) ? toFix : 0;
  } else {
    return 0;
  }
}

export const currencyFormat = (value, locale = 'vi', toFix = 2, abbrev = false) => {
  const parseNumber = Math.abs(Number(value));
  const numberFix = checkToFixed(parseNumber, toFix);
  let result = parseNumber >= 1.0e+9 ? (parseNumber / 1.0e+9).toFixed(numberFix)
    + (locale === 'vi' ? ' tỷ' : (abbrev ? "B" : " billion"))
    : parseNumber >= 1.0e+6 ? (parseNumber / 1.0e+6).toFixed(numberFix)
    + (locale === 'vi' ? ' triệu' : (abbrev ? "M" : " million"))
    : parseNumber >= 1.0e+3 ? (parseNumber / 1.0e+3).toFixed(numberFix)
    + (locale === 'vi' ? ' ngàn' : (abbrev ? "K" : " thousand"))
      : parseNumber.toFixed(numberFix) + '';

  return result.replace('.', ',');
}

export const fallbackInvalidImages = e => {
  e.target.src = '/images/property24/img-template3.png';
}

export const excelPMT = (rate_per_period, number_of_payments, present_value, future_value, type) => {
  future_value = typeof future_value !== 'undefined' ? future_value : 0;
  type = typeof type !== 'undefined' ? type : 0;

  if(rate_per_period != 0.0){
    // Interest rate exists
    var q = Math.pow(1 + rate_per_period, number_of_payments);
    return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));

  } else if(number_of_payments != 0.0){
    // No interest rate, but number of payments exists
    return -(future_value + present_value) / number_of_payments;
  }

  return 0;
}

export const numberFormatByLanguage = (number, language = 'vi', abbrev = false, abbrevCurrency = false) => {
  if (!number || typeof number === 'undefined') {
    return 0;
  } else {
    const langCode = language === 'en' ? 'en-US' : 'vi-VN';
    // let numberOfDigits = (number >= 1e3 && number < 1e10) ? 2 : 3;
    return new Intl.NumberFormat(langCode, {
      notation: abbrev ? 'compact' : 'standard',
      compactDisplay: abbrevCurrency ? "short" : "long",
      maximumSignificantDigits: 3 }).format(number);
  }
}
