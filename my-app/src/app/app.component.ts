import { Component } from '@angular/core';
import { NameClickedEvent } from 'stencil-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  //nameClicked($event: any) { // works
  nameClicked($event: CustomEvent<NameClickedEvent>) { // fail
    console.log($event);
  }
}
