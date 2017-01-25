import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id.replace("dist", ""),
    selector: 'reactive-form',
    templateUrl: '../templates/reactiveform.html'
})

export class ReactiveFormComponent {
    title = 'Reactive Form';
    reactiveForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.reactiveForm = formBuilder.group({
            'name': '',
            'gender': 'Male',
            'hiking': false,
            'running': false
        });
    }

    submitForm(value: any): void {
        console.log('Reactive Form Data: ');
        console.log(value);
    }
}