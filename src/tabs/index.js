
var _ = require('../utils');
var classie = require('../classie');

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