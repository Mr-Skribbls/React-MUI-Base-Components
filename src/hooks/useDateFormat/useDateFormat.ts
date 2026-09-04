import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { isNil } from 'lodash';
import { useCallback } from 'react';

export const useDateFormat = (options?: Intl.DateTimeFormatOptions) => {

  const formatDate = useCallback((date: Dayjs | Date | string | number, formatOptions?: Intl.DateTimeFormatOptions ) => {
    let formattedDate;
    if(isNil(formatOptions) && !isNil(options)) {
      formatOptions = options;
    }
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        ...formatOptions,
      });
      formattedDate = formatter.format(dayjs(date).toDate());
    } catch (error) {
      console.error(error);
    }

    return formattedDate;
  }, [options]);

  const simpleFormatDate = useCallback((date: Dayjs | string | number, template: string = 'yyyy-MM-dd HH:mm') => {
    const d = dayjs(date).toDate();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return template
      .replace('yyyy', String(year))
      .replace('MM', month)
      .replace('dd', day)
      .replace('HH', hours)
      .replace('mm', minutes);
  }, []);

  return {
    formatDate,
    simpleFormatDate,
  };
};

export default useDateFormat;