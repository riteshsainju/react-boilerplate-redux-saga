import Cookies from 'js-cookie';

// import { SO_COOKIE_PREFIX } from 'constants';

const setSession = value => {
  const expiryTime = 5;
  Cookies.set(`${process.env.REACT_APP_SO_COOKIE_PREFIX}_so_jwt_header`, JSON.stringify(value), {
    expires: expiryTime,
  });
};

const getHeader = () => {
  const header = Cookies.get(`${process.env.REACT_APP_SO_COOKIE_PREFIX}_so_jwt_header`);
  return header ? JSON.parse(header) : undefined;
};

const getSession = () => {
  const header = getHeader();
  return !!header;
};

const clearSession = () => {
  Cookies.remove(`${process.env.REACT_APP_SO_COOKIE_PREFIX}_so_jwt_header`);
};

const clearAll = () => {
  const cookies = document.cookie.split(';');
  cookies.forEach(cookie => {
    const eqPos = cookie.indexOf('=');
    const key = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    clearSession(key);
  });
};

export default {
  setSession,
  getSession,
  clearAll,
};
