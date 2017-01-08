import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Event } from './event';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventService {
    private _url = './events.json';
    constructor(private _http: Http) { }

    getEvents(): Event[] {
        // return this._http.get(this._url)
        //     .map((response: Response) => <Event[]>response.json())
        //     .do(data => console.log('All: ' + JSON.stringify(data)))
        //     .catch(this.handleError);
        return [
        {
            "name": "Chicago",
            "date": "07/01/2017",
            "gaPrice": 35,
            "orchestraPrice": 90,
            "imageUrl": "https://tribwgnam.files.wordpress.com/2016/04/screen-shot-2016-03-22-at-11-46-22-am-1.png"
        },
        {
            "name": "Ryan Shuppe & the RubberBand",
            "gaPrice": 15,
            "orchestraPrice": 70,
            "date": "09/01/2017",
            "imageUrl": "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/15538778_201478900314258_5923702783944425472_n.jpg?ig_cache_key=MTQxMTE4MjQyNzIxNjM1NTEyOQ%3D%3D.2"
        },
        {
            "name": "Styx",
            "gaPrice": 35,
            "orchestraPrice": 90,
            "date": "10/15/2017",
            "imageUrl": "http://www.soaringeaglecasino.com/ArtistPage/img/entertainment/Artist_Icons/MainArtist/ArtistBanner_Styx.jpg"
        },
        {
            "name": "Midlife Crisis",
            "gaPrice": 15,
            "orchestraPrice": 30,
            "date": "12/21/2017",
            "imageUrl": "http://www.davisarts.org/wp-content/uploads/2015/05/MLC-Photo-300x201.jpg"
        }
    ];
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}