import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[addContent]'
})
export class AddContentDirective implements OnInit {
  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { 
    // console.log("Directive initializing");
  }
  
  ngOnInit(): void {
    // console.log("Directive initialized");
    // console.log(this.element.nativeElement);
    // this.element.nativeElement.innerText = "Content and Border added from Custom Directive";
    // this.element.nativeElement.style.border = "2px solid red";
    
    const textNode = this.renderer.createText('Content and Border added from Custom Directive');
    this.renderer.appendChild(this.element.nativeElement, textNode);
    this.renderer.setStyle(this.element.nativeElement, 'border', '2px solid red');
  }
}
