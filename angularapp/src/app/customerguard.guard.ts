import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerServiceService } from './services/customer-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerguardGuard implements CanActivate {

    constructor(private customerService: CustomerServiceService,private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.customerService.isAuthenticated()){
        return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
