import { Component, EventEmitter, Input, Output } from 'angular2/core';
import { IFlug} from '../flug';
import { OnInit, OnChanges, OnDestroy } from 'angular2/core';

/*
<!-- Template -->
<div *ngFor="#f of fluege">
   <flug-card [item]="f" 
           [selectedItem]="selectedFlug" 
           (selectedItemChange)="selectedFlug = $event">
   </flug-card>
</div>
*/

@Component({
    selector: 'flug-card',
    templateUrl: 'app/flug-card/flug-card.html'
})
export class FlugCard
    implements OnInit, OnChanges, OnDestroy {

    @Input('item') flug: IFlug;
    @Input() selectedItem: IFlug;
    @Output() selectedItemChange = new EventEmitter();

    ngOnInit() {
        console.debug("ngOnInit");
    }

    ngOnChanges() {
        console.debug("ngOnChanges");

    }

    ngOnDestroy() {
        console.debug("ngOnDestroy");

    }

    select() {
        this.selectedItemChange.next(this.flug);
    }

}