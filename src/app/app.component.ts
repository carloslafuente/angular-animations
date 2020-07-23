import { Component } from '@angular/core';
import { fadeFromTop, fadeFromRight } from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeFromTop,
    fadeFromRight
  ],
})
export class AppComponent {
  title: string = 'To do list';

  list: any[] = [
    {
      content: 'Make dinner',
    },
    {
      content: 'Walk the dog',
    },
    {
      content: 'Do math homework',
    },
  ];

  newTask: any = {
    content: '',
  };

  addNewTask() {
    let task = { ...this.newTask };
    this.list.push(task);
  }

  removeTask(item) {
    this.list = this.list.filter((task) => {
      return task !== item;
    });
  }
}
