import { APP_VERSION, VERSION } from '@/config/constants';

const saveInSession = (key: string, value: string) =>
  localStorage.setItem(key, value);

const getFromSession = (key: string) => localStorage.getItem(key);

const clear = (key: string = '') =>
  key !== '' ? localStorage.removeItem(key) : localStorage.clear();

const startSessionStorage = () => {
  const localVersion = getFromSession(VERSION);
  const currentVersion = APP_VERSION;

  if (localVersion !== currentVersion) {
    clear();
    saveInSession(VERSION, APP_VERSION);
    window.location.reload();
  }
};

export { clear, getFromSession, saveInSession, startSessionStorage };
