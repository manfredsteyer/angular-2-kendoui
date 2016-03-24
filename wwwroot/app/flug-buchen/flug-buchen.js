System.register(['angular2/core', 'angular2/router', '../passagier-suchen/passagier-suchen', '../flug-suchen/flug-suchen', '../services/flug-manager', '../warenkorb/warenkorb', 'app/oauth2/oauth-service', '../home/home', '../auth/authorize'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, passagier_suchen_1, flug_suchen_1, flug_manager_1, warenkorb_1, router_2, oauth_service_1, home_1, authorize_1;
    var FlugBuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (passagier_suchen_1_1) {
                passagier_suchen_1 = passagier_suchen_1_1;
            },
            function (flug_suchen_1_1) {
                flug_suchen_1 = flug_suchen_1_1;
            },
            function (flug_manager_1_1) {
                flug_manager_1 = flug_manager_1_1;
            },
            function (warenkorb_1_1) {
                warenkorb_1 = warenkorb_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (authorize_1_1) {
                authorize_1 = authorize_1_1;
            }],
        execute: function() {
            FlugBuchen = (function () {
                function FlugBuchen(location) {
                    this.location = location;
                }
                FlugBuchen.prototype.isActive = function (path) {
                    return this.location.path() == path;
                };
                FlugBuchen = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flug-buchen/flug-buchen.html',
                        directives: [router_1.ROUTER_DIRECTIVES, warenkorb_1.Warenkorb],
                        providers: [flug_manager_1.FlugManager]
                    }),
                    router_1.RouteConfig([
                        { path: 'passagier-suchen', component: passagier_suchen_1.PassagierSuchen, name: 'PassagierSuchen' },
                        { path: 'flug-suchen', component: flug_suchen_1.FlugSuchen, name: 'FlugSuchen', useAsDefault: true }
                    ]),
                    authorize_1.Authorize(),
                    router_2.CanActivate(function (next, prev) {
                        var oauthService = new oauth_service_1.OAuthService();
                        if (!oauthService.hasValidAccessToken()) {
                            next.componentType = home_1.Home;
                            next.urlParams = ["login=true"];
                        }
                        return true;
                    }), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], FlugBuchen);
                return FlugBuchen;
            })();
            exports_1("FlugBuchen", FlugBuchen);
        }
    }
});
//# sourceMappingURL=flug-buchen.js.map