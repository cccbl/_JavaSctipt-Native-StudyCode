function observed(root, propertyName, targetMethod, beforeCall, afterCall,beforePushIndex,afterPushIndex) {
    if (!root._beforeCallList || !root._afterCallList) {
        root._beforeCallList = {};
        root._afterCallList = {};
    }
    if (!root._beforeCallList[propertyName] || !root._afterCallList[propertyName]) {
        root._beforeCallList[propertyName] = [];
        root._afterCallList[propertyName] = [];
        observed.proxy(root, propertyName);
    }
    if (typeof beforeCall === 'function') {
        beforeCall._targetMethod = targetMethod;
        if (beforePushIndex!=undefined){
            root._beforeCallList[propertyName].splice(beforePushIndex,0,beforeCall)
        } else {
            root._beforeCallList[propertyName].push(beforeCall);
        }
    }
    if (typeof afterCall === 'function') {
        afterCall._targetMethod = targetMethod;
        if (afterPushIndex!=undefined) {
            root._afterCallList[propertyName].splice(afterPushIndex, 0, afterCall);
        }else {
            root._afterCallList[propertyName].push(afterCall);
        }
    }
}

observed.supportMethod = ['push', 'splice'];
observed.proxy = function (root, propertyName) {
    var target = get(root, propertyName);
    if (Array.isArray(target)) {
        observed.proxyArray(root, propertyName);
    } else {
        observed.proxyObject(root, propertyName);
    }
}
observed.proxyObject = function (root, propertyName) {
    var proxyValue = get(root, propertyName); //临时变量
    var attrs = propertyName.split('.');
    var suff = String(attrs.pop());
    var pref = attrs.join("");
    Object.defineProperty(get(root, pref), suff, {
        get: function () {
            return proxyValue;
        },
        set: function (value) {
            var o = this;
            root._beforeCallList[propertyName].forEach(function (proxyMethod) {
                proxyMethod.call(o, value)
            });
            proxyValue = value;
            root._afterCallList[propertyName].forEach(function (proxyMethod) {
                proxyMethod.call(o, value)
            });
        }
    });
};
observed.proxyArray = function (root, propertyName) {
    var array = get(root, propertyName);
    observed.supportMethod.forEach(function (value) {
        var method = array[value];
        array[value] = function () {
            var args = arguments;
            var o = this;
            root._beforeCallList[propertyName].filter(proxyMethod => proxyMethod._targetMethod === '*' || proxyMethod._targetMethod === value)
                .forEach(function (proxyMethod) {
                    proxyMethod.apply(o, args);

                });
            var result = method.apply(o, args);
            root._afterCallList[propertyName].filter(proxyMethod => proxyMethod._targetMethod === '*' || proxyMethod._targetMethod === value)
                .forEach(function (proxyMethod) {
                    proxyMethod.apply(o, args)
                });
            return result;
        }
    })
};

