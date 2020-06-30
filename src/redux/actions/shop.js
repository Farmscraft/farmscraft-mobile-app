export const actionTypes = {
  UPDATE_SHOP: 'UPDATE_SHOP',
};

export const updateShop = ({id, shopType}) => ({
  type: actionTypes.UPDATE_SHOP,
  id,
  shopType,
});
