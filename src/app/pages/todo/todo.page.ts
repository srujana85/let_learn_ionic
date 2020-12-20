import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
note ='';
   public todos: Array<Todo> = [];
  constructor(public todoService: TodoService) {}

  async ngOnInit(){

    this.todos = await this.todoService.read();
    console.log(this.todos);

  }
  getIcon(todo){
    if(todo.completed) return 'checkmark-circle';
    else return 'stopwatch';
  }
  public async createTodo(){
    let key = await this.todoService.generateKey();
    
    let todo = {
      title: `${key}`,
      note: this.note,
      completed: true
    };
    console.log(todo);
    await this.todoService.create(key,todo);
    this.todos = await this.todoService.read();
  }
 async delete(key){
    this.todoService.delete(key);
    this.todos = await this.todoService.read();
    console.log(this.todos);
  }

}
