System.register(['angular2/core', '../services/flug-manager', '../pipes/ort-pipe', 'angular2/router', '../flug-card/flug-card', '../date-control/date-control', '../services/flug-event-service', 'app/oauth2/oauth-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, flug_manager_1, ort_pipe_1, router_1, flug_card_1, date_control_1, flug_event_service_1, oauth_service_1, core_2;
    var FlugSuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (flug_manager_1_1) {
                flug_manager_1 = flug_manager_1_1;
            },
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_card_1_1) {
                flug_card_1 = flug_card_1_1;
            },
            function (date_control_1_1) {
                date_control_1 = date_control_1_1;
            },
            function (flug_event_service_1_1) {
                flug_event_service_1 = flug_event_service_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            }],
        execute: function() {
            FlugSuchen = (function () {
                function FlugSuchen(flugManager, flugEventService, authService) {
                    this.flugManager = flugManager;
                    this.flugEventService = flugEventService;
                    this.authService = authService;
                    this.von = "Graz";
                    this.nach = "Hamburg";
                    this.datum = "2016-02-15T12:10+01:00";
                }
                FlugSuchen.prototype._ngOnInit = function () {
                    // Verbindung zu SignalR aufbauen ...
                    var _this = this;
                    $.connection.hub.url = 'http://localhost:54799/signalr';
                    $.connection.hub.qs = { 'access_token': this.authService.getAccessToken() };
                    this.flugHub = $.connection.flugHub;
                    this.flugHub.client.flightSelected = function (id) {
                        var flight = _this.fluege.find(function (f) { return f.id == id; });
                        if (!flight)
                            return;
                        if (!flight.count)
                            flight.count = 0;
                        flight.count++;
                    };
                    $.connection
                        .hub
                        .start()
                        .then(function () {
                        console.debug("Verbindung aufgebaut!");
                    }, function (err) {
                        console.error("Fehler beim Verbindungsaubau mit SignalR");
                        console.error(err);
                    });
                };
                FlugSuchen.prototype.suchen = function () {
                    this.flugManager
                        .load(this.von, this.nach);
                };
                Object.defineProperty(FlugSuchen.prototype, "fluege", {
                    // public fluege: Array<IFlug> = new Array<IFlug>();
                    get: function () {
                        return this.flugManager.fluege;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlugSuchen.prototype, "fluegeSubject", {
                    get: function () {
                        return this.flugManager.fluegeSubject;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlugSuchen.prototype.selectFlug = function (flug) {
                    this.selectedFlug = flug;
                    // EventEmitter ---> Subject
                    this.flugEventService.flugSelected.next(flug);
                    this.flugHub.server.selectFlight(flug.id);
                };
                FlugSuchen = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen/flug-suchen.html',
                        pipes: [ort_pipe_1.OrtPipe],
                        directives: [router_1.ROUTER_DIRECTIVES, flug_card_1.FlugCard, date_control_1.DateControl],
                        changeDetection: core_2.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [flug_manager_1.FlugManager, flug_event_service_1.FlugEventService, oauth_service_1.OAuthService])
                ], FlugSuchen);
                return FlugSuchen;
            })();
            exports_1("FlugSuchen", FlugSuchen);
        }
    }
});
//# sourceMappingURL=flug-suchen.js.map