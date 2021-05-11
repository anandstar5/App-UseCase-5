import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlayerService } from '../../shared/player.service';

@Component({
    selector: "app-edit-player",
    templateUrl: "./edit-player.component.html"
})

export class EditPlayerComponent implements OnInit {
    player;
    updatedPlayer=false;
    constructor(private route: ActivatedRoute, private playerService: PlayerService) {

    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.player = this.playerService.getplayers(+params['id']);
            }
        );
    }

    onUpdatePlayer(){
        this.updatedPlayer=true;
    }

}