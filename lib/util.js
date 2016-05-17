module.exports = {
    mix: function (target) {
        var key;
        var i = 1;
        var args = [].slice.call(arguments);
        // 是否需要覆盖掉原来的属性
        var ride = typeof args[args.length - 1] === 'boolean' ? args.pop() : true;

        // 只有一个参数，对自己mixin
        if (args.length === 1) {
            target = !this.window ? this : {};
            i = 0;
        }

        while((source = args[i++])) {
            for (key in source) {
                if (ride || !(key in target)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    }
}
