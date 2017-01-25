import { Component } from '@angular/core';

@Component({
    moduleId: module.id.replace("dist", ""),
    selector: 'hobbies',
    templateUrl:'../templates/hobbies.html'
})

export class HobbiesComponent {
    title = 'Hobbies';
    hobbies: string[];
    showHobbies: boolean;

    constructor() {
        this.hobbies = ["Hobby 1", "Hobby 2", "Hobby 3"];
        this.showHobbies = true;
    }

    toggleHobbies() {
        if (this.showHobbies == true)
        {
            this.showHobbies = false;
        }
        else
        {
            this.showHobbies = true;
        }
    }
}