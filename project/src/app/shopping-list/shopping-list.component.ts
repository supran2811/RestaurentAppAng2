import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients : Ingredient[] = [
      new Ingredient("Apple",10),
      new Ingredient("Orange",20)
  ];
   
  constructor() { }

  ngOnInit() {
  }

  addIngredient(newIngredient:Ingredient){
    this.ingredients.push(newIngredient);
  }

}
