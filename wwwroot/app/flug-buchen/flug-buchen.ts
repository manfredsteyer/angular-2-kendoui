import { Component} from 'angular2/core';
import { ROUTER_DIRECTIVES, Location, RouteConfig} from 'angular2/router';
import { PassagierSuchen} from '../passagier-suchen/passagier-suchen';
import { FlugSuchen} from '../flug-suchen/flug-suchen';
import { FlugManager} from '../services/flug-manager';
import { Warenkorb} from '../warenkorb/warenkorb';
import { CanActivate, ComponentInstruction } from 'angular2/router';
import { OAuthService } from 'app/oauth2/oauth-service';
import { Home } from '../home/home';
import { Authorize} from '../auth/authorize';
@Component({
    templateUrl: 'app/flug-buchen/flug-buchen.html',
    directives: [ROUTER_DIRECTIVES, Warenkorb],
    providers: [FlugManager]
})
@RouteConfig([
    { path: 'passagier-suchen', component: PassagierSuchen, name: 'PassagierSuchen' },
    { path: 'flug-suchen', component: FlugSuchen, name: 'FlugSuchen', useAsDefault: true }
])
@Authorize()
@CanActivate((next: ComponentInstruction, prev) => {

        var oauthService = new OAuthService();

        if (!oauthService.hasValidAccessToken()) {
            next.componentType = Home;
            next.urlParams = ["login=true"];
        }

        return true;
    })
export class FlugBuchen {

    constructor(private location: Location) {
        
    }

    isActive(path): boolean {
        return this.location.path() == path;
    }

}