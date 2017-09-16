import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../core/home/home.component';
import { ShoppingListComponent } from './../shopping-list/shopping-list.component';

const appRouter:Routes = [
    {
        path:'' ,component:HomeComponent
    },
    {
        path:'recipes' ,loadChildren:'../recipe/recipe.module#RecipeModule'
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