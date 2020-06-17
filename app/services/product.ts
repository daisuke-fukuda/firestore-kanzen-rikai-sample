export interface Product {
  id: string;
  name: string;
  description: string;
  photoURL: string;
}

export const findAll = async (db: firebase.firestore.Firestore) => {
  const snapshot = await db.collection('products').get();
  const result: Product[] = [];
  snapshot.forEach((doc) => {
    result.push({ ...doc.data(), id: doc.id } as Product);
  });
  return result;
};
export const find = async (db: firebase.firestore.Firestore, id: string) => {
  const snapshot = await db
    .collection('products')
    .doc(id)
    .get();
  if (snapshot.exists) {
    return snapshot.data() as Product;
  } else {
    return {};
  }
};
