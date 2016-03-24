import {Subject } from 'rxjs/Subject';
import {IFlug} from '../flug';

export class FlugEventService {

    flugSelected: Subject<IFlug> = new Subject();

}