import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from 'c:/Users/pc/Desktop/FullStack Java - Ranga/Front End/ToDo/src/app/list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!: number;
  todo!: Todo;
  // todo!: import("c:/Users/pc/Desktop/FullStack Java - Ranga/Front End/ToDo/src/app/list-todos/list-todos.component").Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('pvsnpexchange', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('pvsnpexchange', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    }
    else {

      this.todoService.updateTodo('pvsnpexchange', this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    }

  }
}
