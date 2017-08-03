import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../model/recipe.model';
import { RecipeListService } from '../../services/recipe-list.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : Recipe;
   
  constructor(private recipeListService : RecipeListService) { }

  ngOnInit() {
    
  }
 showDetails(){
   this.recipeListService.selectedRecipe.emit(this.recipe);
 }
}
