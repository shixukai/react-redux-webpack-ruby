import actionTypes from 'constants/constants'
import { paramsToFormData } from 'myUtil/myUtil'

export function login (params = {}) {
  return({
    types: [actionTypes.LONGIN_REQUEST, actionTypes.LOGIN_SUCCESS, actionTypes.LOGIN_FAILD],
    endPoint: '/login',
    fetchInit: {method: "POST", body: paramsToFormData(params)},
  });
}
