import { RecipeEditComponent } from './../recipe/recipe-edit/recipe-edit.component';
import { NoRecipeSelectedComponent } from '../recipe/no-recipe-selected/no-recipe-selected.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeComponent } from '../recipe/recipe.component';


const appRouter:Routes = [
    {
        path:'' ,redirectTo:'/recipes' ,pathMatch :'full'
    },
    {
        path:'recipes' , component:RecipeComponent  , children :[
            {path:'new' , component:RecipeEditComponent},
            {path: ':id/edit' , component:RecipeEditComponent},
            {path:':id' , component:RecipeDetailsComponent},
            {path:'' , component:NoRecipeSelectedComponent}
        ]
    },
    {
        path:'shopping-list' , component:ShoppingListComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRouter)
    ],
    exports:[
        RouterModule
    ]
  }
)
export class AppRouterModule {

}