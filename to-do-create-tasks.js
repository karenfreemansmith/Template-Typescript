/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks.push(new ToDoList.HobbyTask("Practice origami"));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update website", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling", "Low", people.loki));
console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
//# sourceMappingURL=to-do-create-tasks.js.map