function callApi(endPoint, fetchInit = {}) {
  const url = '/api' + endPoint;
  return fetch(url, fetchInit).then(
    (res) => {
      if (res.ok) {
        return res.json().then(
          (data) => {
            if (data.success === false) {
              return Promise.reject(data);
            }
            return (data);
          }
        );
      } else {
        console.log('response status is not ok:', new Error(res.statusText));
        return Promise.reject({ error: new Error(res.statusText) });
      }
    },
    (error) => {
      console.log('Fetch failed!', error);
      return new Error(error);
    }
  );
}

export default ({ dispatch, getState }) => next => action => {

  const { endPoint, types, ...rest } = action;

  if (!endPoint) {
    return next(action);
  }

  const [REQUEST, SUCCESS, FAILD] = types;
  next({ ...rest, type: REQUEST });

  callApi('/login').then(
    (successData) => {
      console.log(successData)
      next({ ...rest, type: SUCCESS, result: successData });
    },
    (failData) => {
      console.log(failData);
      next({ ...rest, type: FAILD, result: failData });
    }
  );
}
