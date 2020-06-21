import { FirestoreSimple } from '@firestore-simple/web';
import { HasId } from '@firestore-simple/web/dist/types';

export abstract class Repository<T extends HasId> {
  protected firestoreSimple: FirestoreSimple;

  constructor(
    protected readonly db: firebase.firestore.Firestore,
    protected readonly defaultCollectionPath: string,
  ) {
    this.firestoreSimple = new FirestoreSimple(db);
  }

  public findAll = async () => {
    const dao = this.firestoreSimple.collection<T>({
      path: this.defaultCollectionPath,
    });
    return await dao.fetchAll();
  };

  public find = async (id: string) => {
    const dao = this.firestoreSimple.collection<T>({
      path: this.defaultCollectionPath,
    });
    return await dao.fetch(id);
  };
}
