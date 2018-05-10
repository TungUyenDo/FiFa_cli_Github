// import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';
// import { HttpClient } from "@angular/common/http";

// import { Observable, of } from 'rxjs/Observable';

// @Injectable()
// export class ApiService {

//     constructor(private http: HttpClient) {
//     }

//     //------------language-------------------------
//     public getListLanguage(): Observable<any[]> {
//         return this.http
//             .get("./assets/language.json")
//             .map(response => response)
//             .catch(this.handleError);
//     }

   

//     // //----------------------member----------------------
//     // public getListMember(): Observable<any[]> {
//     //     return this.http
//     //         .get(environment.pathUrlApi + "/member")
//     //         .map(response => response)
//     //         .catch(this.handleError);
//     // }

//     // public login(id, password): Observable<any> {
//     //     let bodyString = JSON.stringify({
//     //         "username": id,
//     //         "password": password
//     //     });
//     //     return this.http
//     //         .post(environment.pathUrlApiBackEnd + "/admin/login", bodyString)
//     //         .map(response => response)
//     //         .catch(this.handleError);
//     // }

//     // //-------------------Video-------------------------
//     // public getListVideo(): Observable<any[]> {
//     //     return this.http
//     //         .get(environment.pathUrlApi + "/videos")
//     //         .map(response => response)
//     //         .catch(this.handleError);
//     // }

  
//     // public getListVideoPromise(): Observable<any> {
//     //     return Observable.forkJoin([
//     //         this.getListVideo(),
//     //         this.getListCategory(),
//     //         this.getListTags(),
//     //     ]).map(res => res)
//     //         .catch(this.handleError);
//     // }

//     //-------------------------error handle
//     private handleError(error: Response | any) {
//         console.error('ApiService::handleError', error);
//         return Observable.throw(error);
//     }
// }
