import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Task } from '../lib/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'http://localhost:3000/api/tasks';  // URL to web api


  constructor(private http: HttpClient) {
  }

  // getTasks(): Task[] {
  //   return [
  //     {
  //       title: 'Tarea desde Servicio 1',
  //       _id: '1'
  //     },
  //     {
  //       title: 'Tarea desde Servicio 2',
  //       _id: '2'
  //     },
  //     {
  //       title: 'Tarea 3',
  //       _id: '3'
  //     },
  //   ];
  // }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  createTasks(task: Task): Observable<Object> {
    return this.http.post(this.tasksUrl, task );
  }
}
