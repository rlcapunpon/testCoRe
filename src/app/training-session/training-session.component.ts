import { Component, OnInit } from '@angular/core';
import {DevToolComponent} from '../dev-tool/dev-tool.component';
import {CodeAreaComponent} from '../code-area/code-area.component';
import {NavigationAreaComponent} from '../navigation-area/navigation-area.component';

@Component({
  selector: 'app-training-session',
  templateUrl: './training-session.component.html',
  styleUrls: ['./training-session.component.css'], 
  providers: [DevToolComponent, CodeAreaComponent, NavigationAreaComponent]
})
export class TrainingSessionComponent implements OnInit {
  private isLoggedIn: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
