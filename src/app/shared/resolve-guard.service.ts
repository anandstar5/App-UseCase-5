import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

interface server{
    name: string, 
    price: string, 
    id: string 
}

@Injectable()

export class ResolveGuard implements Resolve<server>{

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<server>|
    Promise<server>|server
    {
        const server={
            name:route.params['name'],
            price:route.params['price'],
            id:route.paramMap.get('id')
        }
return server;

    }

}