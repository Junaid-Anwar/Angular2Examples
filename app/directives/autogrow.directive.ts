import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[autoGrow]'
})

export class AutoGrowDirective {
    constructor(private el: ElementRef) { }

    @HostListener('focus') onFocus() {
        this.el.nativeElement.style.width = '100%';
    }

    @HostListener('blur') onBlur() {
        this.el.nativeElement.style.width = '500px';
    }
}