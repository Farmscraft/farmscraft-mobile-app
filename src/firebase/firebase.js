import firestore from '@react-native-firebase/firestore';

export const getHomeData = () => {
  return firestore()
    .collection('home')
    .get();
};

export const addAddress = ({uid, address, addressId}) => {
  const userRef = firestore()
    .collection('users')
    .doc(uid);
  return userRef.update({
    address,
  });
};

export const addInfo = ({uid, info}) => {
  const userRef = firestore()
    .collection('users')
    .doc(uid);
  return userRef.set(
    {
      info,
    },
    {merge: true},
  );
};

export const getAddress = async ({userId, id}) => {
  const userRef = firestore()
    .collection('users')
    .doc(userId);

  return userRef.collection('address').get();
};

export const getSubCategoryData = subCatID => {
  const subCatRef = firestore()
    .collection('subCategories')
    .doc(subCatID);

  return subCatRef.collection('items').get();
};
