import { useCallback, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.warn(err);
            return initialValue;
        }
    });

    const updateValue = useCallback(
        (v: T | ((v: T) => T)) => {
            try {
                const valueToStore = v instanceof Function ? v(value) : v;
                if (window && window.localStorage) {
                    if (
                        typeof valueToStore === 'undefined' ||
                        valueToStore === null
                    ) {
                        localStorage.removeItem(key);
                    }

                    localStorage.setItem(key, JSON.stringify(valueToStore));
                }
                setValue(valueToStore);
            } catch (err) {
                console.warn(err);
            }
        },
        [key, value]
    );

    return [value, updateValue] as const;
}
