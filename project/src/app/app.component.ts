import { Component } from '@angular/core';
import { Recipe } from "./model/recipe.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loadedFeature = "recipe";
  
  recipe:Recipe;


  constructor(){
    
  }
   
   navigateTo(feature:string){
     this.loadedFeature = feature;
   }
   
   setRecipe(recipe:Recipe){
     this.recipe = recipe;
   }
}
