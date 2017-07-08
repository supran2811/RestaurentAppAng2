import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
     new Recipe("Chicken Curry" , "Spicey chicken curry" , "http://indianhealthyrecipes.com/wp-content/uploads/2014/11/chicken-curry-recipe-12.5.jpg"),
     new Recipe("Mutton keema" , "Tasty mutton smashed with oil" , "http://www.indobase.com/recipes/rec-images/mutton-keema.jpg")
  ];
   
  constructor() { }

  ngOnInit() {
  }

}
