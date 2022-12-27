import moment from 'moment';
export function formatStringToDateTime(stringDateTime, formatString) {
    if (!stringDateTime || stringDateTime === '') return null;
    if (formatString == null) formatString = 'DD/MM/YYYY HH:mm';
    var dateTime = new Date(stringDateTime);
    dateTime = moment(dateTime).format(formatString);
    return dateTime;
}
export function formatDateTimeToString(valueDateTime, formatString) {
    if (!valueDateTime) return null;
    var stringDateTime = moment(valueDateTime).format('YYYY-MM-DDTHH:mm:ss');
    if (formatString != null) stringDateTime = moment(valueDateTime).format(formatString);
    return stringDateTime;
}
export function formatString(stringOrigin, stringReplace) {
    if (stringOrigin == null || stringOrigin === '') return '';
    let result = '';
    const indexStart = stringOrigin.indexOf('{');
    const indexEnd = stringOrigin.indexOf('}');
    if (indexStart > -1 && indexStart > -1 && indexStart < indexEnd) {
        result = setCharAt(stringOrigin, indexStart, indexEnd, stringReplace);
    }
    return result;
}
function setCharAt(str, indexStart, indexEnd, chr) {
    if (indexStart > str.length - 1) return str;
    return str.substr(0, indexStart) + chr + str.substr(indexEnd + 1);
}
export function cloneObject(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
export function convertUTCDateToLocalDate(stringDate) {
    let isExistCharZ = stringDate.indexOf('z') > -1 || stringDate.indexOf('Z') > -1;
    let utcDate;
    if (isExistCharZ) {
        utcDate = new Date(stringDate);
    } else {
        utcDate = new Date(stringDate + 'z');
    }
    let localTime = moment.utc(utcDate).local();
    return localTime;
}

export function numberFormat(number, decimals, decPoint, thousandsSep) { // eslint-disable-line camelcase
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
    const n = !isFinite(+number) ? 0 : +number
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
    const dec = (typeof decPoint === 'undefined') ? '.' : decPoint
    let s = ''
    const toFixedFix = function (n, prec) {
        if (('' + n).indexOf('e') === -1) {
            return +(Math.round(n + 'e+' + prec) + 'e-' + prec)
        } else {
            const arr = ('' + n).split('e')
            let sig = ''
            if (+arr[1] + prec > 0) {
                sig = '+'
            }
            return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec)
        }
    }
    // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.')
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || ''
        s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
}

export const joinText = (list, predicate) => {
    let allMessages = list.filter(item => item.isFurniture === predicate).map(item => item.utilityName);
    return allMessages.join(", ");
}

export const toSlug = (strInput) => {
    var str = strInput;
    str = str?.toLowerCase();
    str = str?.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str?.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str?.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str?.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str?.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str?.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str?.replace(/(đ)/g, 'd');
    str = str?.replace(/([^0-9a-z-.\s])/g, '');
    str = str?.replace(/(\s+)/g, '-');
    str = str?.replace(/^-+/g, '');
    str = str?.replace(/-+$/g, '');

    return str;
}

export const getTypeFromFileName = (fileName) => {
    if (!fileName || fileName === '') return '';
    var result = 'Other';
    var imgExts = ["png", "jpg", "jpe", "jfi", "jif", "bmp", "webp", "gif", "svg"];
    var videoExts = ["mp4", "mov", "wmv", "avi", "avchd", "flv", "f4v", "swf", "mkv", "mpeg-2"];
    var posExt = fileName.lastIndexOf('.');
    if (posExt > -1) {
        var strExt = fileName.substring(posExt + 1);
        if (imgExts.indexOf(strExt) > -1) {
            result = 'Image';
        } else if (videoExts.indexOf(strExt) > -1) {
            result = 'Video';
        }
    }
    return result;
}
