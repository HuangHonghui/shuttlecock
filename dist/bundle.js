/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by huanghonghui on 15/2/6.
	 */
	var tabs = __webpack_require__(1);

	tabs();
	tabs({el:'#tabs2'});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by huanghonghui on 15/2/6.
	 */

	var _ = __webpack_require__(2);

	var tabs = function(options){
	    var defaults = {
	        el:'#tabs',
	        tabTitle:'.tabTitle',
	        tabContent:'.tabContent',
	        eventType:'click',
	        activeClass:'active'
	    };
	    // 合并defaults和options
	    var opts = _.extend(defaults, options || {});

	    var tabs = document.querySelector(opts.el);
	    var tabTitle = tabs.querySelectorAll(opts.tabTitle);

	    [].slice.call(tabTitle).forEach(function(item,i){

	        item.addEventListener(opts.eventType,function(e){
	            console.log(this,",",e);
	            // todo: add calls and remove class
	        });
	    });
	};

	module.exports = tabs;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by huanghonghui on 15/2/7.
	 */

	var _ = (function(){
	    var isObject = function(obj) {
	        var type = typeof obj;
	        return type === 'function' || type === 'object' && !!obj;
	    };

	    var extend = function(obj) {
	        if (!isObject(obj)) return obj;
	        var source, prop;
	        for (var i = 1, length = arguments.length; i < length; i++) {
	            source = arguments[i];
	            for (prop in source) {
	                if (Object.prototype.hasOwnProperty.call(source, prop)) {
	                    obj[prop] = source[prop];
	                }
	            }
	        }
	        return obj;
	    };

	    return {
	        isObject:isObject,
	        extend:extend
	    }

	})();

	module.exports = _;


/***/ }
/******/ ])