import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CustomersService } from './customers.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from '../shared/snackbar/snackbar.service';
import { of } from 'rxjs';

export const initFactory = (appinit: AppInitService) => {
  return () => appinit.loadData();
};

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(private http: HttpClient, private sbs: SnackbarService) {}

  loadData() {
    return this.http
      .get<Customer[]>(environment.apiUrl + 'customers')
      .pipe(
        catchError((err: Error) => {
          this.sbs.displayAlert('Startup Err', 'Customers Api not running');
          return of(true);
        })
      )
      .toPromise()
      .then((data) => console.log('from app-init: ', data));
  }
}
