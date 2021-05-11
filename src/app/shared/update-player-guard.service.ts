import { CanDeactivate } from "@angular/router";
import {EditPlayerComponent} from '../players/edit-player/edit-player.component';
import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()

export class UpdatePlayerGuard implements CanDeactivate<EditPlayerComponent>{

    canDeactivate(component:EditPlayerComponent,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,nextState:RouterStateSnapshot):
    Observable<boolean>|Promise<boolean>|boolean
    {
        const isUpdated=component.updatedPlayer;
        if(!isUpdated)
        {
            return confirm('Are you sure you want to discard your changes?');
        }

        return true;
    }

}