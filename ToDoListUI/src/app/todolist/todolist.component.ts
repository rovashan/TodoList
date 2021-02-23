import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { ReturnStatement } from '@angular/compiler';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  newTodo: string;
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((data: Todo[]) => {
      console.log(data);
      this.todos = data;
    });
  }
  
  addTodo() {
    if (this.newTodo.trim().length == 0) {
      return;
    }

    this.todos.push({
      name: this.newTodo,
      isComplete: false
    });
  }

}
