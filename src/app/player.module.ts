import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { PlayerComponent } from './players/player/player.component';
import { PlayersComponent } from './players/players.component';
import {EditPlayerGuard} from './shared/edit-player-guard.service';
import { ResolveGuard } from './shared/resolve-guard.service';
import { UpdatePlayerGuard } from './shared/update-player-guard.service';


const routes: Routes = [
    {
        path: "", component: PlayersComponent,children:[
            {
                path: "player/:id/:name/:price", component: PlayerComponent,resolve:{playerData:ResolveGuard}
            },
            {
                path: "editplayer/:id", component: EditPlayerComponent,canActivate:[EditPlayerGuard],
                canDeactivate:[UpdatePlayerGuard]
            }
        ]
    }    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PlayerModule {

}