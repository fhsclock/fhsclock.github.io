// start school
function weekday() {
    var t = new Date();
    if ((0 == t.getDay() && document.getElementById("schoolhours").classList.add("hide"), 1 == t.getDay())) {
        var e = [14, 34, 0];
        n();
        function n() {
            var t = r();
            return setInterval(function () {
                u(o(), t);
            }, 1e3);
        }
        function o() {
            return new Date();
        }
        function r() {
            var t = new Date();
            return t.setHours(e[0]), t.setMinutes(e[1]), t.setSeconds(e[2]), t;
        }
        function u(t, e) {
            var n = e.getTime() - t.getTime();
            d = n >= 0 ? n : n + 864e5;
            var o = Math.floor(d / 3600 / 1e3),
                r = Math.floor(d / 60 / 1e3) - 60 * o;
            i(o, r, Math.floor(d / 1e3) - 3600 * o - 60 * r);
        }
        function a(t, e) {
            return t + " ";
        }
        function i(t, e, n) {
            var o = t + a("h", t) + e + a("m", e) + n + a("s", n);
            $("#countdown").html(o);
        }
    }
    if (2 == t.getDay()) {
        (e = [14, 34, 0]), n();
        function n() {
            var t = r();
            return setInterval(function () {
                u(o(), t);
            }, 1e3);
        }
        function o() {
            return new Date();
        }
        function r() {
            var t = new Date();
            return t.setHours(e[0]), t.setMinutes(e[1]), t.setSeconds(e[2]), t;
        }
        function u(t, e) {
            var n = e.getTime() - t.getTime();
            d = n >= 0 ? n : n + 864e5;
            var o = Math.floor(d / 3600 / 1e3),
                r = Math.floor(d / 60 / 1e3) - 60 * o;
            i(o, r, Math.floor(d / 1e3) - 3600 * o - 60 * r);
        }
        function a(t, e) {
            return t + " ";
        }
        function i(t, e, n) {
            var o = t + a("h", t) + e + a("m", e) + n + a("s", n);
            $("#countdown").html(o);
        }
    }
    if (3 == t.getDay()) {
        (e = [14, 34, 0]), n();
        function n() {
            var t = r();
            return setInterval(function () {
                u(o(), t);
            }, 1e3);
        }
        function o() {
            return new Date();
        }
        function r() {
            var t = new Date();
            return t.setHours(e[0]), t.setMinutes(e[1]), t.setSeconds(e[2]), t;
        }
        function u(t, e) {
            var n = e.getTime() - t.getTime();
            d = n >= 0 ? n : n + 864e5;
            var o = Math.floor(d / 3600 / 1e3),
                r = Math.floor(d / 60 / 1e3) - 60 * o;
            i(o, r, Math.floor(d / 1e3) - 3600 * o - 60 * r);
        }
        function a(t, e) {
            return t + " ";
        }
        function i(t, e, n) {
            var o = t + a("h", t) + e + a("m", e) + n + a("s", n);
            $("#countdown").html(o);
        }
    }
    if (4 == t.getDay()) {
        (e = [13, 56, 0]), n();
        function n() {
            var t = r();
            return setInterval(function () {
                u(o(), t);
            }, 1e3);
        }
        function o() {
            return new Date();
        }
        function r() {
            var t = new Date();
            return t.setHours(e[0]), t.setMinutes(e[1]), t.setSeconds(e[2]), t;
        }
        function u(t, e) {
            var n = e.getTime() - t.getTime();
            d = n >= 0 ? n : n + 864e5;
            var o = Math.floor(d / 3600 / 1e3),
                r = Math.floor(d / 60 / 1e3) - 60 * o;
            i(o, r, Math.floor(d / 1e3) - 3600 * o - 60 * r);
        }
        function a(t, e) {
            return t + " ";
        }
        function i(t, e, n) {
            var o = t + a("h", t) + e + a("m", e) + n + a("s", n);
            $("#countdown").html(o);
        }
    }
    if (5 == t.getDay()) {
        (e = [14, 34, 0]), n();
        function n() {
            var t = r();
            return setInterval(function () {
                u(o(), t);
            }, 1e3);
        }
        function o() {
            return new Date();
        }
        function r() {
            var t = new Date();
            return t.setHours(e[0]), t.setMinutes(e[1]), t.setSeconds(e[2]), t;
        }
        function u(t, e) {
            var n = e.getTime() - t.getTime();
            d = n >= 0 ? n : n + 864e5;
            var o = Math.floor(d / 3600 / 1e3),
                r = Math.floor(d / 60 / 1e3) - 60 * o;
            i(o, r, Math.floor(d / 1e3) - 3600 * o - 60 * r);
        }
        function a(t, e) {
            return t + " ";
        }
        function i(t, e, n) {
            var o = t + a("h") + e + a("m") + n + a("s");
            $("#countdown").html(o);
        }
    }
    6 == t.getDay() && document.getElementById("schoolhours").classList.add("hide");
}
weekday();

// start time
function updateClock() {
    var e = new Date(),
        t = e.getHours(),
        n = e.getHours(),
        o = e.getMinutes(),
        c = e.getSeconds(),
        u = (t = 0 == (t = n > 12 ? n - 12 : n) ? 12 : t) + ":" + (o = (o < 10 ? "0" : "") + o) + ":" + (c = (c < 10 ? "0" : "") + c) + " " + (n < 12 ? "AM" : "PM");
    $("#clock").html(u);
}
$(document).ready(function () {
    setInterval(updateClock, 1e3);
});

// start day
var d = new Date(),
    weekday = new Array(7);
(weekday[0] = "Sunday"), (weekday[1] = "Monday"), (weekday[2] = "Tuesday"), (weekday[3] = "Wednesday"), (weekday[4] = "Thursday"), (weekday[5] = "Friday"), (weekday[6] = "Saturday");
var n = weekday[d.getDay()];
document.getElementById("day").innerHTML = n;

// start release
var d2 = new Date(),
    weekday2 = new Array(7);
(weekday2[0] = "N/A"), (weekday2[1] = "2:34 PM"), (weekday2[2] = "2:34 PM"), (weekday2[3] = "2:34 PM"), (weekday2[4] = "1:56 PM"), (weekday2[5] = "2:34 PM"), (weekday2[6] = "N/A");
var n2 = weekday2[d2.getDay()];
document.getElementById("release").innerHTML = n2;

// hide based on time
$(document).ready(function () {
    var start = new Date();
    var end = new Date();
    var time = new Date().getTime();

    if (time > start.setHours(7, 20) && time < end.setHours(14, 34)) {
        var element = document.getElementById("schoolhours");
        element.classList.add("open");
        var element2 = document.getElementById("releasetime");
        element2.classList.add("open");
    } else {
        var element3 = document.getElementById("schoolhours");
        element3.classList.add("closed");
        var element4 = document.getElementById("releasetime");
        element4.classList.add("open");
    }
});
