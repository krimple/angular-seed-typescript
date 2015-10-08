import { Component, View, bootstrap } from 'angular2/angular2';
import { TaskList } from './task-list';
import {HTTP_BINDINGS} from 'angular2/http';
import { TASK_SERVICE_BINDINGS } from './task-service';

// ode to webpack - rather than list file directly we let
// webpack detect a require and pull it in

@Component({
    selector: 'app'
})
@View({
    templateUrl: '/todo/app.html',
    directives: [TaskList]
})
export class TodoApp {

}

bootstrap(TodoApp, [HTTP_BINDINGS]);


