import { Component, OnInit } from '@angular/core';
import { FileManagerComponent} from '../file-manager/file-manager.component'


@Component({
  selector: 'app-navigation-area',
  templateUrl: './navigation-area.component.html',
  styleUrls: ['./navigation-area.component.css'], 
  providers: [FileManagerComponent]
})
export class NavigationAreaComponent implements OnInit {

  tddState: number = 0; //turn this into a service
  constructor() { }

  ngOnInit() {
  }
}
