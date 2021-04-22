import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class VhEspSmartConfig {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmgtc21hcnRjb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZoLXNtYXJ0Y29uZmlnL3NyYy9saWIvdmgtc21hcnRjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCLGdCQUFnQixDQUFDO0lBRVYsUUFBUSxDQUFDLFFBQTJEO1FBQ3pFLE9BQU8sSUFBSSxPQUFPLENBQXlDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQzlFLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDaEYsQ0FBQyxPQUFZLEVBQUUsRUFBRTtnQkFDZixJQUFJLE9BQU87b0JBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBOztvQkFDeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzNCLENBQUMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxPQUFPO1FBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDekQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSB2YXIgZXNwdG91Y2g6IGFueTtcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZoRXNwU21hcnRDb25maWcge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHN0YXJ0RVNQKHdpZmlJbmZvOiB7IHNzaWQ6IHN0cmluZywgYnNzaWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgYnNzaWQ6IHN0cmluZywgaXA6IHN0cmluZyB9IHwgc3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0cykgPT4ge1xuICAgICAgZXNwdG91Y2guc3RhcnQod2lmaUluZm9bJ3NzaWQnXSwgd2lmaUluZm9bJ2Jzc2lkJ10sIHdpZmlJbmZvWydwYXNzd29yZCddLCBcIjFcIiwgXCIxXCIsXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2VzcykgcmVzb2x2ZShzdWNjZXNzKVxuICAgICAgICAgIGVsc2UgcmVqZWN0cyhcIk5vdCBmb3VuZFwiKVxuICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHJlamVjdHMoZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzdG9wRVNQKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3RzKSA9PiB7XG4gICAgICBlc3B0b3VjaC5zdG9wKHJlcyA9PiByZXNvbHZlKHJlcyksIGVyciA9PiByZWplY3RzKGVycikpXG4gICAgfSlcbiAgfVxufVxuIl19