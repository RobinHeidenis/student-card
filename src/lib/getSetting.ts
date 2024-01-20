import {settingsStore} from "./settingsStore";

export const getSetting = (key: keyof typeof settingsStore, defaultValue: string = null, ignoreParams = false) => {
    const params = new URLSearchParams(window.location.search);
    if (!ignoreParams && params.get(key) !== null) {
        return params.get(key);
    }
    return settingsStore[key] ?? defaultValue;
}