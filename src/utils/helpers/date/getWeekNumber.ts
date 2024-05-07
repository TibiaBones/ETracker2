
export const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1) //первый день года
    const pastDaysYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000; //сколько дней месяца уже прошло

    return Math.ceil((pastDaysYear + firstDayOfYear.getDay() + 1) / 7); //возвращаем округленный номер недели
}