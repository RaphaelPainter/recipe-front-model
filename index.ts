//index.js

export interface Ingredient {
  id: string;
  name: string;
  image: string;
  season_start: string;
  season_end: string;
}

export interface Recipe {
  id: string;
  name: string;
  cooks_fk: Cook;
  description: string;
  ingredients: Ingredient[];
  image: string;
}

export interface Cook {
  id: string;
  name: string;
}
