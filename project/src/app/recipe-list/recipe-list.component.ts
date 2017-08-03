import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { Recipe } from '../model/recipe.model';
import {RecipeListService} from '../services/recipe-list.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

   recipes : Recipe[];

  constructor(private recipeListService : RecipeListService) { }

  ngOnInit() {
     this.recipes = this.recipeListService.getRecipes();
  }
    
   
  
}
