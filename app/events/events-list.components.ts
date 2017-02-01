import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent {
    event = {
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
}