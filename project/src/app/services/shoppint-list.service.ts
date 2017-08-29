import { Subject } from 'rxjs/Subject';



import { Ingredient } from '../model/ingredient.model';

export class ShoppingListService {
  
  private  ingredients : Ingredient[] = [
      new Ingredient("Apple",10),
      new Ingredient("Orange",20)
  ];
  
  ingredientsAddedEmitter = new Subject<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

 addIngredient(newIngredient:Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsAddedEmitter.next(this.ingredients.slice());
  }

  addIngredients(newIngredients:Ingredient[]){
    this.ingredients.push(...newIngredients);
    this.ingredientsAddedEmitter.next(this.ingredients.slice());
  }
}