var videoIDs = {
    newHorizons: [
        "lqs34Ou0Rw8", "LJhvOKQZqC0", "bgdqH77h4qU",
        "C1cfkkscrI8", "GnLPAiLYmKw", "dJwg-mWj7xY",
        "FqUlCT47ucE", "y6dF4h5z0ik", "YhpYzNZkg8E",
        "rw-NhaaC8bU", "mnC8Yj7GUBk", "bnzSJMLDm90",
        "FuMClV20DDg", "cTMHpVXBWVo", "ALRRqnJdAhc",
        "Lu7h28H52jM", "jHs6hIDmOFE", "pJvjbosEdHE",
        "lxgcDP-wppM", "ZMgj30uGeb0", "9n-LArbDkIk",
        "QEkytL-anQw", "GFBWicff5ZE", "HT-djWRbNN4"
    ]
}

function refreshHour() { // https://stackoverflow.com/a/12309126
    var d = new Date(),
        h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, 0, 0, 0),
        e = h - d;

    if (e > 100) { // some arbitrary time period
        window.setTimeout(refreshHour, e);
    }

    // Set iFrame to video embed
    var hour = d.getHours();
    var iFrameSrc = "https://www.youtube.com/embed/" + videoIDs.newHorizons[hour] + "?controls=0&autoplay=1";
    document.getElementById("videoFrame").src = iFrameSrc;
    document.getElementById("text").innerHTML = hour;
}
