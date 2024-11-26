// import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[highlight]'
// })
// export class HighlightDirective implements OnInit {
//   highlightColor: string;

//   constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { 
//     this.highlightColor = 'yellow';
//   }

//   ngOnInit() { 
//     this.element.nativeElement.addEventListener('mouseenter', () => {
//       this.renderer.setStyle(this.element.nativeElement, 'background-color', this.highlightColor);
//     });

//     this.element.nativeElement.addEventListener('mouseleave', () => {
//       this.renderer.removeStyle(this.element.nativeElement, 'background-color');
//     });
//   }
// }

// ----------------------------------------------------------------

// import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[highlight]'
// })
// export class HighlightDirective implements OnInit {
//   highlightColor: string;

//   constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { 
//     this.highlightColor = 'yellow';
//   }

//   ngOnInit() { 
//     this.renderer.listen(this.element.nativeElement, 'mouseenter', () => {
//       this.renderer.setStyle(this.element.nativeElement, 'background-color', this.highlightColor);
//     });

//     this.renderer.listen(this.element.nativeElement, 'mouseleave', () => {
//       this.renderer.removeStyle(this.element.nativeElement, 'background-color');
//     });
//   }
// }

// ----------------------------------------------------------------

import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  // @Input() highlightColor: string;
  @Input('highlight') highlightColor: string;

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {
    this.highlightColor = 'yellow';
  }

  @HostListener('mouseenter')
  onMouseOver() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'background-color');
  }
}
