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

  // getTasks(): Observable<Task[]> {
  //   return of([
  //     {
  //       name: 'Tarea desde Servicio 1',
  //       id: '1'
  //     },
  //     {
  //       name: 'Tarea 2',
  //       id: '2'
  //     },
  //     {
  //       name: 'Tarea 3',
  //       id: '3'
  //     },
  //   ]);
  // }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }
}
