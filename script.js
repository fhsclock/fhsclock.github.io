/* * * * * * * * * * * * * *

Copright 2022 Riley Jones. 
All Rights Reserved.

Script of FHS Clock.

* * * * * * * * * * * * * * */

function weekday() {
	var e = new Date;

	function t() {
		var e = a();
		return setInterval(function() {
			o(n(), e)
		}, 1e3)
	}

	function n() {
		return new Date
	}

	function a() {
		var e = new Date;
		return e.setHours(u[0]), e.setMinutes(u[1]), e.setSeconds(u[2]), e
	}

	function o(e, t) {
		var n = t.getTime() - e.getTime();
		d = n >= 0 ? n : n + 864e5;
		var a = Math.floor(d / 3600 / 1000),
			o = Math.floor(d / 60 / 1000) - 60 * a;
		s(a, o, Math.floor(d / 1000) - 3600 * a - 60 * o)
	}

	function r(e, t) {
		return e + " "
	}

	function s(e, t, n) {
		var a = e + r("h", e) + t + r("m", t) + n + r("s", n);
		$("#countdown").html(a)
	}
	if (0 == e.getDay() && document.getElementById("schoolhours").classList.add("hide"), 1 == e.getDay()) {
		var u = [14, 34, 0];

		function t() {
			var e = a();
			return setInterval(function() {
				o(n(), e)
			}, 1e3)
		}

		function n() {
			return new Date
		}

		function a() {
			var e = new Date;
			return e.setHours(u[0]), e.setMinutes(u[1]), e.setSeconds(u[2]), e
		}

		function o(e, t) {
			var n = t.getTime() - e.getTime();
			d = n >= 0 ? n : n + 864e5;
			var a = Math.floor(d / 3600 / 1000),
				o = Math.floor(d / 60 / 1000) - 60 * a;
			s(a, o, Math.floor(d / 1000) - 3600 * a - 60 * o)
		}

		function r(e, t) {
			return e + " "
		}

		function s(e, t, n) {
			var a = e + r("h") + t + r("m") + n + r("s");
			$("#countdown").html(a)
		}
		t()
	}
	2 == e.getDay() && (u = [14, 34, 0], t()), 3 == e.getDay() && (u = [14, 34, 0], t()), 4 == e.getDay() && (u = [13, 56, 0], t()), 5 == e.getDay() && (u = [14, 34, 0], t())
}

function updateClock() {
	var e = new Date,
		t = e.getHours(),
		n = e.getHours(),
		a = e.getMinutes(),
		d = e.getSeconds(),
		o = (t = 0 == (t = n > 12 ? n - 12 : n) ? 12 : t) + ":" + (a = (a < 10 ? "0" : "") + a) + ":" + (d = (d < 10 ? "0" : "") + d) + " " + (n < 12 ? "AM" : "PM");
	$("#clock").html(o)
}
weekday(), $(document).ready(function() {
	setInterval(updateClock, 1000)
});
var weekday, d = new Date;
(weekday = new Array(7))[0] = "Sunday", weekday[1] = "Monday", weekday[2] = "Tuesday", weekday[3] = "Wednesday", weekday[4] = "Thursday", weekday[5] = "Friday", weekday[6] = "Saturday";
var n = weekday[d.getDay()];
document.getElementById("day").innerHTML = n;
var d2 = new Date,
	weekday2 = new Array(7);
weekday2[0] = "N/A", weekday2[1] = "2:34 PM", weekday2[2] = "2:34 PM", weekday2[3] = "2:34 PM", weekday2[4] = "1:56 PM", weekday2[5] = "2:34 PM", weekday2[6] = "N/A";
var n2 = weekday2[d2.getDay()];
document.getElementById("release").innerHTML = n2, $(document).ready(function() {
	var e = new Date,
		t = new Date,
		n = (new Date).getTime();
	n > e.setHours(7, 20) && n < t.setHours(14, 34) ? (document.getElementById("schoolhours").classList.add("open"), document.getElementById("releasetime").classList.add("open")) : (document.getElementById("schoolhours").classList.add("closed"), document.getElementById("releasetime").classList.add("closed"), document.getElementById("schoolend").classList.add("show"), document.getElementById("releaseend").classList.add("show"))
});
var text = ["N/A"],
	counter = 0,
	elem = document.getElementById("countdown"),
	inst = setInterval(change, 995);

function change() {
	elem.innerHTML = text[counter], ++counter >= text.length && (counter = 0, clearInterval(inst))
}
