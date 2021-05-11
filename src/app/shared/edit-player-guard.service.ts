import { Injectable } from '@angular/core';
import{CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import { Observable } from 'rxjs';
import{PlayerService} from './player.service';

@Injectable()

export class EditPlayerGuard implements CanActivate {

    constructor(private playerService:PlayerService,private router:Router){}

    canActivate(activateRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapshot:RouterStateSnapshot):
    Observable<boolean>|Promise<boolean>|boolean
    {       
        const playerExists=!! this.playerService.getplayers(+activateRouteSnapshot.paramMap.get('id'));
        if(playerExists)
        {
return true;
        }
        else{
this.router.navigate(["notfound"]);
return false;
        }
    }    

}

