import { Component } from '@angular/core';
import { random } from 'lodash';

//declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = "Maximilian";
  rootItems = ["Apples", "Bananas", "Cherries"];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onItemAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
    console.log(random(1, 10));
  }
}
