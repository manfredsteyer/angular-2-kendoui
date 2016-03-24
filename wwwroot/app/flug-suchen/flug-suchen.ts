
import { Component, provide, Inject} from 'angular2/core';
import { IFlug} from '../flug';
import { FlugManager} from '../services/flug-manager';
import { OrtPipe} from '../pipes/ort-pipe';
import { ROUTER_DIRECTIVES} from 'angular2/router';
import { FlugCard} from '../flug-card/flug-card';
import { DateControl} from '../date-control/date-control';
import {FlugEventService} from '../services/flug-event-service';
import { OAuthService} from 'app/oauth2/oauth-service';
import { ChangeDetectionStrategy} from 'angular2/core';

declare var fetch: any;
declare var $: any;

@Component({
    selector: 'flug-suchen', 
    templateUrl: 'app/flug-suchen/flug-suchen.html',
    pipes: [OrtPipe],
    directives: [ROUTER_DIRECTIVES, FlugCard, DateControl],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlugSuchen {

    public von: string = "Graz";
    public nach: string = "Hamburg";
    public datum: string = "2016-02-15T12:10+01:00";
    public selectedFlug: IFlug;

  

    constructor(
        private flugManager: FlugManager,
        private flugEventService: FlugEventService,
        private authService: OAuthService) {
    }

    private flugHub: any;

    _ngOnInit() {
        // Verbindung zu SignalR aufbauen ...
               
		$.connection.hub.url = 'http://localhost:54799/signalr';
		$.connection.hub.qs = { 'access_token': this.authService.getAccessToken() };

		this.flugHub = $.connection.flugHub;


        this.flugHub.client.flightSelected = (id) => {

            var flight = <any>this.fluege.find(f => f.id == id);
            if (!flight) return;
            if (!flight.count) flight.count = 0;
            flight.count++;
        };

        $.connection
            .hub
            .start()
            .then(
                () => {
                    console.debug("Verbindung aufgebaut!");
                },
                (err) => {
                    console.error("Fehler beim Verbindungsaubau mit SignalR");
                    console.error(err);
                });
        

    }

    public suchen(): void {

        this.flugManager
            .load(this.von, this.nach);

    }

    // public fluege: Array<IFlug> = new Array<IFlug>();

    get fluege(): Array<IFlug> {
        return this.flugManager.fluege;
    }

    get fluegeSubject() {
        return this.flugManager.fluegeSubject;
    }

    public selectFlug(flug: IFlug) {
        this.selectedFlug = flug;
        // EventEmitter ---> Subject
        this.flugEventService.flugSelected.next(flug);

        this.flugHub.server.selectFlight(flug.id);

    }

}