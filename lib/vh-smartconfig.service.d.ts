export declare class VhEspSmartConfig {
    constructor();
    startESP(wifiInfo: {
        ssid: string;
        bssid: string;
        password: string;
    }): Promise<string | {
        bssid: string;
        ip: string;
    }>;
    stopESP(): Promise<any>;
}
