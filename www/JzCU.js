
exports.checkUpdate = function (args, onfulfill, onreject) {
    var ThenFail = window.ThenFail;
    var promise;

    if (ThenFail && !onfulfill && !onreject) {
        promise = new ThenFail();
    }
    if(!args) {
        args = {};
    }

    cordova
        .exec(function () {
            if (promise) {
                promise.resolve();
            } else if (onfulfill) {
                onfulfill();
            }
        }, function (err) {
            if (promise) {
                promise.reject(err);
            } else if (onreject) {
                onreject(err);
            }
        }, 'JzCU', 'checkUpdate', [
            args
        ]);

    return promise;
};