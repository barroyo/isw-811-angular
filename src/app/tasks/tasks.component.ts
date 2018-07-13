import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../lib/task';

import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() title: string;
  tasks: Task[];

  constructor(private taskService: TaskService) {

  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(taskResponse => this.tasks = taskResponse);
  }

  ngOnInit() {
    this.getTasks();
  }

}
