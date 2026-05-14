export class Product {
  constructor(initData?: Partial<Product>) {
    if (!initData) return;
    Object.assign(this, initData);
  }

  id!: number;

  name!: string;

  authors!: string;

  company!: string;

  photoUrl!: string;

  price!: number;
}
