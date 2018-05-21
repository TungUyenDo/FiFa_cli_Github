
import { Observable, of, throwError} from "rxjs"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class ApiServices {

   
    constructor(private http: HttpClient) {
        // console.log('service')
    }

    //api test demo
    public getDemo() {
        return this.http.get('http://catalog.data.gov/api/3')
            .pipe(
                map(res => {
                    return res
                }),
                catchError(this.handleError)
            );
    }
// =============================================================================================================
    //get news
    public getNews(data) {
        let headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
            'Accept': 'application/json',
            'FB-API-KEY': environment.fbApiKey
        });
        return this.http.get(environment.pathUrlApi + "news/get-news?limit=" + data.limit + "&page=" + data.page, 
                { headers: headers}
            )
            .pipe(
                map(res => {
                    return res
                }),
                catchError(this.handleError)
            );
    }

    //get video
    public getVideos(data) {
        
        let headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
            'Accept': 'application/json',
            'FB-API-KEY': environment.fbApiKey
        });
        return this.http.get(environment.pathUrlApi + "news/get-videos?limit=" + data.limit + "&page=" + data.page, 
                { headers: headers}
            )
            .pipe(
                map(res => {
                    return res;
                    
                }),
                catchError(this.handleError)
            );
    }
    //get photos
    public getPhotos(data) {
        // console.log(data)
        let headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
            'Accept': 'application/json',
            'FB-API-KEY': environment.fbApiKey
        });
        return this.http.get(environment.pathUrlApi + "news/get-photos?limit=" + data.limit + "&page=" + data.page, 
                { headers: headers}
            )
            .pipe(
                map(res => {
                    return res
                }),
                catchError(this.handleError)
            );
    }
    //get top carousel
    public getDataTopCarousel() {
       var dataJson = "../assets/data_json/json/data.json";
        return this.http.get(dataJson)
            .pipe(
                map(res => {
                    // console.log(res)
                    return res
                }),
                catchError(this.handleError)
            );
    }
    //get top list languages
    public getListLanguages() {
       var dataJson = "../assets/data_json/json/languages.json";
        return this.http.get(dataJson)
            .pipe(
                map(res => {
                    // console.log(res)
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


