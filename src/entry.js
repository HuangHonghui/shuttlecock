/**
 * Created by huanghonghui on 15/2/6.
 */
var tabs = require('./tabs');

var SideMenu = require('./sideMenu');

tabs();
tabs({el:'#tabs2',eventType:'mouseenter'});
var sidemenu = new SideMenu();
