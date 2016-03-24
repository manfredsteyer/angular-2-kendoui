import { Control } from 'angular2/common';
import { Directive, Provider, provide } from 'angular2/core';
import { NG_VALIDATORS } from 'angular2/common';

@Directive({
    selector: 'input[ort]', // <input ort [(ngModel)]="...">
    providers: [provide(NG_VALIDATORS,
        { useValue: OrtValidator.validate, multi: true })]
})
export class OrtValidator {

    static validate(control: Control): any  {

        if (control.value == 'Graz'
            || control.value == 'Hamburg'
            || control.value == 'Frankfurt'
            || control.value == 'Berlin'
            || control.value == 'Wien') {

            return {};

        }

        return {
            ort: true 
        };
        
    }

}