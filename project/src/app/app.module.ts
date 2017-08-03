import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { DropDownDirective } from './directives/drop-down.directive';
import {ShoppingListService} from './services/shoppint-list.service';
import { RecipeComponent } from './recipe/recipe.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeaderComponentComponent,
    RecipeDetailsComponent,
    DropDownDirective,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers :[ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
