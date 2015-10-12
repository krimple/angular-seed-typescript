import { Injectable } from 'angular2/angular2';

// the model object
//@Injectable
export class TaskModel {
    description: string;
    priority: number;
    dueDate: Date;
    complete: boolean;
    completedDate: Date;
    constructor(description: string, priority: number, dueDate: Date, complete: boolean) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.complete = complete;
    }

    static fromJson(description: string, priority: string, dueDate: string, complete: string) {
        let npriority = Number.parseInt(priority);
        let ddueDate = new Date(dueDate);
        let bcomplete = new Boolean(complete).valueOf();
        let taskModel = new TaskModel(description, npriority, ddueDate, bcomplete)
        return taskModel;
    }
}
