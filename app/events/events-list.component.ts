// Parent component

import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <!--#thumbnail: this variable now can be accessed anywhere in the template-->
                <!--*ngFor: repeating data-->
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

// OnInit: Ang Ts declarations and let Ts know that this comp implements OnInit
export class EventsListComponent implements OnInit {
    events:any

    // Inject service - can access elsewhere in class like in ngOnInit
    constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {

    }

    // Need to have this comp loaded - comp have lifecycle hooks that you can hook into and ngOnInit is one
    // 'events' matches itself in 'resolve: {events:EventListResolver}' in routes.ts
    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}