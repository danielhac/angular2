
// Routes: Ang provids Ts definition for this router config that gives extra IntelliSense and compile time safety
// Just press 'control + space'
import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'

export const appRoutes:Routes = [
    // If path is 'x' -> display component: y
    // full: redirect if it fully matches the specified path string OR...
    // prefix: redirect if URL starts with specified path string
    // Routes must be in specific order - events/new should be first to not affect the rest
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]