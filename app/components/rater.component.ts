import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'rater',
    templateUrl: '../templates/rater.html'
})

export class RaterComponent implements AfterViewInit {

    constructor(private el: ElementRef) { }

    ngAfterViewInit(): any {

        jQuery('.nav-pills > li a[title]').tooltip();

        var tabs = jQuery('a[data-toggle="tab"]'),
            tabPanels = jQuery('div[role="tabpanel"]');

        tabPanels.hide();

        tabs.click(function (e: any) {
            e.preventDefault();
            var target = jQuery(jQuery(this).attr('href')),
                targetLi = jQuery(this).parent('li');

            if (!targetLi.hasClass('disabled')) {
                tabs.parent('li').removeClass('active');
                targetLi.addClass('active');
                tabPanels.hide();
                target.show();
            }
            else {
                return false;
            }
        });

        jQuery('li.active a:first-child').click();

        jQuery('.btn-next').on('click', function (e: any) {
            var activeLi = jQuery('li.active');
            var nextLi = activeLi.next();
            nextLi.removeClass('disabled');
            nextLi.find('a[data-toggle="tab"]').click();
        })

        jQuery('.btn-prev').on('click', function (e: any) {
            var activeLi = jQuery('li.active');
            var prevLi = activeLi.prev();
            prevLi.find('a[data-toggle="tab"]').click();
        })
    }
}