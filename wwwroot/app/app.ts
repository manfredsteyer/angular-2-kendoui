import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location, CanActivate} from 'angular2/router';
import {Home } from './home/home';
import {FlugBuchen } from './flug-buchen/flug-buchen';
import {FlugEdit } from './flug-edit/flug-edit';
import {FlugEditImp } from './flug-edit-imp/flug-edit-imp';
import {FlugGrid } from './flug-grid/flug-grid';
import {OAuthService } from 'app/oauth2/oauth-service';

    @Component({
        selector: 'app',
        templateUrl: 'app/app.html',
        directives: [ROUTER_DIRECTIVES] // router-outlet, routerLink
    })
    @RouteConfig([

            { path: '/', component: Home, name: 'Home', useAsDefault: true },
            { path: '/flug-buchen/...', component: FlugBuchen, name: 'FlugBuchen' },
            { path: '/flug-edit/:id', component: FlugEdit, name: 'FlugEdit' },
            { path: '/flug-edit-imp/:id', component: FlugEditImp, name: 'FlugEditImp' },
            { path: '/flug-grid', component: FlugGrid, name: 'FlugGrid' }

    ])
@CanActivate((next, prev) => {
    console.debug("CanActivate in App!");
    return true;
})
    export class App {

        info = "Flug-Suchen App";

        constructor(
            private location: Location,
            private oauthService: OAuthService) {

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



        isActive(path): boolean {
            if (path == '') {
                return this.location.path() == '';
            }
            return this.location.path().startsWith(path);
        }

    }