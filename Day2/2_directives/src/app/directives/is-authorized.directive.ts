import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[isAuthorized]'
})
export class IsAuthorizedDirective implements OnInit{
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
  
  ngOnInit(): void {
    // To Do: Check if user is authorized via service
    const flag = true;

    if(flag)  {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
