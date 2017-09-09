import { AuthGuardDeactivate } from '../services/auth-guard-deactivate.service';
import { AuthGuard } from './../services/auth-guard.service';
import { SigninFormComponent } from './../auth/signin-form/signin-form.component';
import { SignupFormComponent } from './../auth/signup-form/signup-form.component';
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
            {path:'new' , component:RecipeEditComponent , canActivate :[AuthGuard],canDeactivate:[AuthGuardDeactivate]},
            {path: ':id/edit' , component:RecipeEditComponent,canActivate :[AuthGuard]
                                                    ,canDeactivate:[AuthGuardDeactivate]},
            {path:':id' , component:RecipeDetailsComponent},
            {path:'' , component:NoRecipeSelectedComponent}
        ]
    },
    {
        path:'shopping-list' , component:ShoppingListComponent
    },
    {
        path:'signUp' , component:SignupFormComponent
    },
    {
        path:'signIn' , component:SigninFormComponent
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