import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Don't List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let task of tasks">{{task.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string ='Angular Homework';
  currentDate = new Date();
  month: number = this.currentDate.getMonth() + 1;
  day: number = this.currentDate.getDate();
  year: number = this.currentDate.getFullYear();
  tasks: Task[]= [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Make to dont list spin and flash'),
    new Task('Think about flying to Kyoto')
  ];
}

export class Task {
  done: boolean = false;
  constructor(public description: string){};
}
