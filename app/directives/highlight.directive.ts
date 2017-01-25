import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector:'[highlightColor]'
})

export class HighlightDirective {

    @Input() highlightColor: string;
    @Input() defaultColor: string;

    constructor(private el: ElementRef) {

    }

    @HostListener('mouseenter') onmouseenter() {
        this.setHighlightColor(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.setHighlightColor(null);
    }

    setHighlightColor(color:string) {
        this.el.nativeElement.style.background = color;
    }
}