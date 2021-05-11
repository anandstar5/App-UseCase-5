import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { TeamsComponent } from './teams/teams.component';


const route: Routes = [
    { path: "", component: HomeComponent },
    { path: "teams", component: TeamsComponent },
    { path: "players", loadChildren: ()=>import('./player.module').then(m=>m.PlayerModule) },
    //{ path: "players", loadChildren: ('./player.module#PlayerModule') },
    { path: "notfound", component: NotFoundComponent },
    {
        path: "**", redirectTo: "notfound"
    }
]

@NgModule(
    {
        imports: [RouterModule.forRoot(route)],
        exports: [
            RouterModule
        ]
    }
)

export class RouteModule {


}