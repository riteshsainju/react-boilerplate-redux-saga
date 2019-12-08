import { isArray, isObject } from 'utils';
import { get, set } from 'lodash';

const validate = (values, { fields }) => {
  const errors = {};
  const emailKeys = ['email'];
  const urlKeys = ['url', 'link'];
  const phoneKeys = ['phone', 'phone_number'];
  const zipCodeKeys = ['zip', 'zip_code'];
  const faxKeys = ['fax'];

  Object.keys(fields).forEach(key => {
    const value = get(values, key);
    const fieldValue = get(fields, key);
    if (isObject(fieldValue)) {
      if (fieldValue.required && ((isArray(value) && value.length === 0) || !value)) {
        set(errors, key, `${fieldValue.label} is required`);
      }
      if (fieldValue.number && value && !/^\d+$/.test(value)) {
        set(errors, key, `${fieldValue.label} is invalid`);
      }
      if (fieldValue.min && value && value < fieldValue.min) {
        set(errors, key, `${fieldValue.label} should be greater or equals to ${fieldValue.min}`);
      }
      if (fieldValue.max && value && value > fieldValue.max) {
        set(errors, key, `${fieldValue.label} should be smaller than or equals to ${fieldValue.max}`);
      }
      if (fieldValue.smallerThan && value && parseInt(value, 10) > get(values, fieldValue.smallerThan, 0)) {
        set(errors, key, `${fieldValue.label} should be smaller than ${get(fields[fieldValue.smallerThan], 'label')}`);
      }
      if (fieldValue.greaterThan && value && parseInt(value, 10) < get(values, fieldValue.greaterThan, 0)) {
        set(errors, key, `${fieldValue.label} should be greator than ${get(fields[fieldValue.greaterThan], 'label')}`);
      }
      if (
        fieldValue.url &&
        value &&
        !/^((https?):\/\/(www\.)?)?[A-Za-z0-9]+([-.]{1}[A-Za-z0-9]+)*\.[A-Za-z#]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value)
      ) {
        set(errors, key, `${fieldValue.label} should be valid url`);
      }
    } else if ((isArray(value) && value.length === 0) || !value) {
      set(errors, key, `${fieldValue} is required`);
    }
  });

  faxKeys.forEach(faxKey => {
    if (values[faxKey] && !/^(\+?)([1-9]{1})?([0-9]){7,10}$/.test(values[faxKey])) {
      errors[faxKey] = 'Enter valid fax number';
    }
  });

  emailKeys.forEach(emailKey => {
    if (values[emailKey] && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[emailKey])) {
      errors[emailKey] = 'Invalid email address';
    }
  });

  urlKeys.forEach(urlKey => {
    if (
      values[urlKey] &&
      !/^((https?):\/\/(www\.)?)?[A-Za-z0-9]+([-.]{1}[A-Za-z0-9]+)*\.[A-Za-z#]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
        values[urlKey],
      )
    ) {
      errors[urlKey] = 'Enter valid url';
    }
  });

  phoneKeys.forEach(phoneKey => {
    if (values[phoneKey] && !/^(\+?)[1-9]{1}([0-9]){8,12}$/.test(values[phoneKey])) {
      errors[phoneKey] = 'Enter valid phone number  e.g: +11231231234';
    }
  });

  zipCodeKeys.forEach(zipCodeKey => {
    if (values[zipCodeKey] && !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values[zipCodeKey])) {
      errors[zipCodeKey] = 'Enter valid zip code';
    }
  });

  if (values.password && values.password.length < 6) {
    errors.password = 'Password should be greater than 6';
  }

  if (values.currentPassword && values.currentPassword === values.password) {
    errors.password = 'Matches old password entered. Enter new one.';
  }

  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Mismatches new password entered. Enter new password again.';
  }
  return errors;
};
export default validate;
