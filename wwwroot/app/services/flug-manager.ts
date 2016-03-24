import { FlugService } from './flug-service';
import { Injectable } from 'angular2/core';
import { IFlug } from '../flug';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';


@Injectable()
export class FlugManager {

    constructor(private flugService: FlugService) {

      
    }

    fluege: Array<IFlug> = [];

    fluegeSubject = new ReplaySubject<IFlug[]>(1);

    load(von, nach) {
        this.flugService
            .find(von, nach)
            .subscribe(
                fluege => {
                    this.fluege = fluege;
                    this.fluegeSubject.next(fluege);
                },
                err => {
                    console.error("Fehler!");
                    console.error(err);
                }
            );
    }

}