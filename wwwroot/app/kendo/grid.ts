import { Component, Input, Host, ElementRef, OnInit } from 'angular2/core';

declare var $: any;

@Component({
    selector: 'k-grid', 
    template: '<div></div>'
})
export class Grid implements OnInit {


    constructor(@Host() private elm: ElementRef) {
    }

    @Input() options: any;

    ngOnInit() {
        // Zugriff aufs DOM; Funktioniert NUR mit DOMRendering !!!!
        $(this.elm.nativeElement).children().first().kendoGrid(this.options);
    }

}