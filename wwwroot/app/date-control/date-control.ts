import { Component, Input, Output } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgControl, NgModel, Control } from 'angular2/common';
import { EventEmitter, OnChanges } from 'angular2/core';

// <data-control 
//	    [date]="flug.datum" 
//      (dateChange)="flug.datum = $event">
//
// <data-control [(date)]="flug.datum"> 
@Component({
    selector: 'date-control',
    templateUrl: 'app/date-control/date-control.html',
    exportAs: 'dateControl' // <-- Externe Name
})
export class DateControl
                extends NgControl
                implements OnChanges {

    @Input() date;
    @Output() dateChange = new EventEmitter();

    day; month; year; hour; minute;

    changed = false;
    _control: Control;
    _onChange: any;

    constructor() {
        super();
        this.valueAccessor = {
            writeValue(obj: any): void {
            },
            registerOnChange(fn: any): void {
                this._onChange = fn;
            },
            registerOnTouched(fn: any): void {
            }
        };

        this.name = "testDate";
    }

    ngOnChanges() {

        this._control = new Control(this.date);
        
        var date = new Date(this.date);

        this.day = date.getDate(); // Day in Month
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();



    }

    viewToModelUpdate(newValue: any) {
    }

    get path() {
        return [];
    }

    get control() {
        return this._control;
    }





    apply() {

        var date = new Date();

        date.setDate(this.day);
        date.setMonth(this.month - 1);
        date.setFullYear(this.year);
        date.setHours(this.hour);
        date.setMinutes(this.minute);
        date.setSeconds(0);
        date.setMilliseconds(0);

        this.dateChange.next(date.toISOString());
        this.changed = true;

        console.debug(this._onChange);
        // this._onChange(date.toISOString());

    }


}