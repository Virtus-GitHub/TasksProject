import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Task } from '../Models/task.model';
import { FormsModule } from '@angular/forms';
import { FormComponent } from "../form/form.component";
import { AddTaskService } from '../Services/add-Task.service';
import { Router } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { GetTaskService } from '../Services/get-task.service';
import { UpdateLocalStorageService } from '../Services/update-local-storage.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, FormsModule, FormComponent, CommonModule, TooltipModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private getTaskService: GetTaskService, private router: Router, private updateLocalStorageService: UpdateLocalStorageService){}

  ngOnInit(){
    //Initialize Tasks
    if(localStorage.length === 0){
      this.getTaskService.getTasks().pipe(
        catchError(error => {
          console.log('Error: ', error);
          this.router.navigate(['error']);

          return throwError(() => new Error('Oops! Something went wrong. Please try again later.'));
        })
      ).subscribe((tasks: Task[]) => {
        this.tasks = tasks;
        this.updateLocalStorageService.updateLocalStorage(tasks);
      });
    }
    else{
      let tasks: any = localStorage.getItem('tasksList');
      this.tasks = JSON.parse(tasks);
    }
  }

  addTask(){
    this.router.navigate(['add']);
  }

  editTask(task: Task) {
    let idx: number = this.tasks.findIndex(t => t.id === task.id);
    let selectedTask: Task = this.tasks[idx];
    selectedTask.completed = true;

    this.tasks[idx] = selectedTask;

    this.updateLocalStorageService.updateLocalStorage(this.tasks);
  }
}
