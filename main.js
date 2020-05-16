(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{font-family: 'Raleway', sans-serif;}\r\n.sprite_ico{width:28px; height:28px; overflow:hidden; border-radius:50%; display:inline-block; background:url('sprite_ico.png') no-repeat;}\r\n.facebook_ico{background-position:-1px 0px; background-color:#3b5999;}\r\n.twitter_ico{background-position:-43px 0px; background-color:#55acee;}\r\n.whatsapp_ico{background-position:-86px 0px; background-color:#1bd741;}\r\n.pinterest_ico{background-position:-131px 0px; background-color:#cb1f24;}\r\n.instagran_ico{background-position:-175px 1px; background-color:#ff8747;}\r\n.links{width:auto;height:28px;vertical-align:middle;overflow:hidden}\r\n.socialshareOptions .shareIt{width:28px;height:28px;float:left;cursor:pointer;display:inline-block;position:absolute;left:0;right:0;text-align:center;width:100%;background-color:#f8f9fa;transition:all .3s ease-in-out}\r\n.socialshareOptions .shareIt.active{width:28px;margin-right:4px;position:relative;}\r\n.links a{height:28px;margin:0 2px;}\r\n.ShowShare{font-size:12px;font-family:'Raleway',sans-serif;font-weight:700;position:absolute;width:100%;left:0;margin:0;bottom:0;padding:3px 0}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxrQ0FBa0MsQ0FBQztBQUN4QyxZQUFZLFVBQVUsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLDBDQUF5RCxDQUFDO0FBQ3pKLGNBQWMsNEJBQTRCLEVBQUUsd0JBQXdCLENBQUM7QUFDckUsYUFBYSw2QkFBNkIsRUFBRSx3QkFBd0IsQ0FBQztBQUNyRSxjQUFjLDZCQUE2QixFQUFFLHdCQUF3QixDQUFDO0FBQ3RFLGVBQWUsOEJBQThCLEVBQUUsd0JBQXdCLENBQUM7QUFDeEUsZUFBZSw4QkFBOEIsRUFBRSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsZUFBZTtBQUNuRSw2QkFBNkIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLDhCQUE4QjtBQUN4TixvQ0FBb0MsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBQ2xGLFNBQVMsV0FBVyxDQUFDLFlBQVksQ0FBQztBQUNsQyxXQUFXLGNBQWMsQ0FBQyxnQ0FBZ0MsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7Zm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjt9XHJcbi5zcHJpdGVfaWNve3dpZHRoOjI4cHg7IGhlaWdodDoyOHB4OyBvdmVyZmxvdzpoaWRkZW47IGJvcmRlci1yYWRpdXM6NTAlOyBkaXNwbGF5OmlubGluZS1ibG9jazsgYmFja2dyb3VuZDp1cmwoLi4vYXNzZXRzL2ltYWdlcy9zcHJpdGVfaWNvLnBuZykgbm8tcmVwZWF0O31cclxuLmZhY2Vib29rX2ljb3tiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xcHggMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OTk7fVxyXG4udHdpdHRlcl9pY297YmFja2dyb3VuZC1wb3NpdGlvbjotNDNweCAwcHg7IGJhY2tncm91bmQtY29sb3I6IzU1YWNlZTt9XHJcbi53aGF0c2FwcF9pY297YmFja2dyb3VuZC1wb3NpdGlvbjotODZweCAwcHg7IGJhY2tncm91bmQtY29sb3I6IzFiZDc0MTt9XHJcbi5waW50ZXJlc3RfaWNve2JhY2tncm91bmQtcG9zaXRpb246LTEzMXB4IDBweDsgYmFja2dyb3VuZC1jb2xvcjojY2IxZjI0O31cclxuLmluc3RhZ3Jhbl9pY297YmFja2dyb3VuZC1wb3NpdGlvbjotMTc1cHggMXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiNmZjg3NDc7fVxyXG4ubGlua3N7d2lkdGg6YXV0bztoZWlnaHQ6MjhweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7b3ZlcmZsb3c6aGlkZGVufVxyXG4uc29jaWFsc2hhcmVPcHRpb25zIC5zaGFyZUl0e3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7ZmxvYXQ6bGVmdDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2Y4ZjlmYTt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXR9XHJcbi5zb2NpYWxzaGFyZU9wdGlvbnMgLnNoYXJlSXQuYWN0aXZle3dpZHRoOjI4cHg7bWFyZ2luLXJpZ2h0OjRweDtwb3NpdGlvbjpyZWxhdGl2ZTt9XHJcbi5saW5rcyBhe2hlaWdodDoyOHB4O21hcmdpbjowIDJweDt9XHJcbi5TaG93U2hhcmV7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6J1JhbGV3YXknLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7bGVmdDowO21hcmdpbjowO2JvdHRvbTowO3BhZGRpbmc6M3B4IDB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"pt-3\">\n  <div class=\"container text-left\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8 px-0 px-sm-3 text-dark\">\n        <div class=\"postWrap shadow-sm p-2 p-sm-3 border rounded mb-4\" id=\"marvel_studio01\">\n          <div class=\"postAuthor media mb-2\">\n            <div class=\"avatarWrap border shadow-sm mr-2\">\n              <img src=\"assets/images/marvel.png\" class=\"imgCenter figure-img img-fluid\" alt=\"\">\n            </div>\n            <div class=\"media-body\">\n              <h5 class=\"mt-2 mb-1\">Marvel Studio</h5>\n              <p class=\"desc\">Cras sit amet nibh libero, in gravida nulla.</p>\n            </div>\n          </div>\n          <figure class=\"figure w-100 mb-2\">\n            <div class=\"imgWrap bg_gradGrey rounded mb-1\"><img src=\"assets/images/PBpaPfht3TSS2rSg5ezHE-650-80.jpg.webp\" class=\"imgCenter figure-img img-fluid\" alt=\"\" /></div>\n            <div class=\"mb-3\">\n              <div class=\"figure-caption text-left text-secondary col px-0 mb-2\">(Image credit: Disney/Marvel Studios)</div>\n              <div class=\"figure-caption text-secondary col px-0\">How to watch the Marvel movies in order (release and chronological)</div>\n            </div>\n            <h4>Oh, snap: here's how to watch the Marvel movies in order</h4>\n          </figure>\n          <p class=\"my-2\">Considering that there are over 20 Marvel movies, spread across several Phases, and the promise of many (many) more to comes, knowing how to watch the Marvel movies in order has become something of a challenge. Should you tackle the series in release order or chronologically? When you consider how the MCU jumps across decades – and even multiverses – there's no longer a correct answer. </p>\n\n          <p class=\"my-2\">Luckily, picking the right order is no longer a Hulk-sized task. GamesRadar+ has put together this handy guide to help anyone – whether you're a newcomer or Marvel veteran – to understand how to watch the Marvel movies in order. We begin with release order and then delve into the uber-geeky (and slightly confusing) chronological order for those looking to chart everything in the MCU, from Cap’s impromptu ice bath in the 1940s right through to Spidey’s 2023 adventure.</p>\n\n          <figure class=\"figure w-100 mb-2\">\n            <div class=\"imgWrap bg_gradGrey rounded mb-1\"><img src=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"imgCenter figure-img img-fluid\" alt=\"\" /></div>\n            <div class=\"mb-3\">\n              <div class=\"figure-caption text-left text-secondary col px-0 mb-2\">(Image credit: Disney/Marvel Studios)</div>\n              <div class=\"figure-caption text-secondary col px-0\">How to watch the Marvel movies in order (release and chronological)</div>\n            </div>\n            <h4>Oh, snap: here's how to watch the Marvel movies in order</h4>\n          </figure>\n\n          <p class=\"my-2\">Luckily, picking the right order is no longer a Hulk-sized task. GamesRadar+ has put together this handy guide to help anyone – whether you're a newcomer or Marvel veteran – to understand how to watch the Marvel movies in order. We begin with release order and then delve into the uber-geeky (and slightly confusing) chronological order for those looking to chart everything in the MCU, from Cap’s impromptu ice bath in the 1940s right through to Spidey’s 2023 adventure.</p>\n\n          <figure class=\"figure w-100 mb-2\">\n            <div class=\"bg_gradGrey d-flex rounded mb-1\">\n              <div class=\"gallWrap position-relative\">\n                <div class=\"imgWrap p-0 imgGalleryThumbWrap ImagesGallery\" id=\"ImagesGallery\">\n                  <a data-pinterest-text=\"Avenger Endgame\" data-tweet-text=\"Avenger Endgame\" data-facebook-share-url=\"onektrends.com\" data-twitter-share-url=\"twitter-share.html\" data-googleplus-share-url=\"googleplus-share.html\" data-pinterest-share-url=\"pinterest-share.html\" href=\"assets/images/PBpaPfht3TSS2rSg5ezHE-650-80.jpg.webp\" class=\" firstImg\" data-sub-html='<div class=\"fb-comments\" data-href=\"http://sachinchoolur.github.io/lightGallery/demos/comment-box.html#lg=1&slide=0\" data-width=\"400\" data-numposts=\"5\"></div>'><img src=\"assets/images/PBpaPfht3TSS2rSg5ezHE-650-80.jpg.webp\" class=\"figure-img img-fluid\" alt=\"\" /></a>\n\n                  <a href=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"\"><img src=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"figure-img img-fluid\" alt=\"\" /></a>\n                  <a href=\"assets/images/hulk.jpg\" class=\"\"><img src=\"assets/images/hulk.jpg\" class=\"figure-img img-fluid\" alt=\"\" /></a>\n                  <a href=\"assets/images/captain-america-civil-war-international-trailer1.jpg\" class=\"\"><img src=\"assets/images/captain-america-civil-war-international-trailer1.jpg\" class=\"figure-img img-fluid\" alt=\"\" /></a>\n                  <a href=\"assets/images/thor_ragnarok.jpg\" class=\"\"><img src=\"assets/images/thor_ragnarok.jpg\" class=\"figure-img img-fluid\" alt=\"\" /></a>\n                  <a href=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"\"><img src=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"figure-img img-fluid\" alt=\"\" /></a>\n                  <a href=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"\"><img src=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"figure-img img-fluid\" alt=\"\" /></a>\n                  <a href=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"\"><img src=\"assets/images/giWLy5rFMjfdAxb4hh2Uzj-650-80.jpg.webp\" class=\"figure-img img-fluid\" alt=\"\" /></a>\n                </div>\n                <div class=\"showCount\"><span></span></div>\n              </div>\n            </div>\n\n            <div class=\"mb-3\">\n              <div class=\"figure-caption text-left text-secondary col px-0 mb-2\">(Image credit: Disney/Marvel Studios)</div>\n              <div class=\"figure-caption text-secondary col px-0\">How to watch the Marvel movies in order (release and chronological)</div>\n            </div>\n\n            <div class=\"fb-comments\" data-href=\"http://onektrends.com/angular\" data-width=\"400\" data-numposts=\"12\"></div>\n          </figure>\n\n          <div class=\"col py-2\">\n            <div class=\"row text-center shadow-sm bg-light\">\n              <div class=\"col col-sm-4 py-3 text-light rounded-left border border-right-0\">\n                <app-likes></app-likes>\n              </div>\n              <div class=\"col-6 col-sm-4 py-3 text-light border border-right-0\">\n                <div class=\"socialshareOptions d-inline-block\">\n                  <svg width=\"26px\" class=\"shareIt\" height=\"26px\" viewBox=\"0 0 512 512.00004\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0\"/></svg>\n                  <div class=\"links\">\n                    <a href=\"\" class=\"d-inline-block align-middle\"><span class=\"facebook_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"twitter_ico sprite_ico\"></span></a>\n                    <a href=\"whatsapp://send?text=Marvel Worldwide - https://goldoranda.github.io/marvelworld\" class=\"d-inline-block align-middle\"><span class=\"whatsapp_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"instagran_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"pinterest_ico sprite_ico\"></span></a>\n                  </div>\n                </div>\n                <div class=\"d-block ShowShare text-dark\">5.2K Share</div>\n              </div>\n              <div class=\"col col-sm-4 py-3 text-light border rounded-right\">\n                <button type=\"button\" class=\"click_toCopy border-0 bg-transparent\" id=\"marvel_studio01\" onclick=\"Copy();\">\n                  <svg height=\"26px\" width=\"26px\" viewBox=\"-21 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m325.332031 512h-266.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-288c0-32.363281 26.304688-58.664062 58.667969-58.664062h10.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-10.664062c-14.699219 0-26.667969 11.964843-26.667969 26.664062v288c0 14.699219 11.96875 26.667969 26.667969 26.667969h266.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-10.664062c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v10.664062c0 32.363281-26.304688 58.667969-58.667969 58.667969zm0 0\"/><path d=\"m410.667969 384h-224c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-266.664062c0-32.363281 26.304688-58.667969 58.667969-58.667969h224c32.363281 0 58.664062 26.304688 58.664062 58.667969v266.664062c0 32.363281-26.300781 58.667969-58.664062 58.667969zm-224-352c-14.699219 0-26.667969 11.96875-26.667969 26.667969v266.664062c0 14.699219 11.96875 26.667969 26.667969 26.667969h224c14.699219 0 26.664062-11.96875 26.664062-26.667969v-266.664062c0-14.699219-11.964843-26.667969-26.664062-26.667969zm0 0\"/></svg>\n                </button>\n                <div class=\"CopyUrl border bg-light d-none shadow-sm\"><textarea class=\"url border\" readonly=\"readonly\" rows=\"1\" cols=\"30\"></textarea></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"span6 w-100 my-4\">\n            <textarea id=\"emojionearea1\" class=\"w-100\" style=\"height:80px;\">Default :smile:</textarea>\n          </div>\n\n          <div class=\"mt-3 p-3 border rounded-lg\">\n            <div class=\"media\">\n              <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n                <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n              </div>\n              <div class=\"media-body\">\n                <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n                <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n\n                <div class=\"media mt-3\">\n                  <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n                    <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n                  </div>\n                  <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n                    <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                  </div>\n                </div>\n                <div class=\"media mt-3\">\n                  <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n                    <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n                  </div>\n                  <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n                    <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"media\">\n              <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n                <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n              </div>\n              <div class=\"media-body\">\n                <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n                <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n                <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n              </div>\n              <div class=\"media-body\">\n                <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n                <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"postWrap shadow-sm p-2 p-sm-3 border rounded mb-4\" id=\"marvel_studio02\">\n          <div class=\"postAuthor media mb-2\">\n            <div class=\"avatarWrap border shadow-sm mr-2\">\n              <img src=\"assets/images/marvel.png\" class=\"imgCenter figure-img img-fluid\" alt=\"\">\n            </div>\n            <div class=\"media-body\">\n              <h5 class=\"mt-2 mb-1\">Marvel Studio</h5>\n              <p class=\"desc\">Cras sit amet nibh libero, in gravida nulla.</p>\n            </div>\n          </div>\n          <figure class=\"figure w-100 mb-2\">\n            <div class=\"imgWrap bg_gradGrey rounded mb-1\"><img src=\"assets/images/hulk.jpg\" class=\"imgCenter figure-img img-fluid\" alt=\"\" /></div>\n            <div class=\"d-flex justify-content-between\">\n              <figcaption class=\"figure-caption text-secondary justify-content-start\">A caption for the above image.</figcaption>\n              <figcaption class=\"figure-caption text-secondary justify-content-end\">(Image credit: Disney)</figcaption>\n            </div>\n          </figure>\n          <p class=\"my-2\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\n\n          <div class=\"col py-2\">\n            <div class=\"row text-center shadow-sm bg-light\">\n              <div class=\"col py-3 text-light rounded-left border border-right-0\">\n                <app-likes></app-likes>\n              </div>\n              <div class=\"col py-3 text-light border border-right-0\">\n                <div class=\"socialshareOptions d-inline-block\">\n                  <svg width=\"26px\" class=\"shareIt\" height=\"26px\" viewBox=\"0 0 512 512.00004\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0\"/></svg>\n                  <div class=\"links\">\n                    <a href=\"\" class=\"d-inline-block align-middle\"><span class=\"facebook_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"twitter_ico sprite_ico\"></span></a>\n                    <a href=\"whatsapp://send?text=Marvel Worldwide - https://goldoranda.github.io/marvelworld\" class=\"d-inline-block align-middle\"><span class=\"whatsapp_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"instagran_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"pinterest_ico sprite_ico\"></span></a>\n                  </div>\n                </div>\n                <div class=\"d-block ShowShare text-dark\">5.2K Share</div>\n              </div>\n              <div class=\"col py-3 text-light border rounded-right\">\n                <button type=\"button\" class=\"click_toCopy border-0 bg-transparent\" id=\"marvel_studio02\" onclick=\"Copy();\">\n                  <svg height=\"26px\" width=\"26px\" viewBox=\"-21 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m325.332031 512h-266.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-288c0-32.363281 26.304688-58.664062 58.667969-58.664062h10.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-10.664062c-14.699219 0-26.667969 11.964843-26.667969 26.664062v288c0 14.699219 11.96875 26.667969 26.667969 26.667969h266.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-10.664062c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v10.664062c0 32.363281-26.304688 58.667969-58.667969 58.667969zm0 0\"/><path d=\"m410.667969 384h-224c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-266.664062c0-32.363281 26.304688-58.667969 58.667969-58.667969h224c32.363281 0 58.664062 26.304688 58.664062 58.667969v266.664062c0 32.363281-26.300781 58.667969-58.664062 58.667969zm-224-352c-14.699219 0-26.667969 11.96875-26.667969 26.667969v266.664062c0 14.699219 11.96875 26.667969 26.667969 26.667969h224c14.699219 0 26.664062-11.96875 26.664062-26.667969v-266.664062c0-14.699219-11.964843-26.667969-26.664062-26.667969zm0 0\"/></svg>\n                </button>\n                <div class=\"CopyUrl border bg-light d-none shadow-sm\"><textarea class=\"url border\" readonly=\"readonly\" rows=\"1\" cols=\"30\"></textarea></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"span6 w-100 my-4\">\n            <textarea id=\"emojionearea1\" class=\"w-100\" style=\"height:80px;\">Default :smile:</textarea>\n          </div>\n\n          <div class=\"media mt-3 p-3 border rounded-lg\">\n            <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n              <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n            </div>\n            <div class=\"media-body\">\n              <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n              <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n\n              <div class=\"media mt-3\">\n                <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n                  <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n                </div>\n                <div class=\"media-body\">\n                  <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n                  <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"postWrap shadow-sm p-2 p-sm-3 border rounded mb-4\" id=\"marvel_studio03\">\n          <div class=\"postAuthor media mb-2\">\n            <div class=\"avatarWrap border shadow-sm mr-2\">\n              <img src=\"assets/images/marvel.png\" class=\"imgCenter figure-img img-fluid\" alt=\"\">\n            </div>\n            <div class=\"media-body\">\n              <h5 class=\"mt-2 mb-1\">Marvel Studio</h5>\n              <p class=\"desc\">Cras sit amet nibh libero, in gravida nulla.</p>\n            </div>\n          </div>\n          <figure class=\"figure w-100 mb-2\">\n            <div class=\"imgWrap bg_gradGrey rounded mb-1\"><img src=\"assets/images/captain-america-civil-war-international-trailer1.jpg\" class=\"imgCenter figure-img img-fluid\" alt=\"\" /></div>\n            <figcaption class=\"figure-caption text-secondary\">A caption for the above image.</figcaption>\n          </figure>\n          <p class=\"my-2\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\n\n          <div class=\"col py-2\">\n            <div class=\"row text-center shadow-sm bg-light\">\n              <div class=\"col py-3 text-light rounded-left border border-right-0\">\n                <app-likes></app-likes>\n              </div>\n              <div class=\"col py-3 text-light border border-right-0\">\n                <div class=\"socialshareOptions d-inline-block\">\n                  <svg width=\"26px\" class=\"shareIt\" height=\"26px\" viewBox=\"0 0 512 512.00004\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0\"/></svg>\n                  <div class=\"links\">\n                    <a href=\"\" class=\"d-inline-block align-middle\"><span class=\"facebook_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"twitter_ico sprite_ico\"></span></a>\n                    <a href=\"whatsapp://send?text=Marvel Worldwide - https://goldoranda.github.io/marvelworld\" class=\"d-inline-block align-middle\"><span class=\"whatsapp_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"instagran_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"pinterest_ico sprite_ico\"></span></a>\n                  </div>\n                </div>\n                <div class=\"d-block ShowShare text-dark\">5.2K Share</div>\n              </div>\n              <div class=\"col py-3 text-light border rounded-right\">\n                <button type=\"button\" class=\"click_toCopy border-0 bg-transparent\" id=\"marvel_studio03\" onclick=\"Copy();\">\n                  <svg height=\"26px\" width=\"26px\" viewBox=\"-21 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m325.332031 512h-266.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-288c0-32.363281 26.304688-58.664062 58.667969-58.664062h10.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-10.664062c-14.699219 0-26.667969 11.964843-26.667969 26.664062v288c0 14.699219 11.96875 26.667969 26.667969 26.667969h266.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-10.664062c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v10.664062c0 32.363281-26.304688 58.667969-58.667969 58.667969zm0 0\"/><path d=\"m410.667969 384h-224c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-266.664062c0-32.363281 26.304688-58.667969 58.667969-58.667969h224c32.363281 0 58.664062 26.304688 58.664062 58.667969v266.664062c0 32.363281-26.300781 58.667969-58.664062 58.667969zm-224-352c-14.699219 0-26.667969 11.96875-26.667969 26.667969v266.664062c0 14.699219 11.96875 26.667969 26.667969 26.667969h224c14.699219 0 26.664062-11.96875 26.664062-26.667969v-266.664062c0-14.699219-11.964843-26.667969-26.664062-26.667969zm0 0\"/></svg>\n                </button>\n                <div class=\"CopyUrl border bg-light d-none shadow-sm\"><textarea class=\"url border\" readonly=\"readonly\" rows=\"1\" cols=\"30\"></textarea></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"media mt-3 p-3 border rounded-lg\">\n            <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n              <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n            </div>\n            <div class=\"media-body\">\n              <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n              <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n\n              <div class=\"media mt-3\">\n                <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n                  <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n                </div>\n                <div class=\"media-body\">\n                  <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n                  <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"postWrap shadow-sm p-2 p-sm-3 border rounded mb-4\" id=\"marvel_studio04\">\n          <div class=\"postAuthor media mb-2\">\n            <div class=\"avatarWrap border shadow-sm mr-2\">\n              <img src=\"assets/images/marvel.png\" class=\"imgCenter figure-img img-fluid\" alt=\"\">\n            </div>\n            <div class=\"media-body\">\n              <h5 class=\"mt-2 mb-1\">Marvel Studio</h5>\n              <p class=\"desc\">Cras sit amet nibh libero, in gravida nulla.</p>\n            </div>\n          </div>\n          <figure class=\"figure w-100 mb-2\">\n            <div class=\"imgWrap bg_gradGrey rounded mb-1\"><img src=\"assets/images/thor_ragnarok.jpg\" class=\"imgCenter figure-img img-fluid\" alt=\"\" /></div>\n            <figcaption class=\"figure-caption text-secondary\">A caption for the above image.</figcaption>\n          </figure>\n          <p class=\"my-2\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>\n\n          <div class=\"col py-2\">\n            <div class=\"row text-center shadow-sm bg-light\">\n              <div class=\"col py-3 text-light rounded-left border border-right-0\">\n                <app-likes></app-likes>\n              </div>\n              <div class=\"col py-3 text-light border border-right-0\">\n                <div class=\"socialshareOptions d-inline-block\">\n                  <svg width=\"26px\" class=\"shareIt\" height=\"26px\" viewBox=\"0 0 512 512.00004\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0\"/></svg>\n                  <div class=\"links\">\n                    <a href=\"\" class=\"d-inline-block align-middle\"><span class=\"facebook_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"twitter_ico sprite_ico\"></span></a>\n                    <a href=\"whatsapp://send?text=Marvel Worldwide - https://goldoranda.github.io/marvelworld\" class=\"d-inline-block align-middle\"><span class=\"whatsapp_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"instagran_ico sprite_ico\"></span></a>\n                    <a href=\"#\" class=\"d-inline-block align-middle\"><span class=\"pinterest_ico sprite_ico\"></span></a>\n                  </div>\n                </div>\n                <div class=\"d-block ShowShare text-dark\">5.2K Share</div>\n              </div>\n              <div class=\"col py-3 text-light border rounded-right\">\n                <button type=\"button\" class=\"click_toCopy border-0 bg-transparent\" id=\"marvel_studio04\" onclick=\"Copy();\">\n                  <svg height=\"26px\" width=\"26px\" viewBox=\"-21 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m325.332031 512h-266.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-288c0-32.363281 26.304688-58.664062 58.667969-58.664062h10.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-10.664062c-14.699219 0-26.667969 11.964843-26.667969 26.664062v288c0 14.699219 11.96875 26.667969 26.667969 26.667969h266.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-10.664062c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v10.664062c0 32.363281-26.304688 58.667969-58.667969 58.667969zm0 0\"/><path d=\"m410.667969 384h-224c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-266.664062c0-32.363281 26.304688-58.667969 58.667969-58.667969h224c32.363281 0 58.664062 26.304688 58.664062 58.667969v266.664062c0 32.363281-26.300781 58.667969-58.664062 58.667969zm-224-352c-14.699219 0-26.667969 11.96875-26.667969 26.667969v266.664062c0 14.699219 11.96875 26.667969 26.667969 26.667969h224c14.699219 0 26.664062-11.96875 26.664062-26.667969v-266.664062c0-14.699219-11.964843-26.667969-26.664062-26.667969zm0 0\"/></svg>\n                </button>\n                <div class=\"CopyUrl border bg-light d-none shadow-sm\"><textarea class=\"url border\" readonly=\"readonly\" rows=\"1\" cols=\"30\"></textarea></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"media mt-3 p-3 border rounded-lg\">\n            <div class=\"avatarWrap_sm mr-3 shadow-sm\">\n              <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n            </div>\n            <div class=\"media-body\">\n              <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n              <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n\n              <div class=\"media mt-3\">\n                <div class=\"avatarWrap_sm mr-3 shadow-sm\">  \n                  <img src=\"assets/images/account.png\" class=\"imgCenter\" alt=\"\" />\n                </div>\n                <div class=\"media-body\">\n                  <h5 class=\"mt-0 mb-1\">Marvel Studio</h5>\n                  <p class=\"comment\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-12 col-md-4 px-2 px-sm-3 bg-secondary text-light\">\n        <div class=\"imgWrap\">\n          <img src=\"assets/images/1122386_IN_PC_Hardware_670x645_3_R1_1530625107.jpg\" class=\"imgCenter\" alt=\"\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _aside_aside_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aside/aside.component */ "./src/app/aside/aside.component.ts");
/* harmony import */ var _likes_likes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./likes/likes.component */ "./src/app/likes/likes.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _aside_aside_component__WEBPACK_IMPORTED_MODULE_8__["AsideComponent"],
                _likes_likes_component__WEBPACK_IMPORTED_MODULE_9__["LikesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/aside/aside.component.css":
/*!*******************************************!*\
  !*** ./src/app/aside/aside.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FzaWRlL2FzaWRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/aside/aside.component.html":
/*!********************************************!*\
  !*** ./src/app/aside/aside.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imgWrap\">\n  <img src=\"/marvelworld/assets/images/1122386_IN_PC_Hardware_670x645_3_R1_1530625107.jpg\" class=\"imgCenter\" alt=\"\" />\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/aside/aside.component.ts":
/*!******************************************!*\
  !*** ./src/app/aside/aside.component.ts ***!
  \******************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AsideComponent = /** @class */ (function () {
    function AsideComponent() {
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    AsideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__(/*! ./aside.component.html */ "./src/app/aside/aside.component.html"),
            styles: [__webpack_require__(/*! ./aside.component.css */ "./src/app/aside/aside.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AsideComponent);
    return AsideComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-dark py-3\">\r\n    <div class=\"container\">\r\n        <div class=\"col text-center\">\r\n          <p class=\"m-0 text-light\">&copy; Marvel Studio 2020</p>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"py-3 bg-dark text-light sticky-top\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col brandlogo\">\n        <a href=\"/marvelworld/\" class=\"\">Marvel Worldwide</a>\n      </div>\n      \n      <div class=\"col pr-sm-0\">\n        <div class=\"outer-menu\">\n          <input class=\"checkbox-toggle\" type=\"checkbox\" />\n          <div class=\"hamburger\">\n            <div></div>\n          </div>\n          <div class=\"menu\">\n            <div>\n              <div>\n                <ul>\n                  <li><a href=\"#\">Avengers</a></li>\n                  <li><a href=\"#\">Iron Man (2008)</a></li>\n                  <li><a href=\"#\">The Incredible Hulk (2008)</a></li>\n                  <li><a href=\"#\">Iron Man 2 (2010)</a></li>\n                  <li><a href=\"#\">Thor (2011)</a></li>\n                  <li><a href=\"#\">Captain America: The First Avenger (2011)</a></li>\n                  <li><a href=\"#\">The Avengers (2012)</a></li>\n                  <li><a href=\"#\">Iron Man 3 (2013)</a></li>\n                  <li><a href=\"#\">Thor: The Dark World (2013)</a></li>\n                  <li><a href=\"#\">Captain America: The Winter Soldier (2014)</a></li>\n                  <li><a href=\"#\">Guardians of the Galaxy (2014)</a></li>\n                  <li><a href=\"#\">Avengers: Age of Ultron (2015)</a></li>\n                  <li><a href=\"#\">Ant-Man (2015)</a></li>\n                  <li><a href=\"#\">Captain America: Civil War (2016)</a></li>\n                  <li><a href=\"#\">Doctor Strange (2016)</a></li>\n                  <li><a href=\"#\">Guardians of the Galaxy 2 (2017)</a></li>\n                  <li><a href=\"#\">Spider-Man: Homecoming (2017)</a></li>\n                  <li><a href=\"#\">Thor: Ragnarok (2017)</a></li>\n                  <li><a href=\"#\">Black Panther (2017)</a></li>\n                  <li><a href=\"#\">Avengers: Infinity War (2018)</a></li>\n                  <li><a href=\"#\">Ant-Man and the Wasp (2018)</a></li>\n                  <li><a href=\"#\">Captain Marvel (2019)</a></li>\n                  <li><a href=\"#\">Avengers: Endgame (2019)</a></li>\n                  <li><a href=\"#\">Spider-Man: Far From Home (2019)</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/likes/likes.component.css":
/*!*******************************************!*\
  !*** ./src/app/likes/likes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reactionWrap{cursor:pointer;}\r\n.reactionWrap .likedtedt{font-size:12px; color:#333;font-family: 'Raleway', sans-serif;}\r\n.inputWrap.react{margin:0;}\r\n.inputWrap.react input{visibility:hidden; position:absolute;}\r\n.notliked + .reactionWrap .like{fill:#000000;}\r\n.liked + .reactionWrap .like{fill:#009688;}\r\n.ShowLikes{font-size:12px;font-family:'Raleway',sans-serif;font-weight:700;position:absolute;width:100%;left:0;margin:0;bottom:0;padding:3px 0}\r\n.liked + .reactionWrap .likesAnimate{-webkit-animation-duration:0.8s;\r\n    animation-duration:0.8s;\r\n    -webkit-animation-duration: var(--animate-duration);\r\n    animation-duration: var(--animate-duration);\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;}\r\n.liked + .reactionWrap .likesAnimate{-webkit-animation-name:heartBeat;animation-name:heartBeat;-webkit-animation-duration:1.3s;animation-duration:1.3s;-webkit-animation-duration:calc(var(--animate-duration) * 1.3);animation-duration:calc(var(--animate-duration) * 1.3);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}\r\n@-webkit-keyframes heartBeat {\r\n0%{transform:scale(1)}\r\n25%{transform:scale(1.3)}\r\n50%{transform:scale(1)}\r\n}\r\n@keyframes heartBeat {\r\n0%{transform:scale(1)}\r\n25%{transform:scale(1.3)}\r\n50%{transform:scale(1)}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlrZXMvbGlrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGNBQWMsQ0FBQztBQUM3Qix5QkFBeUIsY0FBYyxFQUFFLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQztBQUN2RixpQkFBaUIsUUFBUSxDQUFDO0FBQzFCLHVCQUF1QixpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztBQUU1RCxnQ0FBZ0MsWUFBWSxDQUFDO0FBQzdDLDZCQUE2QixZQUFZLENBQUM7QUFFMUMsV0FBVyxjQUFjLENBQUMsZ0NBQWdDLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhO0FBRTlJLHFDQUFxQywrQkFBK0I7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1EQUFtRDtJQUNuRCwyQ0FBMkM7SUFDM0MsaUNBQWlDO0lBQ2pDLHlCQUF5QixDQUFDO0FBQzlCLHFDQUFxQyxnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQywrQkFBK0IsQ0FBQyx1QkFBdUIsQ0FBQyw4REFBOEQsQ0FBQyxzREFBc0QsQ0FBQyw2Q0FBNkMsQ0FBQyxxQ0FBcUM7QUFFaFc7QUFDQSxHQUE4QixrQkFBa0I7QUFDaEQsSUFBaUMsb0JBQW9CO0FBQ3JELElBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0EsR0FBOEIsa0JBQWtCO0FBQ2hELElBQWlDLG9CQUFvQjtBQUNyRCxJQUErQixrQkFBa0I7QUFDakQiLCJmaWxlIjoic3JjL2FwcC9saWtlcy9saWtlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWN0aW9uV3JhcHtjdXJzb3I6cG9pbnRlcjt9XHJcbi5yZWFjdGlvbldyYXAgLmxpa2VkdGVkdHtmb250LXNpemU6MTJweDsgY29sb3I6IzMzMztmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO31cclxuLmlucHV0V3JhcC5yZWFjdHttYXJnaW46MDt9XHJcbi5pbnB1dFdyYXAucmVhY3QgaW5wdXR7dmlzaWJpbGl0eTpoaWRkZW47IHBvc2l0aW9uOmFic29sdXRlO31cclxuXHJcbi5ub3RsaWtlZCArIC5yZWFjdGlvbldyYXAgLmxpa2V7ZmlsbDojMDAwMDAwO31cclxuLmxpa2VkICsgLnJlYWN0aW9uV3JhcCAubGlrZXtmaWxsOiMwMDk2ODg7fVxyXG5cclxuLlNob3dMaWtlc3tmb250LXNpemU6MTJweDtmb250LWZhbWlseTonUmFsZXdheScsc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtsZWZ0OjA7bWFyZ2luOjA7Ym90dG9tOjA7cGFkZGluZzozcHggMH1cclxuXHJcbi5saWtlZCArIC5yZWFjdGlvbldyYXAgLmxpa2VzQW5pbWF0ZXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjowLjhzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjAuOHM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tYW5pbWF0ZS1kdXJhdGlvbik7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWFuaW1hdGUtZHVyYXRpb24pO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDt9XHJcbi5saWtlZCArIC5yZWFjdGlvbldyYXAgLmxpa2VzQW5pbWF0ZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmhlYXJ0QmVhdDthbmltYXRpb24tbmFtZTpoZWFydEJlYXQ7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4zczthbmltYXRpb24tZHVyYXRpb246MS4zczstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMS4zKTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDEuMyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnRCZWF0IHtcclxuMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfVxyXG4yNSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX1cclxuNTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX1cclxufVxyXG5Aa2V5ZnJhbWVzIGhlYXJ0QmVhdCB7XHJcbjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX1cclxuMjUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7dHJhbnNmb3JtOnNjYWxlKDEuMyl9XHJcbjUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/likes/likes.component.html":
/*!********************************************!*\
  !*** ./src/app/likes/likes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"inputWrap react d-inline-block\">\n  <input type=\"checkbox\" class=\"mr-1\" [(ngModel)]=\"theCheckbox\" (change)=\"toggleVisibility($event)\" [ngClass]=\"status ? 'liked' : 'notliked'\" /> \n  <div class=\"reactionWrap rounded-pill d-block\">\n    <span class=\"d-inline-block align-middle likesAnimate mb-2\">\n      <svg class=\"like\" width=\"26px\" height=\"26px\" enable-background=\"new 0 0 478.2 478.2\" version=\"1.1\" viewBox=\"0 0 478.2 478.2\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m457.58 325.1c9.8-12.5 14.5-25.9 13.9-39.7-0.6-15.2-7.4-27.1-13-34.4 6.5-16.2 9-41.7-12.7-61.5-15.9-14.5-42.9-21-80.3-19.2-26.3 1.2-48.3 6.1-49.2 6.3h-0.1c-5 0.9-10.3 2-15.7 3.2-0.4-6.4 0.7-22.3 12.5-58.1 14-42.6 13.2-75.2-2.6-97-16.6-22.9-43.1-24.7-50.9-24.7-7.5 0-14.4 3.1-19.3 8.8-11.1 12.9-9.8 36.7-8.4 47.7-13.2 35.4-50.2 122.2-81.5 146.3-0.6 0.4-1.1 0.9-1.6 1.4-9.2 9.7-15.4 20.2-19.6 29.4-5.9-3.2-12.6-5-19.8-5h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c8.9 0 17.2-2.8 24-7.6l23.5 2.8c3.6 0.5 67.6 8.6 133.3 7.3 11.9 0.9 23.1 1.4 33.5 1.4 17.9 0 33.5-1.4 46.5-4.2 30.6-6.5 51.5-19.5 62.1-38.6 8.1-14.6 8.1-29.1 6.8-38.3 19.9-18 23.4-37.9 22.7-51.9-0.4-8.1-2.2-15-4.1-20.1zm-409.3 122.2c-8.1 0-14.6-6.6-14.6-14.6v-162.6c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.6 14.6-14.6 14.6h-61v0.1zm383.7-133.9c-4.2 4.4-5 11.1-1.8 16.3 0 0.1 4.1 7.1 4.6 16.7 0.7 13.1-5.6 24.7-18.8 34.6-4.7 3.6-6.6 9.8-4.6 15.4 0 0.1 4.3 13.3-2.7 25.8-6.7 12-21.6 20.6-44.2 25.4-18.1 3.9-42.7 4.6-72.9 2.2h-1.4c-64.3 1.4-129.3-7-130-7.1h-0.1l-10.1-1.2c0.6-2.8 0.9-5.8 0.9-8.8v-162.6c0-4.3-0.7-8.5-1.9-12.4 1.8-6.7 6.8-21.6 18.6-34.3 44.9-35.6 88.8-155.7 90.7-160.9 0.8-2.1 1-4.4 0.6-6.7-1.7-11.2-1.1-24.9 1.3-29 5.3 0.1 19.6 1.6 28.2 13.5 10.2 14.1 9.8 39.3-1.2 72.7-16.8 50.9-18.2 77.7-4.9 89.5 6.6 5.9 15.4 6.2 21.8 3.9 6.1-1.4 11.9-2.6 17.4-3.5 0.4-0.1 0.9-0.2 1.3-0.3 30.7-6.7 85.7-10.8 104.8 6.6 16.2 14.8 4.7 34.4 3.4 36.5-3.7 5.6-2.6 12.9 2.4 17.4 0.1 0.1 10.6 10 11.1 23.3 0.4 8.9-3.8 18-12.5 27z\"/></svg>\n    </span>\n    <span *ngIf=\"ifliked\" class=\"likedtedt d-none d-sm-inline-block align-middle mx-2\">You Liked It</span>\n    <div class=\"d-block ShowLikes text-dark\">5.2K Likes</div>\n  </div>\n</label>"

/***/ }),

/***/ "./src/app/likes/likes.component.ts":
/*!******************************************!*\
  !*** ./src/app/likes/likes.component.ts ***!
  \******************************************/
/*! exports provided: LikesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesComponent", function() { return LikesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LikesComponent = /** @class */ (function () {
    function LikesComponent() {
        this.ifliked = false;
        this.marked = false;
        this.status = false;
    }
    LikesComponent.prototype.toggleVisibility = function (e) {
        this.ifliked = e.target.checked;
        this.marked = e.target.checked;
        this.status = !this.status;
    };
    LikesComponent.prototype.ngOnInit = function () {
    };
    LikesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-likes',
            template: __webpack_require__(/*! ./likes.component.html */ "./src/app/likes/likes.component.html"),
            styles: [__webpack_require__(/*! ./likes.component.css */ "./src/app/likes/likes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LikesComponent);
    return LikesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\marvel-world\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map