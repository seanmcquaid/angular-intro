import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Todo from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

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
    // toggle in UI
    this.todo.completed = !this.todo.completed;
    // toggle in server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo): void{
    this.deleteTodo.emit(todo);
  }

}
