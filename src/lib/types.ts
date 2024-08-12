type Ingredient = {
  imageUrl: string;
  name: string;
  quantity: string;
};

export type singleMealTypes = {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: Ingredient[]; 
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
};

export type singleCategoryTypes = {
  id: string;
  title: string;
  image: any;
};

export type RootStackParamList = {
  Drawer: undefined;
  MealsOverview: undefined;
  SingleMeal: { mealId: string };
};
