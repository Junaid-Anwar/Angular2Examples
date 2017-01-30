import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CustomValidators } from '../models/customvalidators';

@Component({
    moduleId: module.id.replace("dist", ""),
    selector: 'validationmessage',
    templateUrl: '../templates/validationmessage.html'
})

export class ValidationMessageComponent implements OnInit {
    @Input() control: FormControl;
    @Input() label: string;
    @Input() message: string;
    validationMessage: string=null
    
    constructor() { }

    ngOnInit() {
        this.control.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
        this.validationMessage = null;

        for (let validator in this.control.errors) {
            if (this.control.dirty || this.control.touched) {
                this.validationMessage = CustomValidators.getMessage(this.label, this.message, validator, this.control.errors[validator]);
            }
        }
    }
}