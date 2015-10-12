System.register(['angular2/angular2', './date-pipe'], function(exports_1) {
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
    var angular2_1, date_pipe_1;
    var TaskEntry;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (date_pipe_1_1) {
                date_pipe_1 = date_pipe_1_1;
            }],
        execute: function() {
            TaskEntry = (function () {
                function TaskEntry() {
                }
                TaskEntry.prototype.toggleComplete = function () {
                    this.task.complete = !this.task.complete;
                    if (this.task.complete) {
                        this.task.completedDate = new Date();
                        console.log('completed', this.task);
                    }
                    else {
                        delete this.task.completedDate;
                        console.log('un-completed', this.task);
                    }
                };
                TaskEntry = __decorate([
                    angular2_1.Component({
                        selector: 'task-entry',
                        properties: ['task']
                    }),
                    angular2_1.View({
                        template: "\n    <a href=\"#\" class=\"list-group-item\" ng-class=\"true\">\n        <div class=\"row\">\n            <div class=\"col-lg-1\">\n                <input type=\"checkbox\"\n                    ng-control=\"task.complete\"\n                       (click)=\"toggleComplete()\">\n            </div>\n            <div class=\"col-lg-2\">\n                {{ task.priority | number:'.2-4' }}\n            </div>\n            <div class=\"col-lg-5\">\n                {{ task.description }}\n            </div>\n            <div class=\"\" col-lg=\"3\">\n                {{ task.dueDate | localeDate }}\n            </div>\n        </div>\n    </a>\n",
                        pipes: [date_pipe_1.LocaleDate]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskEntry);
                return TaskEntry;
            })();
            exports_1("TaskEntry", TaskEntry);
        }
    }
});
