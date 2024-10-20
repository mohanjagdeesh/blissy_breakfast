export interface IValidationRules {
    [key: string]: {
      required?: boolean;
      message: string;
      min?: number;
      max?: number;
      pattern?: RegExp;
    }[];
  }