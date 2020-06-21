import { FirestoreSimple } from '@firestore-simple/web';

export interface Product {
  id: string;
  name: string;
  description: string;
  photoURL: string;
}

export const findAll = async (db: firebase.firestore.Firestore) => {
  const firestoreSimple = new FirestoreSimple(db);
  const dao = firestoreSimple.collection<Product>({ path: `products` });
  return await dao.fetchAll();
};
export const find = async (db: firebase.firestore.Firestore, id: string) => {
  const firestoreSimple = new FirestoreSimple(db);
  const dao = firestoreSimple.collection<Product>({ path: `products` });
  return await dao.fetch(id);
};
