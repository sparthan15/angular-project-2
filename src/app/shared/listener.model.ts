import { Subscription } from "rxjs";
import { BroadcastService } from "./broadcast.service";
import { EventKeys } from "./broadcastEvent.model";

class Listener {
    private eventSubscription: Subscription;

    constructor(
        broadcastService: BroadcastService,
        eventKeys: EventKeys,
        private listenerName: string) {
            //_.bindAll(this, "reactToEvent");
        this.eventSubscription = broadcastService.on(eventKeys).subscribe();

    }

    reactoToEvent(event: string) {
        console.log(`Listener [${this.listenerName}]`)
        
    }
}