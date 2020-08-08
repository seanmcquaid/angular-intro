import { Component, OnInit, Input } from '@angular/core';
import Todo from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(): {todo: boolean, 'is-complete': boolean} {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo): void{
    this.todo.completed = !this.todo.completed;
  }

  onDelete(todo): void{

  }

}
