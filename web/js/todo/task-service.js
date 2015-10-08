System.register(['angular2/angular2', 'angular2/http', './task-model'], function(exports_1) {
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
    var angular2_1, http_1, task_model_1;
    var TaskService, TASK_SERVICE_BINDINGS;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (task_model_1_1) {
                task_model_1 = task_model_1_1;
            }],
        execute: function() {
            TaskService = (function () {
                function TaskService(http) {
                    var _this = this;
                    this.http = http;
                    this.tasks = [];
                    this.http.get('/todo/data/todos.data.json')
                        .map(function (res) {
                        return res.json();
                    })
                        .map(function (tasks) {
                        if (tasks) {
                            var result = [];
                            tasks.forEach(function (task) {
                                result.push(task);
                            });
                            return result;
                        }
                        console.log(task);
                        new task_model_1.TaskModel(task.description, task.priority, task.dueDate, task.complete);
                    })
                        .subscribe(function (tasks) {
                        console.log('Tasks!', tasks);
                        _this.tasks = tasks;
                    });
                }
                TaskService = __decorate([
                    angular2_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TaskService);
                return TaskService;
            })();
            exports_1("TaskService", TaskService);
            exports_1("TASK_SERVICE_BINDINGS", TASK_SERVICE_BINDINGS = [
                TaskService
            ]);
        }
    }
});
