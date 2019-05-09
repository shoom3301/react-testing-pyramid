const KEY = 'counter';

export function saveToLocalStorage(count: number) {
    return new Promise(((resolve) => {
        setTimeout(() => {
            localStorage.setItem(KEY, count.toString());
            resolve();
        }, 1000);
    }));
}