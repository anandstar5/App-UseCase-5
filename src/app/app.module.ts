import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './teams/team/team.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './players/player/player.component';
import { EditPlayerComponent } from './players/edit-player/edit-player.component';
import { CommonDirective } from './shared/common.directive';
import { RouteModule } from './route.module';
import {PlayerService} from './shared/player.service';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { EditPlayerGuard } from './shared/edit-player-guard.service';
import { UpdatePlayerGuard } from './shared/update-player-guard.service';
import { ResolveGuard } from './shared/resolve-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent,
    PlayersComponent,
    PlayerComponent,
    HomeComponent,
    EditPlayerComponent,
    CommonDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouteModule    
  ],
  providers: [PlayerService,EditPlayerGuard,UpdatePlayerGuard,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
