export const actionTypes = {
  SET_USER: 'SET_USER',
  ADD_ADDRESS: 'ADD_ADDRESS',
  ADD_ACTIVE_SHOP: 'ADD_ACTIVE_SHOP',
  SET_ACTIVE_ROLE: 'SET_ACTIVE_ROLE',
  ADD_INFO: 'ADD_INFO',
};

export const addUser = payload => ({
  type: actionTypes.SET_USER,
  payload,
});

export const addAddress = payload => ({
  type: actionTypes.ADD_ADDRESS,
  payload,
});

export const addInfoAction = payload => ({
  type: actionTypes.ADD_INFO,
  payload,
});

export const addActiveShop = payload => ({
  type: actionTypes.ADD_ACTIVE_SHOP,
  payload,
});

export const setActiveRole = activeRole => ({
  type: actionTypes.SET_ACTIVE_ROLE,
  payload: {
    activeRole,
  },
});
