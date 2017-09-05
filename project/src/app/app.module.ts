import { RecipeListService } from './services/recipe-list.service';
import { AppRouterModule } from './modules/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { DropDownDirective } from './directives/drop-down.directive';
import {ShoppingListService} from './services/shoppint-list.service';
import { RecipeComponent } from './recipe/recipe.component';
import { NoRecipeSelectedComponent } from './recipe/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
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
    RecipeComponent,
    NoRecipeSelectedComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    ReactiveFormsModule
  ],
  providers :[ShoppingListService,RecipeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
