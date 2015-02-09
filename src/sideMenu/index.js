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