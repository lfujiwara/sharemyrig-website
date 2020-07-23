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
  description?: string;
  price?: number;
  storeName?: string;
  href?: string;
  imageHrefs?: string[];
  details?: IComponentDetail[];
}

export class ComponentDetail implements IComponentDetail {
  key: string;
  value: string;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export class Component implements IComponent {
  _id?: string;
  description: string;
  price?: number;
  storeName?: string;
  href?: string;
  imageHrefs: string[];
  details: IComponentDetail[];

  constructor() {
    this.description = "";
    this.imageHrefs = [];
    this.details = [];
  }
}
