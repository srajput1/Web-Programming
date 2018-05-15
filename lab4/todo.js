const mongoCollections = require("./mongoCollection.js");
var uuid = require('node-uuid');
const todoItems = mongoCollections.todoItems;


module.exports ={
async getTask(id)
    {
       
        if (!id) throw "You must provide an id to search for";
        const todoItemsCollection =await todoItems();
        const item =await todoItemsCollection.findOne({_id: id});
        if(item === null) throw "No item with that id";
        return item;
        
    },

async getAllTasks()
    {
        const todoItemsCollection = await todoItems();
        const todoItem1 = await todoItemsCollection.find().toArray();
        return todoItem1;
    },
async createTask(title, description)
    {
        if (!title) throw "Enter the Valid Title";
        if (!description|| typeof description !== 'string')throw "Enter a valid descripition";
        const todoitemscollection = await todoItems();
        var newTask = 
        {
            _id:uuid.v4(),
            title: title,
            description: description,
            completed:false,
            completedAt:null
        };
        const newInsertInformation= await todoitemscollection.insertOne(newTask);
        if(newInsertInformation.insertedCount === 0) 
                throw "Could not add a new task";
        const nextId = newInsertInformation.insertedId;
        const item= await this.getTask(nextId);
        return item;

    },
async removeTask(id)
{
    if (!id) 
    throw "You must provide an id to search for";
    const todoitemscollection= await todoItems();
    const deletionInfo = await todoitemscollection.removeOne({_id: id});
    if (deletionInfo.deletedCount === 0) 
    {
        throw(`Could not delete task with id of ${id}`);
    }
},
async  completeTask(id){
    if (!id) throw "You must provide an id to search for";
    const todoitemscollection = await todoItems();
    var updateitem = {
        $set:{
            completed: true,
            completedAt: new Date()
        }
    };
    const updateinfo = await todoitemscollection.updateOne({ _id: id},updateitem);
    if(updateinfo.modifiedCount===0){
        throw "Cannot Find this item";
    }

    return this.getTask(id); 
}

};
    
