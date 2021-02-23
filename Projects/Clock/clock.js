let timeElem = document.querySelector("#timeId");

let dateStr, hr, min, sec;
console.log({ timeElem });

setInterval(() => {
    dateStr = new Date();
    hr = dateStr.getHours();
    min = dateStr.getMinutes();
    sec = dateStr.getSeconds();

    // console.log(hr.toLocaleString().length);
    // console.log(min.toLocaleString().length);
    // console.log(sec.toLocaleString().length);

    let ampmStr = "";

    if (hr > 12) {
        ampmStr = "PM";
    }
    else {
        ampmStr = "AM";
    }

    if (hr > 12) {
        hr = hr - 12;
    }

    if (hr.toLocaleString().length === 1) {


        hr = hr.toLocaleString();
        hr = 0 + hr;
    }

    if (min.toLocaleString().length === 1) {
        min = min.toLocaleString();
        min = 0 + min;
        console.log("asd" + min);
    }

    if (sec.toLocaleString().length === 1) {
        sec = sec.toLocaleString();
        sec = 0 + sec;
    }
    timeElem.innerHTML = (`${hr} : ${min} : ${sec} ${ampmStr}`)
}, 1000);