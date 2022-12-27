import { format, formatDuration, parse, intervalToDuration } from 'date-fns';
import { enGB, vi } from 'date-fns/locale';

const locales = { enGB, vi };

const customFormatDuration = ({ start, end }) => {
  const durations = intervalToDuration({ start, end });
  return formatDuration(durations, { locale: vi });
};

const dateFormatHumanReadable = (start, end) => {
  return '';
};

// by providing a default string of 'PP' or any of its variants for `formatStr`
// it will format dates in whichever way is appropriate to the locale
export const dateFormat = (dateString, formatStr = 'PP') => {
  if (!dateString || dateString === '') return;

  console.log(dateString);
  const date = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date());
  console.log(date);

  // return format(date, formatStr, {
  //   locale: vi
  // })

  // return customFormatDuration({ start: 0, end: 10800 * 1000}) // 3 hours
  return customFormatDuration({ start: 0, end: 108000 * 1000 }); // 1 day 6 hours
}
