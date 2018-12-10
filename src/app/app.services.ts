
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/startWith';
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
    //get teams
    public getTeams() {
        // console.log(data)
        let headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
            'Accept': 'application/json',
            'FB-API-KEY': environment.fbApiKey
        });
        return this.http.get(environment.pathUrlApi + "livescores/get-teams-worldcup", { headers: headers}
            )
            .pipe(
                map(res => {
                    return res
                }),
                catchError(this.handleError)
            );
    }
    //get stadium
    public getStadium() {
        // console.log(data)
        let headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
            'Accept': 'application/json',
            'FB-API-KEY': environment.fbApiKey
        });
        // console.log(headers)
        return this.http.get(environment.pathUrlApi + "livescores/get-all-stadium", { headers: headers}
            )
            .pipe(
                map(res => {
                    // console.log(res)
                    return res
                }),
                catchError(this.handleError)
            );
    }

        
    // }
    public getLiveCores() {
        var dataJson = "../assets/data_json/json/fixture_example.json";
        return this.http.get(dataJson)
            .pipe(
                map(res => {
                    // console.log(res)
                    return res
                }),
                catchError(this.handleError)
            );
    }
    //get get-schedule-knockout
    // public getScheduleKnockout() {
    //     let headers = new HttpHeaders({
    //         'Cache-Control': 'no-cache',
    //         'Accept': 'application/json',
    //         'FB-API-KEY': environment.fbApiKey
    //     });
    //     // console.log(headers)
    //     return this.http.get(environment.pathUrlApi + "livescores/get-schedule-knockout", { headers: headers}
    //         )
    //         .pipe(
    //             map(res => {
    //                 // console.log(res)
    //                 return res
    //             }),
    //             catchError(this.handleError)
    //         );
    // }

    //get get-schedule-knockout static local
    public getScheduleKnockout() {
        // console.log(headers)
        var dataJson = "../assets/data_json/json/get-schedule-knockout.json";
        return this.http.get(dataJson)
            .pipe(
                map(res => {
                    // console.log(res)
                    return res
                }),
                catchError(this.handleError)
            );
    }






    // data global==========================================================================================================
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


