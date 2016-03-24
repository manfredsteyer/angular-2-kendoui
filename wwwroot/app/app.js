System.register(['angular2/core', 'angular2/router', './home/home', './flug-buchen/flug-buchen', './flug-edit/flug-edit', './flug-edit-imp/flug-edit-imp', './flug-grid/flug-grid', 'app/oauth2/oauth-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, flug_buchen_1, flug_edit_1, flug_edit_imp_1, flug_grid_1, oauth_service_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (flug_buchen_1_1) {
                flug_buchen_1 = flug_buchen_1_1;
            },
            function (flug_edit_1_1) {
                flug_edit_1 = flug_edit_1_1;
            },
            function (flug_edit_imp_1_1) {
                flug_edit_imp_1 = flug_edit_imp_1_1;
            },
            function (flug_grid_1_1) {
                flug_grid_1 = flug_grid_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(location, oauthService) {
                    this.location = location;
                    this.oauthService = oauthService;
                    this.info = "Flug-Suchen App";
                    // Eckdaten des Client; müssen registriert sein!
                    // window.location.origin muss für Demo: http://localhost:8080
                    this.oauthService.redirectUri = window.location.origin + "/index.html";
                    this.oauthService.clientId = "spa-demo";
                    // Welche Rechte möchter der Client haben?
                    this.oauthService.scope = "openid profile email voucher";
                    // Eckdaten des Ausstellers/ Auth-Servers
                    this.oauthService.issuer = "https://steyer-identity-server.azurewebsites.net/identity";
                    this.oauthService.loginUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/authorize"; //Id-Provider?
                    // Info zum Protokoll (ODIC zusätzlich zu OAuth2)
                    this.oauthService.oidc = true;
                    // Lib soll Token aus Url parsen (sofern vorhanden)
                    this.oauthService.tryLogin({});
                }
                App.prototype.isActive = function (path) {
                    if (path == '') {
                        return this.location.path() == '';
                    }
                    return this.location.path().startsWith(path);
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES] // router-outlet, routerLink
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_1.Home, name: 'Home', useAsDefault: true },
                        { path: '/flug-buchen/...', component: flug_buchen_1.FlugBuchen, name: 'FlugBuchen' },
                        { path: '/flug-edit/:id', component: flug_edit_1.FlugEdit, name: 'FlugEdit' },
                        { path: '/flug-edit-imp/:id', component: flug_edit_imp_1.FlugEditImp, name: 'FlugEditImp' },
                        { path: '/flug-grid', component: flug_grid_1.FlugGrid, name: 'FlugGrid' }
                    ]),
                    router_1.CanActivate(function (next, prev) {
                        console.debug("CanActivate in App!");
                        return true;
                    }), 
                    __metadata('design:paramtypes', [router_1.Location, oauth_service_1.OAuthService])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map