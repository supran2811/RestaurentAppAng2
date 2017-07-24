import { Component, OnInit,ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import { Ingredient } from "../../model/ingredient.model";
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

   @ViewChild('nameInput') nameInput: ElementRef;
   @ViewChild('amountInput') amountInput: ElementRef;
   
   @Output() addIngredientEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  
   submit(){
      let ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
      this.addIngredientEvent.emit(ingredient);

   }
}
