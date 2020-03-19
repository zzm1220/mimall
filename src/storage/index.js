/**
 * 封装storage
 */
const STORAGE_KEY = "mall";

export default {
    setItem(key, value, module) {
        let storage;
        if (module) {
            storage = this.getItem(module);
            storage[key] = value;
            this.setItem(module, storage);
        } else {
            storage = this.getStorage();
            storage[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
        }
    },
    getItem(key, module_name) {
        let storage = this.getStorage();
        if (module_name) {
            let val = storage[module_name];
            if (val) {
                return val[key];
            }
        }
        return storage[key];
    },
    getStorage() {
        let storage = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));
        if (!storage) {
            storage = {}
        }
        return storage;
    },
    clear(key, module) {
        let storage = this.getStorage();
        if (module && storage[module]) {
            delete storage[module][key];
        } else {
            delete storage[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    }
}