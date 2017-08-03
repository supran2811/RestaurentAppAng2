
import { EventEmitter } from '@angular/core'; 

import { Ingredient } from '../model/ingredient.model';

export class ShoppingListService {
  
  private  ingredients : Ingredient[] = [
      new Ingredient("Apple",10),
      new Ingredient("Orange",20)
  ];
  
  ingredientsAddedEmitter = new EventEmitter<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

 addIngredient(newIngredient:Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsAddedEmitter.emit(this.ingredients.slice());
  }

  addIngredients(newIngredients:Ingredient[]){
    this.ingredients.push(...newIngredients);
    this.ingredientsAddedEmitter.emit(this.ingredients.slice());
  }
}