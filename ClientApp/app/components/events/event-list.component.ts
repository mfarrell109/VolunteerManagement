import { Component, OnInit } from '@angular/core';

import { Event } from './event';
import { EventPrice } from './event-price';
import { EventService } from './event.service';


@Component({
    moduleId: 'module.id',
    selector: 'vm-events',
    templateUrl: 'event-list.component.html',
    styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {
    constructor(private _eventService: EventService) { }

    ngOnInit() {
        // this._eventService.getEvents()
        //     .subscribe(events => this.events = events,
        //     error => this.errorMessage = <any>error);
        this.events = this._eventService.getEvents();
    }

    events: Event[];
    imageWidth: number = 150;
    imageMargin: number = 5;
    listFilter: string;
    errorMessage: string; 

    addEvent(): void {

    }

    
}
