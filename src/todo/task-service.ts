import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {TaskModel} from './task-model';
import {HTTP_BINDINGS} from 'angular2/http';
import * as Rx from 'rx';

@Injectable()
export class TaskService {

    public tasks:Array<TaskModel>;

    constructor(private http:Http) {
        this.tasks = [];
        this.fetchTasks();
    }

    fetchTasks() {
        this.http.get('/todo/data/todos.data.json')
            .map((res) => {
                return res.json();
            })
            .map((tasks) => {
                if (tasks) {
                    let result:Array<TaskModel> = [];

                    tasks.forEach((task) => {
                        // obviously not complete - need checks for nulls, etc...

                        result.push(TaskModel.fromJson(task.description, task.priority, task.dueDate, task.complete));
                    });
                    return result;
                }
            })
            .subscribe((tasks:Array<TaskModel>) => {
                console.log('Tasks!', tasks);
                this.tasks = tasks;
            });
    }
}

// make available to injector for bindings
export var TASK_SERVICE_BINDINGS:Array<any> = [
    TaskService
];
