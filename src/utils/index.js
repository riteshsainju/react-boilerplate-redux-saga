import cookieJar from './cookieJar';

export { cookieJar };
export const isObject = obj => obj && typeof obj === 'object';

export const isArray = obj => obj && isObject(obj) && obj instanceof Array;

export const isSubmitButtonDisabled = props => {
  const { invalid, submitting, pristine } = props;
  return invalid || submitting || pristine;
};

export const isLogin = () => {
  if (cookieJar.getSession()) {
    return true;
  }
  return false;
};
