import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'reactive-form-validation',
    templateUrl: '../templates/reactiveformvalidation.html'
})

export class ReactiveFormValidationComponent {
    title = 'Reactive Form Validation';
    reactiveForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.reactiveForm = formBuilder.group({
            'name': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(24)])],
            'gender': ['', Validators.required],
            'hiking': false,
            'running': false
        });
    }

    submitForm(value: any): void {
        console.log('Reactive Form Data: ');
        console.log(value);
    }
}