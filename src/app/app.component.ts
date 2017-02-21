import { Component } from '@angular/core';
import {LobbyComponent} from './lobby/lobby.component';
import {TrainingSessionComponent} from './training-session/training-session.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LobbyComponent]
})
export class AppComponent {
  private isLoggedIn = true;
  private title = 'TestCoRe';

  setState(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onLogin(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}
