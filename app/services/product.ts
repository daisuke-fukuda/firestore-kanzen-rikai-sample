import { Repository } from '~/services/repository';

export interface Product {
  id: string;
  name: string;
  description: string;
  photoURL: string;
}

export class ProductRepository extends Repository<Product> {
  constructor(protected readonly db: firebase.firestore.Firestore) {
    super(db, 'products');
  }
}
