import { Component, View }  from 'angular2/angular2';
import { TaskModel } from './task-model';

@Component({
    selector: 'task-entry',
    properties: ['task']
})
@View({
    template: `
    <a href="#" class="list-group-item"
            ng-class="true">
        <div class="row">
            <div class="col-lg-1">
                <input type="checkbox"
                    ng-control="task.complete"
                       (click)="toggleComplete()">
            </div>
            <div class="col-lg-2">
                {{ task.priority }}
            </div>
            <div class="col-lg-5">
                {{ task.description }}
            </div>
            <div class="" col-lg="3">
                {{ task.dueDate}}
            </div>
        </div>
    </a>
`
})
export class TaskEntry {
    task: TaskModel;

    toggleComplete() {
        this.task.complete = !this.task.complete;
        if (this.task.complete) {
            this.task.completedDate = new Date();
            console.log('completed', this.task);
        } else {
            delete this.task.completedDate;
            console.log('un-completed', this.task);
        }
    }
}
