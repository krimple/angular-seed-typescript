import { Component, View, Inject, CORE_DIRECTIVES} from 'angular2/angular2';
import { TaskEntry } from './task-entry';
import { TaskModel } from './task-model';
import { TaskService } from './task-service';
import {Observable} from '@reactivex/rxjs';

@Component({
    selector: 'task-list',
    bindings: [TaskService]
})
@View({
    templateUrl: '/todo/task-list.html',
    directives: [CORE_DIRECTIVES, TaskEntry]
})
export class TaskList {

  tasks: Array<TaskModel> = [];

    // todo - externalize
    constructor(private taskService: TaskService) {
        this.tasks = taskService.tasks;
    }
}


