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
                return TaskModel;
            })();
            exports_1("TaskModel", TaskModel);
        }
    }
});
