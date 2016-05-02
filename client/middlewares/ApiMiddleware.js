export default ({dispatch, getState}) => next => action => {

  const { endpoint, types, ...rest } = action;

  if (!endpoint) {
    return next(action);
  }
  console.log(types)
  const [REQUEST, SUCCESS, FAILD] = types;
  return next({...rest, type: SUCCESS});
}
