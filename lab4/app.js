const todoItems= require('./todo.js')
const connection = require("./mongoConnection.js");

const main = async() => {
    console.log("1.Creating First Task \n");
    const firstTask = await todoItems.createTask("Ponder Dinosaurs","Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log(firstTask);
    console.log("\nFirst Task Created\n");
    console.log("...............................................................................................................\n");

    console.log("2.Creating Second Task \n");
    const secondTask= await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    console.log(secondTask);
    console.log("\nSecond Task Created\n");
    console.log("...............................................................................................................\n");

    console.log("3.Printing all tasks after insertion \n");
    const getTasks=await todoItems.getAllTasks();
    console.log("\nAll the tasks are logged\n");
    console.log(getTasks);
    console.log("...............................................................................................................\n");

    console.log("4. Removing the first task");
    console.log("\nTask That is Going to be Removed\n",firstTask);
    await todoItems.removeTask(firstTask._id);
    console.log("...............................................................................................................\n");
    
    console.log("5.Printing tasks after deleting");
    const remainingTasks= await todoItems.getAllTasks();
    console.log(remainingTasks);
    console.log("Logging All The Tasks After Deletion of the Task that is going to be Removed\n");
    console.log("...............................................................................................................\n");

    console.log("6. Completing the remaining task");
    const completingTask = [];
    const completedTask = [];
    
  
    for(var i=0;i<remainingTasks.length;i++){
        completingTask[i]=remainingTasks[i];    
        completedTask[i]= await todoItems.completeTask(completingTask[i]._id);
       
    }
    
    console.log("Remaining tasks are \n"+completingTask.length);
    
    for(var i=0;i<remainingTasks.length;i++)
    {
        console.log(completingTask[i]);
    }
    console.log("...............................................................................................................\n");
    
    console.log("7.Tasks those are completed with the new value\n")  ;
    for(var i=0;i<remainingTasks.length;i++)
    {
        console.log(completedTask[i]);
    }
    
  
    const db =await connection();
    await db.close()
}
main();
