import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderHoverStyle]'
})
export class BorderHoverStyleDirective {
  @Input() isFirstEle: boolean; // Determines if the element is the first
  @Input() isLastEle: boolean; // Determines if the element is the last

  // Element referenced
  constructor(private ele: ElementRef) {
    this.isFirstEle = false;
    this.isLastEle = false;
  }

  // Execute when hovering over element
  @HostListener('mouseenter') onHover() {
    this.borderHighlight(this.isFirstEle || this.isLastEle, true);
  }

  // Execute when de-hovering
  @HostListener('mouseleave') onDehover() {
    this.borderHighlight(this.isFirstEle || this.isLastEle, false);
  }

  // Highlights the border on or off
  borderHighlight(firstOrLast: boolean, state: boolean) {
    this.ele.nativeElement.style.border = firstOrLast && state ? "5px solid yellow" : "";
  }
}
