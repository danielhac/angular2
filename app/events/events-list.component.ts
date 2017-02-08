// Parent component

import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <!--#thumbnail: this variable now can be accessed anywhere in the template-->
                <!--*ngFor: repeating data-->
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

// OnInit: Ang Ts declarations and let Ts know that this comp implements OnInit
export class EventsListComponent implements OnInit {
    events:any[]

    // Inject service - can access elsewhere in class like in ngOnInit
    constructor(private eventService: EventService) {

    }

    // Need to have this comp loaded - comp have lifecycle hooks that you can hook into and ngOnInit is one
    ngOnInit() {
        this.events = this.eventService.getEvents()
    }
}