import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../model/recipe.model';
import {RecipeListService} from '../services/recipe-list.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
   
  @Input() recipe : Recipe; 

  constructor(private recipeListService : RecipeListService) { }

  ngOnInit() {
    
  }

  addToShoppingList(){
       this.recipeListService.addToShoppingList(this.recipe);
  } 
}
