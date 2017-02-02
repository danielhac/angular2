// Child component

import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: {{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    `,
    styles: [`
        .pad-left { margin-left: 20px; }
        .well div { color: #2f96b4; }
    `]
})
export class EventThumbnailComponent {
    // Public prop in typescript that allows any datatype for event
    // Input: tells Ang that this event will be passed from another comp (Parent to child)
    @Input() event:any

}