import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2017',
        time: '10:00 am',
        price: 588.88,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data) {
        console.log('received:', data)
    }
}