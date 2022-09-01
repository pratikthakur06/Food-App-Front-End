import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BranchManagerAuthGuard implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.auth.getAdminRole() || this.auth.getBranchManagerRole()) {
      return true;
    }
    else {
      window.alert("Only for Admin & Branch Manager!!");
      return false;
    }
  }
}
