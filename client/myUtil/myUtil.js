export function paramsToFormData(params) {
  let formData = new FormData();

  for ( var key in params ) {
      formData.append(key, params[key]);
  }

  return formData;
};

const foo = Math.PI + Math.SQRT2;
export { foo };
