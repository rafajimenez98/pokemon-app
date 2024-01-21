// semana.guard.ts
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonLoadGuard implements CanLoad {


  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentDay = new Date().getDay();

    if (currentDay >= 1 && currentDay <= 5) {
      return new Observable<boolean>(observer => {
        setTimeout(() => {
          observer.next(true);
          observer.complete();
        }, 2000);
      });
    } else if (currentDay === 6) {
      return new Observable<boolean>(observer => {
        setTimeout(() => {
          observer.next(true);
          observer.complete();
        }, 5000);
      });
    } else {
      this.router.navigateByUrl('error');
      return false;
    }
  }
}
