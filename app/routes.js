"use strict";
var events_list_component_1 = require('./events/events-list.component');
var event_details_component_1 = require('./events/event-details/event-details.component');
exports.appRoutes = [
    // If path is 'x' -> display component: y
    // full: redirect if it fully matches the specified path string OR...
    // prefix: redirect if URL starts with specified path string
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map