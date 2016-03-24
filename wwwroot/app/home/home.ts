import {Component } from 'angular2/core';
import { Grid } from '../kendo/grid';
import { OAuthService } from 'app/oauth2/oauth-service';
import { Location } from 'angular2/router';

@Component({
    templateUrl: 'app/home/home.html',
    directives: [Grid]
})
export class Home {

    info = "Willkommen";
    options: any;

    constructor(
        private location: Location,
        private oauthService: OAuthService) {
    } 

    login() {
        // Umleitung zum Login-Server
        this.oauthService.initImplicitFlow("");
    }

    get name() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name;
    }

    needLogin = false;

    ngOnInit() {
        var result = this.location.path().match(/login=(.*)/);
        if (result) {
            this.needLogin = true;
        }
    }


}