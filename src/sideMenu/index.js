/**
 * Created by huanghonghui on 15/2/8.
 */
    var _ = require('../utils');
var classie = require('../classie');
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
        item.addEventListener('click',function(e){
            var currentActiveTitle = sideMenu.querySelector(opts.menuTitle+"."+opts.activeClass);
            if(currentActiveTitle){
                classie.removeClass(currentActiveTitle,opts.activeClass);
                classie.removeClass(currentActiveTitle,opts.menuOpenClass);
            }
            if(e.target.querySelector(opts.subMenu)!==null){
                // has sub menu
                classie.add(e.target, opts.menuOpenClass+" "+opts.activeClass);
            }else{
                classie.add(e.target, opts.activeClass);
            }
        });

    });
};

module.exports = sideMenu;