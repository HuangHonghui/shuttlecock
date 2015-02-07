/**
 * Created by huanghonghui on 15/2/6.
 */

var _ = require('../utils');

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