import { Component, OnInit } from '@angular/core';
import Todo from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  // similar to component did mount in react
  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'TO DO 1',
        completed: false,
      },
      {
        id: 2,
        title: 'TO DO 2',
        completed: true,
      },
      {
        id: 3,
        title: 'TO DO 3',
        completed: false,
      }
    ];
  }

}
