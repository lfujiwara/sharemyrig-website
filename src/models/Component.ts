import validator from "validator";

export const validators = {
  description: (str: string) => validator.isLength(str, { min: 1 }),
};

interface IComponentDetail {
  key: string;
  value: string;
}

export interface IComponent {
  _id?: string;
  description: string;
  price?: number;
  storeName?: string;
  href?: string;
  imageHrefs: [string];
  details: [IComponentDetail];
}
