import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
   tasks=[];
   istyping = false;
  constructor() { }
  task = '';
  ngOnInit() {
  }
  addTask(){
    console.log(this.task);
    this.tasks.push(this.task)
  }

  TypeChecker(ev: CustomEvent) {
    const val = ev.detail.value;
   
    if (val && val.trim() !== '') {
     this.istyping =true;
    } 
    else {
      this.istyping =false;
    }
  }
  delete(i){
    this.tasks = this.tasks.filter(task => task !== this.tasks[i]);
  }
}
