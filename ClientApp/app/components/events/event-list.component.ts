import { Component } from '@angular/core';

@Component({
    moduleId: 'module.id',
    selector: 'vm-events',
    templateUrl: 'event-list.component.html'
})
export class EventListComponent {
    constructor() { }
    events: any[] = [
        {'name': 'Chicago', 'date': '07/01/2017', 'imageUrl': 'https://tribwgnam.files.wordpress.com/2016/04/screen-shot-2016-03-22-at-11-46-22-am-1.png'},
        {'name': 'Ryan Shuppe & the Rubber Band', 'date': '09/01/2017', 'imageUrl': 'https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/15538778_201478900314258_5923702783944425472_n.jpg?ig_cache_key=MTQxMTE4MjQyNzIxNjM1NTEyOQ%3D%3D.2'},
        {'name': 'Styx', 'date': '10/15/2017', 'imageUrl': 'http://www.soaringeaglecasino.com/ArtistPage/img/entertainment/Artist_Icons/MainArtist/ArtistBanner_Styx.jpg'},
        {'name': 'Midlife Crisis', 'date': '12/21/2017', 'imageUrl': 'http://www.davisarts.org/wp-content/uploads/2015/05/MLC-Photo-300x201.jpg'}
    ];
    imageWidth: number = 150;
    imageMargin: number = 5;
    eventFilter: string = 'Chicago';
    

    addEvent(): void {
        this.events.push({'name': 'Test', 'date': '12/11/2017','imageUrl':'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'})
    }
}
