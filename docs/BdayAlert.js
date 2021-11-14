'use strict';

//let dob = new Date(1987, 4,2);

function compare(dob, today = null) {
    today = today || new Date();


    if (today.getMonth() == dob.getMonth() && today.getDate() == dob.getDate()) {
        document.getElementById("bday").style.display = "block";
    }
}