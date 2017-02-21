import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  @Output() onLogin = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}

  login(sessionType: string) {
    this.onLogin.emit(true);
  }
}
