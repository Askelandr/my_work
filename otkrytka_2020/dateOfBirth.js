'use strict';

/**
 * Функция возвращает разницу лет, месяцев и дней
 * @param  dob дата рождения в формате Date (месяц всегда на 1 меньше)
 * @param today дата с которой хочешь получить разницу, если не указано - сегодняшний день
 * @returns {{months: number, year: number, days: number}} объект
 */
function differences(dob, today = null) {
    today = today || new Date();

    let fullYears = today.getFullYear() - dob.getFullYear();
    let fullMonths = today.getMonth() - dob.getMonth();
    let fullDays = today.getDate() - dob.getDate();

    if (today.getMonth() < dob.getMonth() || today.getMonth() == dob.getMonth() && today.getDate() < dob.getDate()) {
        fullYears--;
    }

    if (today.getMonth() <= dob.getMonth()) {
        if (today.getDate() < dob.getDate()) fullMonths = 11 - (dob.getMonth() - today.getMonth());
        else fullMonths = 12 - (dob.getMonth() - today.getMonth());
        fullMonths %= 12;
    }

    if (today.getDate() < dob.getDate()) {
        let daysToday = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        fullDays += daysToday;
    }

    return {
        years: fullYears,
        months: fullMonths,
        days: fullDays
    }
}