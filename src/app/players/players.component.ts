import {Component} from '@angular/core';
import {PlayerService} from '../shared/player.service';

@Component({
    selector:"app-players",
    templateUrl:"./players.component.html"
})

export class PlayersComponent{
    constructor(private playerService:PlayerService){

    }

    players=this.playerService.getPlayers();

}