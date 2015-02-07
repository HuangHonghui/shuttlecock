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
