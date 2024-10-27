import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { FormComponent } from './form/form.component';
import { ErrorComponent } from './Error/error/error.component';

export const routes: Routes = [
    {path: '', component: TaskListComponent},
    {path: 'list', component: TaskListComponent},
    {path: 'add', component: FormComponent},
    {path: 'edit: id', component: FormComponent},
    {path: '**', component: ErrorComponent}
];
