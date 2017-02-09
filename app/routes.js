"use strict";
var events_list_component_1 = require('./events/events-list.component');
var event_details_component_1 = require('./events/event-details/event-details.component');
var create_event_component_1 = require('./events/create-event.component');
var _404_components_1 = require('./errors/404.components');
var event_route_activator_service_1 = require('./events/event-details/event-route-activator.service');
exports.appRoutes = [
    // If path is 'x' -> display component: y
    // full: redirect if it fully matches the specified path string OR...
    // prefix: redirect if URL starts with specified path string
    // Routes must be in specific order - events/new should be first to not affect the rest (think of if/else)
    { path: 'events/new', component: create_event_component_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, canActivate: [event_route_activator_service_1.EventRouteActivator] },
    { path: '404', component: _404_components_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map