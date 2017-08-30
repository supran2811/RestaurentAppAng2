import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import {ShoppingListService} from '../services/shoppint-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  ingredients : Ingredient[];
  ingredientAddedSubscription : Subscription;

  constructor(private shoppingListService  : ShoppingListService) { }

  ngOnInit() {
   this.ingredients = this.shoppingListService.getIngredients();
   this.ingredientAddedSubscription = this.shoppingListService.ingredientsAddedEmitter.subscribe(
     (ingredients:Ingredient[]) => {this.ingredients = ingredients;}
   );
  }

  ngOnDestroy(){
    this.ingredientAddedSubscription.unsubscribe();
  }

  onIngredientSelected(index:number){
   
      this.shoppingListService.ingredientSelectedEmitter.next(index);
  }

}
