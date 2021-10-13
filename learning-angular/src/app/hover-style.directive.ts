import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input() hstyle?: string; // Style of formatting

  // Element referenced
  constructor(private ele: ElementRef) {
  }

  // Execute when hovering over element
  @HostListener('mouseenter') onHover() {
    this.formatText(this.hstyle || "", true);
  }

  // Execute when de-hovering
  @HostListener('mouseleave') onDehover() {
    this.formatText(this.hstyle || "",false);
  }

  // Formats text or de-formats text given the style (e.g. bold, underline) and on/off state
  formatText(style: string, state: boolean): void {
    switch(style) {
      case "underline":
        this.ele.nativeElement.style.textDecoration = state ? "underline" : "initial";
        break;
      case "bold":
        this.ele.nativeElement.style.fontWeight = state ? "bold" : "normal";
        break;
      default:
        break;
    }
  }
}
