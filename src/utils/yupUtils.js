import * as Yup from 'yup';
import { FormikProps } from "formik";

export const setValidationErrors = (
  formRef,
  errors
) => {
  const validationErrors = {};

  errors.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  formRef.current?.setErrors(validationErrors);
};

export const setValidationError = (
  formRef,
  error
) => {
  if(error.path && error.message) {
    formRef.current?.setFieldError(error.path, error.message);
  }
}