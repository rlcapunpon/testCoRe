import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { TrainingSessionComponent } from './training-session/training-session.component';
import { DevToolComponent } from './dev-tool/dev-tool.component';
import { CodeAreaComponent } from './code-area/code-area.component';
import { NavigationAreaComponent } from './navigation-area/navigation-area.component';
import { TimerComponent } from './timer/timer.component';
import { FileManagerComponent } from './file-manager/file-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    TrainingSessionComponent,
    DevToolComponent,
    CodeAreaComponent,
    NavigationAreaComponent,
    TimerComponent,
    FileManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
