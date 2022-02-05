export interface Feature {
  id: number | string;
  title: string;
  active: boolean;
  count?: number;
}

export interface Category {
  id: number | string;
  title: string;
  items: Array<number>;
  group?: boolean;
}

export interface Subcategory {
  id: number | string;
  items: Array<number>;
}

export interface ApplicationState {
  features: Array<Feature>;
  categories: Array<Category>;
  subCategories: Array<Subcategory>;
}
