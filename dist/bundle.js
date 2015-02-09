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

	var SideMenu = __webpack_require__(2);

	tabs();
	tabs({el:'#tabs2',eventType:'mouseenter'});
	var sidemenu = new SideMenu();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	var _ = __webpack_require__(3);
	var classie = __webpack_require__(4);

	/**
	 * create tabs
	 * @param {options}
	 * options = {
	        el:'#tabs',
	        tabTitle:'.tabTitle',
	        tabContent:'.tabContent',
	        eventType:'click',
	        activeClass:'active'
	    }
	 * */

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

	            var thisParent = e.currentTarget.parentNode;
	            var targetContent = e.currentTarget.getAttribute('data-target');

	            // add class and remove class
	            var currentActiveTitle = thisParent.querySelector(opts.tabTitle+"."+opts.activeClass);
	            if(currentActiveTitle){
	                classie.removeClass(currentActiveTitle,opts.activeClass);
	            }
	            classie.addClass(e.target,opts.activeClass);

	            var currentActiveContent = tabs.querySelector(opts.tabContent+"."+opts.activeClass);
	            if(currentActiveContent){
	                classie.removeClass(currentActiveContent,opts.activeClass);
	            }
	            if(targetContent){
	                classie.addClass(document.querySelector(targetContent),opts.activeClass);
	            }

	        });

	    });
	};

	module.exports = tabs;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by huanghonghui on 15/2/8.
	 */
	    var _ = __webpack_require__(3);
	var classie = __webpack_require__(4);
	var sideMenu = function(options){
	    var defaults = {
	        el:'#sideMenu',
	        menuTitle:'.menuTitle',
	        subMenu:'.subMenu',
	        menuOpenClass:'open',
	        activeClass:'active'

	    };

	    var opts = _.extend(defaults,options||{});

	    var sideMenu = document.querySelector(opts.el);
	    var menuTitles = sideMenu.querySelectorAll(opts.menuTitle);

	    [].slice.call(menuTitles).forEach(function(item,i){
	        item.firstElementChild.addEventListener('click',function(e){
	            console.log(e.currentTarget,":",item,":",this);
	//            var clickOne = e.currentTarget;
	            var title = e.currentTarget.parentNode;
	            // 1.有sub menu，打开sub menu，其他事情不干
	            // 2.没有sub menu，给自己带父亲li加active，
	            //  a.互斥，一个展开，其他带关闭
	            //  b.打开一个对其他对没有影响。
	            // todo:3.如果是大于2级，

	                if(title.querySelector(opts.subMenu)!==null){
	                    // has sub menu
	                    console.log('has sub menu');
	                    classie.toggle(title, opts.menuOpenClass);
	                }else{
	                    if(classie.has(title,opts.activeClass)){
	                        return;
	                    }
	                    [].slice.call(sideMenu.querySelectorAll(opts.menuTitle+"."+opts.activeClass)).forEach(function(li,index){
	                        classie.remove(li,opts.activeClass);
	                        if(title.parentNode.parentNode !== li){
	                            classie.remove(li,opts.menuOpenClass);
	                        }

	                    });
	                    classie.add(title,opts.activeClass);
	                    classie.add(title.parentNode.parentNode,opts.activeClass);
	                    if(!classie.has(title.parentNode.parentNode,opts.menuOpenClass)){
	                        classie.add(title.parentNode.parentNode,opts.menuOpenClass);
	                    }

	                }

	        },false);

	    });
	};

	module.exports = sideMenu;

/***/ },
/* 3 */
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * classie v1.0.1
	 * class helper functions
	 * from bonzo https://github.com/ded/bonzo
	 * MIT license
	 *
	 * classie.has( elem, 'my-class' ) -> true/false
	 * classie.add( elem, 'my-new-class' )
	 * classie.remove( elem, 'my-unwanted-class' )
	 * classie.toggle( elem, 'my-class' )
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {

	    'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	    function classReg( className ) {
	        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	    }

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	    var hasClass, addClass, removeClass;

	    if ( 'classList' in document.documentElement ) {
	        hasClass = function( elem, c ) {
	            return elem.classList.contains( c );
	        };
	        addClass = function( elem, c ) {
	            elem.classList.add( c );
	        };
	        removeClass = function( elem, c ) {
	            elem.classList.remove( c );
	        };
	    }
	    else {
	        hasClass = function( elem, c ) {
	            return classReg( c ).test( elem.className );
	        };
	        addClass = function( elem, c ) {
	            if ( !hasClass( elem, c ) ) {
	                elem.className = elem.className + ' ' + c;
	            }
	        };
	        removeClass = function( elem, c ) {
	            elem.className = elem.className.replace( classReg( c ), ' ' );
	        };
	    }

	    function toggleClass( elem, c ) {
	        var fn = hasClass( elem, c ) ? removeClass : addClass;
	        fn( elem, c );
	    }

	    var classie = {
	        // full names
	        hasClass: hasClass,
	        addClass: addClass,
	        removeClass: removeClass,
	        toggleClass: toggleClass,
	        // short names
	        has: hasClass,
	        add: addClass,
	        remove: removeClass,
	        toggle: toggleClass
	    };

	// transport
	    if ( true ) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ( typeof exports === 'object' ) {
	        // CommonJS
	        module.exports = classie;
	    } else {
	        // browser global
	        window.classie = classie;
	    }

	})( window );


/***/ }
/******/ ])