import { Component } from "@angular/core";


@Component(
    {
        selector: 'app-property-card',
        standalone: true,
        templateUrl:'./property-card.component.html',
        styleUrl:'./property-card.component.css'
    }
)

export class PropertyCardComponent
{
Property: any= {
    "Id":1,
    "Type":"Geetha House",
    "Price": 12000
}

}