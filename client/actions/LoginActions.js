import actionTypes from 'constants/constants'


export function login () {
  return({
    types: [actionTypes.LONGIN_REQUEST, actionTypes.LOGIN_SUCCESS, actionTypes.LOGIN_FAILD],
    endPoint: 'asdfas'
  });
}
