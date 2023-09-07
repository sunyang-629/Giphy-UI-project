import React from "react";

type LocalStorageValue<T> = T | null;

// check if localstorage is available in the current enviorment
const isBrowser = typeof window !== "undefined";

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [LocalStorageValue<T>, (newState: T) => void, () => void] => {
  const storedValue = localStorage.getItem(key);

  const serialize = (value: T): string => {
    try {
      return JSON.stringify(value);
    } catch (error) {
      return JSON.stringify(initialValue);
    }
  };

  const deserialize = (value: string | null): LocalStorageValue<T> => {
    try {
      return value !== null ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const getInitialDate = (): LocalStorageValue<T> => {
    if (isBrowser) {
      const storedDate = storedValue;
      return deserialize(storedDate);
    }
    return initialValue;
  };

  const [data, setData] = React.useState<LocalStorageValue<T>>(getInitialDate);

  React.useEffect(() => {
    if (getInitialDate !== data) {
      setData(getInitialDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedValue]);

  const updateData = (newValue: T) => {
    setData(newValue);
    if (isBrowser) {
      localStorage.setItem(key, serialize(newValue));
    }
  };

  const removeData = () => {
    setData(null);
    if (isBrowser) {
      localStorage.removeItem(key);
    }
  };

  return [data, updateData, removeData];
};

export default useLocalStorage;
