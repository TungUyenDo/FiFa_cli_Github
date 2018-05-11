import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

import {Observable} from 'rxjs';
import 'rxjs/Rx'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    //------------language-------------------------   
    // public getListLanguage(): Observable<any[]> {
    //     return this.http
    //         .get("./assets/language.json")
    //         .map(response => response)
    //         .catch(this.handleError);
    // }

    // public login(id, password): Observable<any> {
    //     let bodyString = JSON.stringify({
    //         "username": id,
    //         "password": password
    //     });
    //     return this.http
    //         .post(environment.pathUrlApiBackEnd + "/admin/login", bodyString)
    //         .map(response => response)
    //         .catch(this.handleError);
    // }
 
  
     //-------------------category----------------------
    public getListCategory() : Observable<any[]> {
        console.log(11)
        return this.http
        .get(environment.pathUrlApi+"/category/list")
        .map(response => response)
        .catch(this.handleError);
    }

    //-------------------------error handle
    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
