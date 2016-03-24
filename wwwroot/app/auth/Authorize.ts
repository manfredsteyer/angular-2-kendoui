import { CanActivate, ComponentInstruction } from 'angular2/router';
import { OAuthService } from 'app/oauth2/oauth-service';
import { Home } from '../home/home';

export function Authorize()  {

    return CanActivate((next: ComponentInstruction, prev) => {

        var oauthService = new OAuthService();

        if (!oauthService.hasValidAccessToken()) {
            next.componentType = Home;
            next.urlParams = ["login=true"];
        }

        return true;
    })

}
