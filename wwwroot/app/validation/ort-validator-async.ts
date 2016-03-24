import { Control } from 'angular2/common';
import { Directive, Provider, provide } from 'angular2/core';
import { NG_ASYNC_VALIDATORS } from 'angular2/common';

@Directive({
    selector: 'input[ortAsync]', // <input ort [(ngModel)]="...">
    providers: [provide(NG_ASYNC_VALIDATORS,
        { useValue: OrtValidatorAsync.validate, multi: true })]
})
export class OrtValidatorAsync {

    static validate(control: Control): Promise<any>  {

        return new Promise((resolve) => {

            // async, z. B. HTTP-Zugriff

            setTimeout(
                () => {
                    if (control.value == 'Graz'
                        || control.value == 'Hamburg'
                        || control.value == 'Frankfurt'
                        || control.value == 'Wien') {

                        resolve({});
                    }
                    resolve({
                        'ort-async': true
                    });
                
                }, 
                3000
            );

        });


        
    }

}