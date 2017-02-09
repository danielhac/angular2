
// Routes: Ang provids Ts definition for this router config that gives extra IntelliSense and compile time safety
// Just press 'control + space'
import { Routes } from '@angular/router'

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'
import { Error404Component } from './errors/404.components'

export const appRoutes:Routes = [
    // If path is 'x' -> display component: y
    // full: redirect if it fully matches the specified path string OR...
    // prefix: redirect if URL starts with specified path string
    // Routes must be in specific order - events/new should be first to not affect the rest (think of if/else)
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]