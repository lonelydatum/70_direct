(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _proline = require("./proline");

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power2.out"
});

var READ = {
	t1: 2.5,
	t2a: 2.8,
	t2b: 2.3
};

var w = size.w;
var h = size.h;

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
				document.getElementById("banner").addEventListener('mouseover', mouseover);
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

var data_ = {};

function start(data) {

	data_ = _extends({ manScale: true, olgY: 80, ball_time: .5, ball_ease: 4.5 }, data);
	console.log(data_);
	var _data_ = data_;
	var manScale = _data_.manScale;
	var olgY = _data_.olgY;
	var ball_time = _data_.ball_time;
	var ball_ease = _data_.ball_ease;

	var tl = init();

	if (manScale) {
		gsap.to(".man", { scale: 1.07, duration: 5 });
	}

	// logo()	
	(0, _proline.olg)("#logo_1");

	// tl.add(olg(), 3)

	tl.from(".t1", { duration: .3, opacity: 0, x: "-=100" }, "+=.4");
	tl.add("t1", "+=" + READ.t1);
	tl.to([".t1", ".man"], { duration: .2, opacity: 0 }, "t1");

	var tlHideOLG = new TimelineMax();

	tl.add(hand(), "+=.3");

	// const tlHideOLG = new TimelineMax()
	// tlHideOLG.set(['#triangleRed'], {attr:{points:"5.76 240.21 17.19 240.26 55.04 240.26 5.76 240.21"}, duration: 0.01, delay:0});
	// tlHideOLG.set('#GL_playForOntario', {opacity:0})
	// tlHideOLG.set(['.group-O'], { y:olgY})
	// tlHideOLG.set(['.group-L'], { y:olgY})
	// tlHideOLG.set(['.group-G'], { y:olgY})

	// tl.add(tlHideOLG, "-=.7")

	// tl.add("test")
	// tl.to("#GL_blueWedge", {y:olgY, duration:.13}, "-=.4")
	// tl.to("#GL_blueWedge", {y:0, duration:.5})	
	// tl.add(logo(), "-=.4")

	tl.set(".frame2", { opacity: 1 });
	tl.from(".txt-get-started", { duration: .5, opacity: 0 }, "-=.8");
	tl.from(".olg-ca", { duration: .3, opacity: 0 }, "+=.5");
	tl.from(['#EF_cta'], 0.5, { opacity: 0, y: "+=20'", onComplete: mouseover }, '+=.25');

	tl.set("#logo_1", { display: "none" });
	tl.add((0, _proline.olg)("#logo_2"));
}

function hand() {
	var tl = new TimelineMax();
	var obj = size.w > size.h ? { y: "+=" + size.h } : { x: "+=" + size.w };

	tl.from(".hand", _extends({ duration: .3 }, obj), 0);
	tl.from(".t2a", { duration: .4, x: "-=" + size.w }, 0);
	tl.to(".t2a", { duration: .3, opacity: 0, x: "+=100" }, "+=" + READ.t2a);
	tl.from(".t2b", { duration: .4, opacity: 0, x: "-=100" });

	tl.add("t2", "+=" + READ.t2b);
	tl.to(".t2b", _extends({ duration: .45, opacity: 0 }, obj), "t2");
	tl.to(".hand", _extends({ duration: .35, opacity: 0 }, obj), "t2");
	return tl;
}

function mouseover(e) {
	gsap.to(['#EF_cta'], { duration: .4, yoyo: true, scale: .535, repeat: 1,
		onComplete: function onComplete() {
			// viewport.addEventListener('mouseover', mouseover)
		}
	});
}

function logo1() {}

// function logo(){
// 	const {manScale, olgY, ball_time, ball_ease} = data_

// 	gsap.set([ '#GL_logo' ], {y:-6, x:1});
// 	var tl = new TimelineMax()
// 	tl.set('#GL_playForOntario', {opacity:0})
// 	tl.set(['.group-O'], { y:olgY})
// 	tl.set(['.group-L'], { y:olgY})
// 	tl.set(['.group-G'], { y:olgY})	
// 	tl.set(['#triangleRed'], {attr:{points:"5.76 240.21 17.19 240.26 55.04 240.26 5.76 240.21"}, duration: 0.01, delay:0});
// 	tl.to('#triangleRed', {delay:0.25, duration:.5, attr:{points:"17.19 202.41 17.19 240.26 55.04 240.26 17.19 202.41"}});

// 	tl.add(olg())

// 	return tl

// }

exports.size = size;
exports.init = init;
exports.start = start;

},{"./proline":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg(id) {
    TweenLite.set(id + " #olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to(id + " #bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to(id + " #redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from(id + " #group-o", { duration: 1, y: 200, ease: "custom" }, 0).from(id + " #group-l", { duration: 1, y: 200, ease: "custom" }, .1).from(id + " #group-g", { duration: 1, y: 200, ease: "custom" }, .2).from(id + " #group-o", { duration: .8, scale: .4, ease: "power1.out" }, .3).from(id + " #group-l", { duration: .8, scale: .4, ease: "power1.out" }, .4).from(id + " #group-g", { duration: .8, scale: .4, ease: "power1.out" }, .5).from(id + " #letter-o", { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from(id + " #letter-l", { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from(id + " #letter-g", { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],3:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

gsap.set("#EF_cta", { x: -150, y: -156, transformOrigin: "300px 312px" });

(0, _commonJsCommonJs.start)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
