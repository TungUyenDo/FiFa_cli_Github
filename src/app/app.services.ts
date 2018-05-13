
import { Observable, of, throwError} from "rxjs"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class ApiServices {

   
    constructor(private http: HttpClient) {
        console.log('service')
    }
    public getNews() {
        return this.http.get('http://catalog.data.gov/api/3')
          .pipe(
            map(res => {
                return res
            }),
            catchError(this.handleError)
          );
      }

    //-------------------------error handle
    private handleError(error: Response | any) {
        console.error('ApiServices::handleError', error);
        return Observable.throw(error);
    }

}


