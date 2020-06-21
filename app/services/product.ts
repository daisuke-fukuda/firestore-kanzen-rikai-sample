import { FirestoreSimple } from '@firestore-simple/web';

export interface Product {
  id: string;
  name: string;
  description: string;
  photoURL: string;
}

export class ProductRepository {
  private firestoreSimple: FirestoreSimple;
  constructor(private readonly db: firebase.firestore.Firestore) {
    this.firestoreSimple = new FirestoreSimple(db);
  }

  public findAll = async () => {
    const dao = this.firestoreSimple.collection<Product>({ path: `products` });
    return await dao.fetchAll();
  };

  public find = async (id: string) => {
    const dao = this.firestoreSimple.collection<Product>({ path: `products` });
    return await dao.fetch(id);
  };
}
