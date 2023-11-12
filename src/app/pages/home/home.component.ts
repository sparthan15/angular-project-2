import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { BroadcastService } from 'src/app/shared/broadcast.service';
import { EventKeys } from 'src/app/shared/broadcastEvent.model';
import * as _ from 'underscore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = false;

  constructor() {
    console.log(environment.loggedIn);
    environment.loggedIn = true;
    this.loggedIn = environment.loggedIn;
  }

  ngOnInit(): void {}
}
