import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {

    }

    resolve() {
        // Typically listening to a observable, you would call subscribe instead of 'map' but...
        // this is a resolver, we need to return the observable to Angular so it can watch the observable when finished
        return this.eventService.getEvents().map(events => events)
    }
}