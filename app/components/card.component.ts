import { Component, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: '../templates/card.html'
})

export class CardComponent {
    @Input() header: string = 'Header';
    @Input() footer: string = 'Footer';
}