import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Rx';
import {Injectable } from '@angular/core';

import {Ingredient} from '../model/ingredient.model';

import { Recipe } from '../model/recipe.model';
import {ShoppingListService} from '../services/shoppint-list.service';

@Injectable()
export class RecipeListService {
    private recipes : Recipe[] = [
     new Recipe("Chicken Curry" , 
               "Spicey chicken curry" , 
               "http://indianhealthyrecipes.com/wp-content/uploads/2014/11/chicken-curry-recipe-12.5.jpg",
              [
                new Ingredient('chicken' , 2),
                new Ingredient('Chicken masala' , 1),
                new Ingredient('Tikhalal', 3)
              ]),
     new Recipe("Mutton keema" , 
                "Tasty mutton smashed with oil" , 
                 "http://www.indobase.com/recipes/rec-images/mutton-keema.jpg" ,
                 [
                     new Ingredient('mutton' , 2),
                     new Ingredient('mutton masala' , 1),
                     new Ingredient('Tikhalal', 3)

                 ])
  ];
  
  recipeListUpdated = new Subject<Recipe[]>();

  constructor(private shoppingList : ShoppingListService ){}


   getRecipes(){
     return this.recipes.slice();
   }


   getRecipe(index:number){
     return this.recipes[index];
   }

   addToShoppingList(recipe:Recipe){
     this.shoppingList.addIngredients(recipe.ingredients);
   } 

   addRecipe(newRecipe:Recipe){
     this.recipes.push(newRecipe);
     this.recipeListUpdated.next(this.getRecipes());
   }

   updateRecipe(id:number , updatedRecipe:Recipe){
      this.recipes[id] = updatedRecipe;
      this.recipeListUpdated.next(this.getRecipes());
   }

   deleteRecipe(index:number){
     this.recipes.splice(index,1);
     this.recipeListUpdated.next(this.getRecipes());
   }
  
}