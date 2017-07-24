import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() showDetailsEvent = new EventEmitter<void>();
  @Input() recipe : Recipe;
   
  constructor() { }

  ngOnInit() {
  }

  showDetails(){
    console.log("Emitting event from recipe details "+this.recipe.name);
    this.showDetailsEvent.emit();
  }
}
