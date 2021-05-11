import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component(
    {
        selector: "app-player",
        templateUrl: "./player.component.html"
    }
)

export class PlayerComponent implements OnInit {
    server: { name: string, price: string, id: string };

    disableEdit = true;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {

        this.route.data.subscribe(
            (data:Data)=>{
this.server=data["playerData"]
            }
        );
        // this.server = {
        //     name: this.route.snapshot.params['name'],
        //     price: this.route.snapshot.params['price'],
        //     id: this.route.snapshot.params['id']
        // }


        // this.route.params.subscribe(
        //     (params: Params) => {
        //         this.server = {
        //             name: params['name'],
        //             price: params['price'],
        //             id: params['id']
        //         }
        //     }
        // );


        this.route.queryParams.subscribe(
            (params: Params) => {
                if (params['AllowEdit'] === '1') {
                    this.disableEdit = false;
                }
                else {
                    this.disableEdit = true;
                }
                
            }
        );


    }

    onEditPlayer() {
        this.router.navigate(['players/editplayer', this.server.id]);
    }

}