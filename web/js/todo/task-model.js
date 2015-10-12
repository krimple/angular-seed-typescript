System.register([], function(exports_1) {
    var TaskModel;
    return {
        setters:[],
        execute: function() {
            TaskModel = (function () {
                function TaskModel(description, priority, dueDate, complete) {
                    this.description = description;
                    this.priority = priority;
                    this.dueDate = dueDate;
                    this.complete = complete;
                }
                TaskModel.fromJson = function (description, priority, dueDate, complete) {
                    var npriority = Number.parseInt(priority);
                    var ddueDate = new Date(dueDate);
                    var bcomplete = new Boolean(complete).valueOf();
                    var taskModel = new TaskModel(description, npriority, ddueDate, bcomplete);
                    return taskModel;
                };
                return TaskModel;
            })();
            exports_1("TaskModel", TaskModel);
        }
    }
});
