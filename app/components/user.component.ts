import { Component } from '@angular/core';

import { IUser } from '../models/user';

@Component({
    moduleId: module.id.replace("dist", ""),
    selector: 'user',
    templateUrl: '../templates/user.html'
})

export class UserComponent {
    title = 'User Profile';
    user: IUser;

    constructor() {
        this.user = {
            name: 'John Doe',
            email: 'jdoe@gmail.com',
            address: {
                street: '123 Main St',
                city: 'Sacramento',
                state: 'California',
                zip: 95835
            }
        }
    }

    submitForm(value: any): void {
        console.log('Form Data: ');
        console.log(value);
    }
}