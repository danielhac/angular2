// This comp will be routed directly - This is not a child comp
// The id of the event will be in the URL such as: .../events/1

import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent {
    event:any

    constructor(private eventService:EventService) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(1)
    }
}