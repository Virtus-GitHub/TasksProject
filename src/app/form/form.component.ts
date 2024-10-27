import { Component } from '@angular/core';
import { Task } from '../Models/task.model';
import { FormsModule } from '@angular/forms';
import { AddTaskService } from '../Services/add-Task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  descriptionInput: string = '';
  nameInput: string = '';

  constructor(private taskService: AddTaskService, private router: Router){}

  addTask(event: Event){
    event.preventDefault();
    
    if(this.descriptionInput.trim() === '')
      return;

    const task = new Task(0, this.nameInput, this.descriptionInput, '', false);

    this.taskService.addTask(task);

    //clean form
    this.descriptionInput = '';

    //Redirect to List
    this.router.navigate(['/'])
  }

  cancel(){
    //Redirect to List
    this.router.navigate(['/'])
  }
}
