import {Component } from 'angular2/core';
import {RouteParams, OnActivate, OnDeactivate, CanActivate, CanDeactivate, ComponentInstruction } from 'angular2/router';
import {FlugService} from '../services/flug-service';
import {IFlug } from '../flug';
import { OrtValidator } from '../validation/ort-validator';
import { OrtValidatorAsync } from '../validation/ort-validator-async';
import { DateControl } from '../date-control/date-control';

@Component({
    templateUrl: 'app/flug-edit/flug-edit.html',
    directives: [OrtValidator, OrtValidatorAsync, DateControl]
})
@CanActivate((next, prev) => {
    console.debug("CanActivate");
    return true;
})
export class FlugEdit implements OnActivate, OnDeactivate, CanDeactivate {

    private id: number;
    private flug = {};
    private message: string;
    private activate = true;

    private exitWarning = {
        show: false,
        resolve: null
    };
    
    changed = false;
    change() {
        this.changed = true;
    }

    constructor(params: RouteParams, private flugService: FlugService) {
        this.id = parseInt(params.get('id'));

        this.flugService
            .load(this.id)
            .subscribe(
                flug => {
                    this.flug = flug;
                    this.message = "Flug wurde erfolgreich geladen!";
                },
                err => {
                    console.error(err);
                    this.message = "Fehler beim Laden!";
                }
            );
    }

    save(f) {

        // Validierung ok?

        this.activate = false;
        this.changed = false;
        setTimeout(() => {
            this.activate = true;
        }, 0);


        this.flugService
            .save(<IFlug>this.flug)
            .subscribe(
                flug => {
                    this.flug = flug;
                    this.message = "Flug wurde gespeichert!";
                },
                (err: any) => {
                    console.error("Fehler beim Speichern!");
                    console.error(err); // <-- Http-Response mit Fehler!
                    this.message = err.text(); // <-- Text aus Payload
                }
            );
    }


    routerCanDeactivate(next, prev): any {

        if (!this.changed) return true;

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