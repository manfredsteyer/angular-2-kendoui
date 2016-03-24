import {bootstrap}    from 'angular2/platform/browser'
import {App} from './app'
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/operator/map';
import {FlugService } from './services/flug-service';
import {provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES, reflector, Injectable} from 'angular2/core';
import {OrtPipe} from './pipes/ort-pipe';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import { FlugManager} from './services/flug-manager';
import { FlugCard} from './flug-card/flug-card';
import {FlugEventService} from './services/flug-event-service';
import {OAuthService } from 'app/oauth2/oauth-service';

var services = [
    provide("BASE_URL", { useValue: 'http://www.angular.at' }),
    FlugService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    OAuthService,
    FlugManager,
    FlugEventService,
    // provide(APP_BASE_HREF, { useValue: '/' }),
    provide(PLATFORM_PIPES, { useValue: OrtPipe, multi: true }),
    provide(PLATFORM_DIRECTIVES, { useValue: FlugCard, multi: true })
    // provide(FlugService, { useClass: FlugService })
];

bootstrap(App, services);


function Range(min, max) {

    return function (decorated, key) {

        if (!decorated.constructor.metadata) {
            decorated.constructor.metadata = {};
        }

        if (!decorated.constructor.metadata[key]) {
            decorated.constructor.metadata[key] = {}
        }
        decorated.constructor.metadata[key].min = min;
        decorated.constructor.metadata[key].max = max;
    }
}

@Injectable()
export class Flug {
    @Range(3, 30)
    abflugort: string;

    @Range(3, 30)
    zielort: string;

    @Range(5, 10)
    datum: string; // ISO-Datum
    id: number;
}
// Range(3, 30)(Flug.prototype, 'abflugort');

console.debug((<any>Flug).metadata);

