import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'jquery',
    templateUrl: '../templates/jquery.html'
})

export class JQueryComponent implements AfterViewInit {
    title = 'jQuery Examples';

    constructor(private el: ElementRef) { }

    ngAfterViewInit(): any {
        jQuery(this.el.nativeElement).find('button#btnDynamicBind').on('click', function () {
            alert('Control Id: '+jQuery(this).attr('id'));
        })
    }

    clickMe(value:string) {
        alert(value);
    }
}