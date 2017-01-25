import { Component } from '@angular/core';

import { CoursesService } from '../services/courses.service';

@Component({
    moduleId: module.id,
    selector: 'courses',
    templateUrl: '../templates/courses.html'
})

export class CoursesComponent {
    title = 'Courses';
    courses: string[];

    constructor(private _coursesService: CoursesService) {
        this.courses = _coursesService.getCourses();
    }
}