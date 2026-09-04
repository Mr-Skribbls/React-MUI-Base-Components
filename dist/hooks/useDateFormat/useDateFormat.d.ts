import { Dayjs } from 'dayjs';
export declare const useDateFormat: (options?: Intl.DateTimeFormatOptions) => {
    formatDate: (date: Dayjs | Date | string | number, formatOptions?: Intl.DateTimeFormatOptions) => string | undefined;
    simpleFormatDate: (date: Dayjs | string | number, template?: string) => string;
};
export default useDateFormat;
