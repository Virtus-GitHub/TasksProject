import { Injectable } from '@angular/core';
import { Task } from '../Models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateLocalStorageService {

  constructor() { }

  updateLocalStorage(taskList: Task[]){
    localStorage.setItem('tasksList', JSON.stringify(taskList));
  }
}
