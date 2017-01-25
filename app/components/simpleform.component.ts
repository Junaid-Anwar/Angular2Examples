import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'simple-form',
    templateUrl: '../templates/simpleform.html'
})

export class SimpleFormComponent {
    title = 'Simple Form';

    submitForm(value: any): void {
        console.log('Form Data: ');
        console.log(value);
    }
}