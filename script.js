/* * * * * * * * * * * * * *

Copright 2023 Riley Jones. 
All Rights Reserved.

JavaScript of FHS Clock.

* * * * * * * * * * * * * * */

function weekday() {
    var e = new Date;

    function t() {
        var e = o();
        return setInterval(function() {
            r(a(), e)
        }, 1e3)
    }

    function a() {
        return new Date
    }

    function o() {
        var e = new Date;
        return e.setHours(c[0]), e.setMinutes(c[1]), e.setSeconds(c[2]), e
    }

    function r(e, t) {
        var a = t.getTime() - e.getTime(),
            o = Math.floor((d = a >= 0 ? a : a + 864e5) / 3600 / 1e3),
            r = Math.floor(d / 60 / 1e3) - 60 * o;
        u(o, r, Math.floor(d / 1e3) - 3600 * o - 60 * r)
    }

    function s(e, t) {
        return e + " "
    }

    function u(e, t, a) {
        var o, r, s;
        $("#countdown").html(e + "h " + t + "m " + a + "s ")
    }
    if (0 == e.getDay() && document.getElementById("schoolhours").classList.add("hide"), 1 == e.getDay()) {
        var c = [14, 36, 0];

        function t() {
            var e = o();
            return setInterval(function() {
                r(a(), e)
            }, 1e3)
        }

        function a() {
            return new Date
        }

        function o() {
            var e = new Date;
            return e.setHours(c[0]), e.setMinutes(c[1]), e.setSeconds(c[2]), e
        }

        function r(e, t) {
            var a = t.getTime() - e.getTime(),
                o = Math.floor((d = a >= 0 ? a : a + 864e5) / 3600 / 1e3),
                r = Math.floor(d / 60 / 1e3) - 60 * o;
            u(o, r, Math.floor(d / 1e3) - 3600 * o - 60 * r)
        }

        function s(e, t) {
            return e + " "
        }

        function u(e, t, a) {
            $("#countdown").html(e + "h " + t + "m " + a + "s ")
        }
        t()
    }
    2 == e.getDay() && (c = [14, 36, 0], t()), 3 == e.getDay() && (c = [14, 36, 0], t()), 4 == e.getDay() && (c = [14, 0, 0], t()), 5 == e.getDay() && (c = [14, 36, 0], t())
}

function updateClock() {
    var e = new Date,
        t = e.getHours(),
        a = e.getHours(),
        o = e.getMinutes(),
        r = e.getSeconds(),
        s = (t = 0 == (t = a > 12 ? a - 12 : a) ? 12 : t) + ":" + (o = (o < 10 ? "0" : "") + o) + ":" + (r = (r < 10 ? "0" : "") + r) + " " + (a < 12 ? "AM" : "PM");
    $("#clock").html(s)
}
weekday(), $(document).ready(function() {
    setInterval(updateClock, 1e3)
});
var weekday, d = new Date;
(weekday = Array(7))[0] = "Sunday", weekday[1] = "Monday", weekday[2] = "Tuesday", weekday[3] = "Wednesday", weekday[4] = "Thursday", weekday[5] = "Friday", weekday[6] = "Saturday";
var n = weekday[d.getDay()];
document.getElementById("day").innerHTML = n;
var d2 = new Date,
    weekday2 = Array(7);
weekday2[0] = "N/A", weekday2[1] = "2:36 PM", weekday2[2] = "2:36 PM", weekday2[3] = "2:36 PM", weekday2[4] = "2:00 PM", weekday2[5] = "2:36 PM", weekday2[6] = "N/A";
var n2 = weekday2[d2.getDay()];
document.getElementById("release").innerHTML = n2, $(document).ready(function() {
    var e = new Date,
        t = new Date,
        a = (new Date).getTime();
    a > e.setHours(7, 18) && a < t.setHours(14, 36) ? (document.getElementById("schoolhours").classList.add("open"), document.getElementById("releasetime").classList.add("open")) : (document.getElementById("schoolhours").classList.add("closed"), document.getElementById("releasetime").classList.add("closed"), document.getElementById("schoolend").classList.add("show"), document.getElementById("releaseend").classList.add("show"))
});
var text = ["N/A"],
    counter = 0,
    elem = document.getElementById("countdown"),
    inst = setInterval(change, 995);

function change() {
    elem.innerHTML = text[counter], ++counter >= text.length && (counter = 0, clearInterval(inst))
}
