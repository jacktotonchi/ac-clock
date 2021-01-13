var videoIDs = {
    GameCube: [
        "Ig4JSOlgNbw", "kY7Gbcxa1Bg", "B-H6D083baU", // 12AM, 1AM,  2AM
        "fnRqvPX7CIM", "eTkwAlXSQJo", "0-lHUvnb8qU", // 3AM,  4AM,  5AM
        "YyMbSLv3vOM", "9i_wJwlyHQI", "HnqGALKqm4s", // 6AM,  7AM,  8AM
        "89QTfFT5YHE", "mjN3QtyeNBA", "mk6Cve1qIHk", // 9AM,  10AM, 11AM
        "i6-FkYY_O_o", "gx2tIcs3M-o", "KT5MK2bWIPE", // 12PM, 1PM,  2PM
        "RX-9L0LnBV8", "EiARr_2O2m4", "bbRxt0x9KDI", // 3PM,  4PM,  5PM
        "ioHm_SOUcF0", "ejt_xLCwgC0", "VXMvi8AoPLw", // 6PM,  7PM,  8PM
        "5F9ukR_d1mY", "6deFOq-1z7U", "09L3GiXDLdU"  // 9PM,  10PM, 11PM
    ],
    CityFolk: [ // this is the only one without "extended" tracks
        "ntXhGLlBpYM", "Ygvye2S9wt0", "gKMd_BVl9c0",
        "n3PwbTOkiIQ", "YFettiyiceo", "0rFDR5N_gio",
        "Iw1pdG1Lw-w", "F3K5UwihOmM", "ln8DMEaOicg",
        "cZRzK3g5oi4", "KvTavWs70Uw", "gOZPm1YT198",
        "YG6uJCJ8V_g", "EsYCK6U3dNw", "H3eVurFyHvM",
        "OJbLmWQGBRs", "y8Dq0BNW6OI", "MWh6gWwd2jg",
        "_BWBmLuVCMo", "PZ6d58oZg1E", "TePuChVQgpg",
        "b257fZDin_M", "BFIzwSki4J8", "Q6qqtVeFM9w"
    ],
    NewLeaf: [
        "A_00O4KWBxY", "uX2NxSN49Tg", "LAioanQMG_A",
        "_pCBzrFnTlw", "eSfQrWXD94A", "zQLvrhUXwtE",
        "mWa-tiP3a_o", "-CtfRww-2YM", "OHxpIqpAjz0",
        "T9ieUkNOEf4", "25wXOGbmWOc", "TPFZhtkP7M0",
        "vZVS2FtVWHA", "G3rtW1G2Ixg", "LiXoQXCFhF8",
        "CM58GBw4JkE", "wqaKOCbeXmY", "HXG9zU2Lb6g",
        "iLSwc8wgJeo", "rmtKHo7GB64", "DhrsQO9Pkbs",
        "Fl4M-a3eBnw", "tEWFq1_NVSg", "ytHqYVbuLt4"
    ],
    NewHorizons: [
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

var timeout;

var selectedGame = localStorage.getItem("selectedGame");
if (selectedGame === null) {
    selectedGame = "GameCube";
}
console.log(selectedGame);

$(window).on("load", function () {
    $("select[id='game']").find('option[value="' + selectedGame + '"]').attr("selected", true);
    refreshHour();
});

function refreshHour() { // https://stackoverflow.com/a/12309126
    var d = new Date(),
        h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, 0, 0, 0),
        e = h - d;

    if (e > 100) { // some arbitrary time period
        timeout = window.setTimeout(refreshHour, e);
    }

    // Set iFrame to video embed
    let hour = d.getHours();
    let id = videoIDs[selectedGame][hour];
    let iFrameSrc = `https://www.youtube.com/embed/${id}?playlist=${id}&rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1`;
    document.getElementById("videoFrame").src = iFrameSrc;
}

$(document).on("change", "select[id='game']", function () {
    console.log(this.value);

    selectedGame = this.value;
    localStorage.setItem("selectedGame", selectedGame);

    clearTimeout(timeout);
    refreshHour();
});