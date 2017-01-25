import { Component } from '@angular/core';

@Component({
    moduleId: module.id.replace("dist", ""),
    selector: 'helloworld',
    templateUrl: '../templates/helloworld.html'
})

export class HelloWorldComponent {
    title = 'Hello World!!!!!';
    name: string;
    email: string;
}