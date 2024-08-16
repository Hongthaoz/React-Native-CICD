import { ProductItem } from "../../lib/types";

export const searchItems = (data: ProductItem[], value: string): ProductItem[] => {
  return data.filter(item => {
    const itemKeys = Object.keys(item) as Array<keyof ProductItem>;
    return itemKeys.some(key => {
      if (item[key] && typeof item[key] === 'string') {
        const stringValue = item[key].toString().toLowerCase();
        return stringValue.includes(value.toLowerCase());
      }
      return false;
    });
  });
};
