System.register(['angular2/angular2', './task-entry', './task-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, task_entry_1, task_service_1;
    var TaskList;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (task_entry_1_1) {
                task_entry_1 = task_entry_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            TaskList = (function () {
                function TaskList(taskService) {
                    this.taskService = taskService;
                    this.tasks = [];
                    this.tasks = taskService.tasks;
                }
                TaskList = __decorate([
                    angular2_1.Component({
                        selector: 'task-list',
                        bindings: [task_service_1.TaskService]
                    }),
                    angular2_1.View({
                        templateUrl: '/todo/task-list.html',
                        directives: [angular2_1.CORE_DIRECTIVES, task_entry_1.TaskEntry]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], TaskList);
                return TaskList;
            })();
            exports_1("TaskList", TaskList);
        }
    }
});
