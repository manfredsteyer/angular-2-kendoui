System.register(['angular2/platform/browser', './app', 'angular2/http', 'rxjs/add/operator/map', './services/flug-service', 'angular2/core', './pipes/ort-pipe', 'angular2/router', './services/flug-manager', './flug-card/flug-card', './services/flug-event-service', 'app/oauth2/oauth-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, app_1, http_1, flug_service_1, core_1, ort_pipe_1, router_1, flug_manager_1, flug_card_1, flug_event_service_1, oauth_service_1;
    var services, Flug;
    function Range(min, max) {
        return function (decorated, key) {
            if (!decorated.constructor.metadata) {
                decorated.constructor.metadata = {};
            }
            if (!decorated.constructor.metadata[key]) {
                decorated.constructor.metadata[key] = {};
            }
            decorated.constructor.metadata[key].min = min;
            decorated.constructor.metadata[key].max = max;
        };
    }
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_manager_1_1) {
                flug_manager_1 = flug_manager_1_1;
            },
            function (flug_card_1_1) {
                flug_card_1 = flug_card_1_1;
            },
            function (flug_event_service_1_1) {
                flug_event_service_1 = flug_event_service_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            }],
        execute: function() {
            services = [
                core_1.provide("BASE_URL", { useValue: 'http://www.angular.at' }),
                flug_service_1.FlugService,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                oauth_service_1.OAuthService,
                flug_manager_1.FlugManager,
                flug_event_service_1.FlugEventService,
                // provide(APP_BASE_HREF, { useValue: '/' }),
                core_1.provide(core_1.PLATFORM_PIPES, { useValue: ort_pipe_1.OrtPipe, multi: true }),
                core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: flug_card_1.FlugCard, multi: true })
            ];
            browser_1.bootstrap(app_1.App, services);
            Flug = (function () {
                function Flug() {
                }
                __decorate([
                    Range(3, 30), 
                    __metadata('design:type', String)
                ], Flug.prototype, "abflugort", void 0);
                __decorate([
                    Range(3, 30), 
                    __metadata('design:type', String)
                ], Flug.prototype, "zielort", void 0);
                __decorate([
                    Range(5, 10), 
                    __metadata('design:type', String)
                ], Flug.prototype, "datum", void 0);
                Flug = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Flug);
                return Flug;
            })();
            exports_1("Flug", Flug);
            // Range(3, 30)(Flug.prototype, 'abflugort');
            console.debug(Flug.metadata);
        }
    }
});
//# sourceMappingURL=boot.js.map