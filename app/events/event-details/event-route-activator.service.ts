import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router) {

    }

    // Check if the id passed in is a valid event
    // canActivate: determine whether or not a user can navigate to a route
    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if (!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }
}