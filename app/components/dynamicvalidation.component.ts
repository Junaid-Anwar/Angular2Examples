import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomValidators } from '../models/customvalidators';

@Component({
    moduleId: module.id.replace("dist", ""),
    selector: 'dynamicvalidation',
    templateUrl: '../templates/dynamicvalidation.html'
})

export class DynamicValidationComponent {

    title = 'Dynamic Validation';
    dynamicValidationForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.dynamicValidationForm = formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
            birthYear: ['', [Validators.required, Validators.pattern('^\\d{4}$')]],
            email: ['', [Validators.required, CustomValidators.email]],
            creditCardNumber: ['', [Validators.required, CustomValidators.creditcard]],
            gender: [null, [Validators.required]],
            hiking: [false],
            running: [false]
        });

    }

    submitForm(value: any): void {
        console.log('Form Data: ');
        console.log(value);
    }

}