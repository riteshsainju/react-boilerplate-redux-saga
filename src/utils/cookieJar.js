import Cookies from 'js-cookie';

// import { SO_COOKIE_PREFIX } from 'constants';
const SO_COOKIE_PREFIX = process.env.REACT_APP_SO_COOKIE_PREFIX;

const setSession = value => {
  const expiryTime = getTokenExpirationDate(value);
  const token = value.access_token;
  Cookies.set(`${SO_COOKIE_PREFIX}_so_jwt_token`, token, { expires: expiryTime });
  Cookies.set(`${SO_COOKIE_PREFIX}_so_jwt_header`, JSON.stringify(value), {
    expires: expiryTime,
  });
};

const getTokenExpirationDate = token => {
  if (!token.expires_at) return null;
  const date = new Date(token.expires_at);
  return date;
};

const isTokenExpired = header => {
  const expirationDate = getTokenExpirationDate(header);
  return expirationDate < new Date();
};

const getHeader = () => {
  const header = Cookies.get(`${process.env.REACT_APP_SO_COOKIE_PREFIX}_so_jwt_header`);
  return header ? JSON.parse(header) : undefined;
};

const getSession = () => {
  const header = getHeader();
  return !!header && !isTokenExpired(header);
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
