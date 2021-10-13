import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderHoverStyle]'
})
export class BorderHoverStyleDirective {
  @Input() isFirstEle: boolean; // Determines if the element is the first
  @Input() isLastEle: boolean; // Determines if the element is the last

  // @Input() borderVisible: boolean;
  // currentBorder: string;

  // Element referenced
  constructor(private ele: ElementRef) {
    this.isFirstEle = false;
    this.isLastEle = false;
  }

  // Execute when hovering over element
  @HostListener('mouseenter') onHover() {
    // if(this.borderVisible) {
    //   this.currentBorder = this.ele.nativeElement.style.border;
    //   this.ele.nativeElement.style.border = "5x solid yellow";
    // }
    this.borderHighlight(this.isFirstEle || this.isLastEle, true);
  }

  // Execute when de-hovering
  @HostListener('mouseleave') onDehover() {
    // if(this.borderVisible) {
    //   this.ele.nativeElement.style.border = this.currentBorder;
    // }
    this.borderHighlight(this.isFirstEle || this.isLastEle, false);
  }

  // Highlights the border on or off
  borderHighlight(firstOrLast: boolean, state: boolean) {
    this.ele.nativeElement.style.border = firstOrLast && state ? "5px solid yellow" : "";
  }

}
