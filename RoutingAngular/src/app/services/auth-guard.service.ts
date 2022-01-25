import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";
import { AuthService } from "./auth.service";
 
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private lg:LoginService){}
  
  canActivate(route: ActivatedRouteSnapshot, 

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.lg.comprobarToken();

  return true; 
}

canActivateChild(route: ActivatedRouteSnapshot, 

  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

return this.canActivate(route, state);

}

}