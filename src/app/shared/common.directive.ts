import {Directive,ElementRef,Renderer2} from '@angular/core'

@Directive(
    {
        selector:"[appCommon]"
    }
)

export class CommonDirective{
    
    constructor(private elemRef:ElementRef,private renderer:Renderer2){
renderer.setStyle(elemRef.nativeElement,"cursor","pointer");
    }

}