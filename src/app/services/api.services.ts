import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ApiServices {

    

    constructor(private http: HttpClient) {
    }

    //------------language-------------------------
    // public getListLanguage(): Observable<any[]> {
    //     return this.http
    //         .get("./assets/language.json")
    //         .map(response => response)
    //         .catch(this.handleError);
    // }

    //-------------------category----------------------
    public getNews(data): Observable<any[]> {
        let headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
            'Accept': 'application/json',
            'FB-API-KEY': 'DEVACCWORLDCUP201801031995'
        });
       
        return this.http
            .get(environment.pathUrlApi + "news/get-news?limit=" + data.limit + "&page=" + data.page, {
                headers: headers
            })
            .map(response => {
                // console.log(response);
                return response
            })
            .catch(this.handleError);
    }
  

    //-------------------------error handle
    private handleError(error: Response | any) {
        console.error('ApiServices::handleError', error);
        return Observable.throw(error);
    }
}
