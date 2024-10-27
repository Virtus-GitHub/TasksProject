import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class GetTaskService {
  url = 'https://671e35bf1dfc429919819969.mockapi.io/api/TaskList/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.url);
  }
}
