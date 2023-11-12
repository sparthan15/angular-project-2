import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';
import { EventKeys, IBroadcastEvent } from './broadcastEvent.model';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  private _eventBus = new Subject<IBroadcastEvent>();

  on(key: EventKeys): Observable<string> {
    console.log('Subscribed to ' + key);
    return this._eventBus.asObservable().pipe(
      filter(event => event.key === key),
      map(event => {
        console.log(event.data);
        return event.data
      }));
  }

  broadcast(key: EventKeys, data: string) {
    this._eventBus.next({ key, data });
    console.log("Publishing event " + key + "->" + data);
  }
}
