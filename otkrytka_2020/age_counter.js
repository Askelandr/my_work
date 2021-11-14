'use strict';


window.onload = ()=>{
    let dif = differences(new Date(1987, 4, 2));
    Trace(dif);
    document.getElementById("years").innerText=dif.years;
    document.getElementById("months").innerText=dif.months;
    document.getElementById("days").innerText=dif.days;
    let dif_days = DaysTillBirth(new Date(1987, 4,2));
    Trace(dif_days);
    document.getElementById("days_left").innerText=dif_days.days_left;
    //убрать эту пременную//
    compare(new Date(1987, 4, 2));
}

function Trace(x) {
    console.log(x)
}