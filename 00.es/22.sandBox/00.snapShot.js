class SnapShotSandBox {
    constructor() {
        this.proxy = window;
        this.modifyPropsMap = {};
        this.active();
    }
    active() {
        this.windowSnapShot = {};
        for (const prop in window) {
            if (window.hasOwnProperty(prop)) {
                this.windowSnapShot[prop] = window[prop];
            }
        }
    }
    inactive() {
        for (const prop in window) {
            if (window.hasOwnProperty(prop)) {
                if (window[prop] !== this.windowSnapShot[prop]) {
                    this.modifyPropsMap[prop] = window[prop];
                    window[prop] = this.modifyPropsMap[prop];
                }
            }
        }
    }
}