import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

class VhEspSmartConfig {
    constructor() { }
    startESP(wifiInfo) {
        return new Promise((resolve, rejects) => {
            esptouch.start(wifiInfo['ssid'], wifiInfo['bssid'], wifiInfo['password'], "1", "1", (success) => {
                if (success)
                    resolve(success);
                else
                    rejects("Not found");
            }, (error) => {
                rejects(error);
            });
        });
    }
    stopESP() {
        return new Promise((resolve, rejects) => {
            esptouch.stop(res => resolve(res), err => rejects(err));
        });
    }
}
VhEspSmartConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function VhEspSmartConfig_Factory() { return new VhEspSmartConfig(); }, token: VhEspSmartConfig, providedIn: "root" });
VhEspSmartConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
VhEspSmartConfig.ctorParameters = () => [];

/*
 * Public API Surface of vh-smartconfig
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VhEspSmartConfig };
//# sourceMappingURL=vh-smartconfig.js.map
