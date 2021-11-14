'use strict';

function DaysTillBirth(dob, today = null) {
    today = today || new Date();
    let bday_this_year = new Date(today.getFullYear(), dob.getMonth(),dob.getDate());
    if (today > bday_this_year) {
        bday_this_year = new Date(today.getFullYear() +1, bday_this_year.getMonth(), bday_this_year.getDate());
    }
    let dif_days = Math.floor((bday_this_year - today)/86400000);
    return {
        days_left: dif_days
    }
}