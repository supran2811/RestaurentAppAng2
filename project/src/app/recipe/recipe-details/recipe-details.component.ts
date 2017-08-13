import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../model/recipe.model';
import {RecipeListService} from '../../services/recipe-list.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
   
  recipe : Recipe; 
  index : number;

  constructor(private recipeListService : RecipeListService,private activeRoute : ActivatedRoute) { }

  ngOnInit() {
          this.activeRoute.params.subscribe(
            (params:Params) =>{
              this.index = +params['id'];
              this.recipe = this.recipeListService.getRecipe(this.index);
            }
          ); 
  }

  addToShoppingList(){
       this.recipeListService.addToShoppingList(this.recipe);
  } 
}
