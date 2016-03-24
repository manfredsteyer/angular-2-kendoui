import { Component, Input, Host, ElementRef, OnInit } from 'angular2/core';

// <k-grid [options]="options"></k-grid>
declare var $: any;

@Component({
    selector: 'k-grid', // <k-grid [options]="{}"></k-grid>
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