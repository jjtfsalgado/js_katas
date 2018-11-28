function WhatIsTheTime(timeInMirror){
    if(timeInMirror === "12:00"){return timeInMirror}

    const time = timeInMirror.split(":");
    const hour = time[0];
    const minutes = time[1];

    let invertedHour = hour == 12? 11 : (11 - hour || 12);
    let invertedMinutes = 60 - minutes;

    if(invertedMinutes < 10){
        invertedMinutes =  "0" + invertedMinutes
    }else if(invertedMinutes == 60){
        invertedHour +=1;
        invertedMinutes = "00"
    }

    if(invertedHour < 10){
        invertedHour =  "0" + invertedHour;
    }

    return invertedHour  + ":" + invertedMinutes;
}

// Code wars url -> https://www.codewars.com/kata/clock-in-mirror/javascript

// Examples
// 05:25 --> 06:35
//
// 01:50 --> 10:10
//
// 11:58 --> 12:02
//
// 12:01 --> 11:59