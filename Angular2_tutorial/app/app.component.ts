import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <h1>{{imageWidth}}</h1>
        <pm-products>Loading the product list</pm-products>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = "Chen's Product Management";
 }
