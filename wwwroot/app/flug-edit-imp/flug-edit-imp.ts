import {Component } from 'angular2/core';
import {RouteParams, OnActivate, OnDeactivate, CanActivate, CanDeactivate, ComponentInstruction } from 'angular2/router';
import {FlugService} from '../services/flug-service';
import {IFlug } from '../flug';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import { OrtValidator } from '../validation/ort-validator';
import { OrtValidatorAsync } from '../validation/ort-validator-async';


@Component({
    templateUrl: 'app/flug-edit-imp/flug-edit-imp.html'
})
@CanActivate((next, prev) => {
    console.debug("CanActivate");
    return true;
})
export class FlugEditImp implements OnActivate, OnDeactivate, CanDeactivate {

    private id: number;
    private message: string;
    private activate = true;

    private form: ControlGroup;

    private exitWarning = {
        show: false,
        resolve: null
    };

    private setFormValue(key, value) {
        var c = <Control>this.form.controls[key];
        if (c) {
            c.updateValue(value);
        }
    }

    private setForm(model: any) {
        for (var key in model) {
            var value = model[key];
            this.setFormValue(key, value);
        }
    }

    constructor(params: RouteParams, fb: FormBuilder, private flugService: FlugService) {
        this.id = parseInt(params.get('id'));

        
        this.form = fb.group({
            abflugort: [
                'XY',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30),
                    OrtValidator.validate
                ]),
                Validators.composeAsync([
                    OrtValidatorAsync.validate
                ])
            ],
            zielort: [''],
            datum: [''],
            id: ['']
        });

        var form = this.form;
        
        this.flugService
            .load(this.id)
            .subscribe(
                flug => {

                    this.setForm(flug);

                    this.message = "Flug wurde erfolgreich geladen!";
                },
                err => {
                    console.error(err);
                    this.message = "Fehler beim Laden!";
                }
            );
    }

    save(f) {
        var x: Control;

        /*
        this.activate = false;
        setTimeout(() => {
            this.activate = true;
        }, 0);
        */
        

        var flug = this.form.value;

        this.flugService
            .save(<IFlug>flug)
            .subscribe(
                flug => {

                    this.setForm(flug);
                    this.message = "Flug wurde gespeichert!";
                },
                (err: any) => {
                    console.error("Fehler beim Speichern!");
                    console.error(err); // <-- Http-Response mit Fehler!
                    this.message = err.text(); // <-- Text aus Payload
                }
            );
    }


    routerCanDeactivate(next, prev) {

        this.exitWarning.show = true;

        return new Promise((resolve) => {
            this.exitWarning.resolve = resolve;
        }).then((decision) => {
            this.exitWarning.show = false;
            return decision;
        });
    }



    routerOnActivate(next, prev) {
        console.debug("routerOnActivate");
    }

    routerOnDeactivate(next, prev) {
        console.debug("routerOnDeactivate");
    }



    info = "Flug-Edit";

}