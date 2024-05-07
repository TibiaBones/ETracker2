import {getWeekNumber} from './getWeekNumber'

interface CreateDateParams {
    locale?: string;
    date?: Date;
}

export const createDate = (params?: CreateDateParams) => {
    const locale = params?.locale ?? 'default'; //если не указана локаль, то устанавливается по умолчанию
    const d = params?.date ?? new Date(); //получаем текущую дату и время
    
    const dayNumber = d.getDate(); //получаем текущее число
    const day = d.toLocaleDateString(locale, {weekday: 'long'}); //получаем день недели на русском языке в полном формате
    const dayNumberInWeek = d.getDate() + 1; //номер дня в неделе
    const dayShort = d.toLocaleDateString(locale, {weekday: 'short'}); //получаем день недели на русском языке в коротком формате
    const year = d.getFullYear(); //получаем год
    const yearShort = d.toLocaleDateString(locale, {year: '2-digit'}); //получаем год на русском языке в коротком формате
    const month = d.toLocaleDateString(locale, {month: 'long'}); //получаем месяц на русском языке в полном формате
    const monthShort = d.toLocaleDateString(locale, {month: 'short'}); //получаем месяц на русском языке в коротком формате
    const monthIndex = d.getMonth(); //получаем индекс месяца
    const monthNumber = d.getMonth() + 1; //преобразуем индекс месяца в номер
    const timestamp = d.getTime(); //получаемчисловое значение, соответствующее указанной дате по всемирному координированному времени
    const week = getWeekNumber(d); //номер недели

    return {
        d,
        dayNumber,
        day,
        dayNumberInWeek,
        dayShort,
        year,
        yearShort,
        month,
        monthShort,
        monthIndex,
        monthNumber,
        timestamp,
        week
    };
};








