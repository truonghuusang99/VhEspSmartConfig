(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('vh-smartconfig', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['vh-smartconfig'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var VhEspSmartConfig = /** @class */ (function () {
        function VhEspSmartConfig() {
        }
        VhEspSmartConfig.prototype.startESP = function (wifiInfo) {
            return new Promise(function (resolve, rejects) {
                esptouch.start(wifiInfo['ssid'], wifiInfo['bssid'], wifiInfo['password'], "1", "1", function (success) {
                    if (success)
                        resolve(success);
                    else
                        rejects("Not found");
                }, function (error) {
                    rejects(error);
                });
            });
        };
        VhEspSmartConfig.prototype.stopESP = function () {
            return new Promise(function (resolve, rejects) {
                esptouch.stop(function (res) { return resolve(res); }, function (err) { return rejects(err); });
            });
        };
        return VhEspSmartConfig;
    }());
    VhEspSmartConfig.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function VhEspSmartConfig_Factory() { return new VhEspSmartConfig(); }, token: VhEspSmartConfig, providedIn: "root" });
    VhEspSmartConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    VhEspSmartConfig.ctorParameters = function () { return []; };

    /*
     * Public API Surface of vh-smartconfig
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.VhEspSmartConfig = VhEspSmartConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vh-smartconfig.umd.js.map
