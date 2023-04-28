const Task = require('../models/taskModel')

//get all Task
const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }
    catch(err){
        res.status(500).json({err})
    }
}

// Create Task
const createTasks = async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task});
    }
    catch (err){
        res.status(500).json({err});
    }
}

//get specific task
const getTasks = async (req, res) => {
    try{
        // const task = await Task.findById(req.params.id)
        // if(!task){
        //     res.status(400);
        //     throw new Error("Cannot find any task")
        // }
        // res.status(200).json(task);

        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }

        res.status(200).json({ task })
    }
    catch(err){
        res.status(500).json({err});
    }
}

//update task
const updateTask = async (req, res) => {
    try{
        // const {id:taskID} = req.params;
        // const task = await Task.findOneAndUpdate({id:taskID}, req.body, {new: true});
        // if(!task){
        //     res.status(404);
        //     throw new Error("Cannot find any task")
        // }
        // res.status(200).json(task);

        // const task = await Task.findById(req.params.id);
        // if(!task){
        //     res.status(404);
        //     throw new Error("Task not found")
        // }

        // const updateTask = await Task.findByIdAndUpdate(
        //     req.params.id,
        //     req.body,
        //     {new: true}
        // );
        // res.status(200).json(updateTask);

        const { id: taskID } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })

        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }

        res.status(200).json({ task }) 
    }
    catch(err){
        res.status(500).json(err);
    }
}

//delete task
const deleteTasks = async (req, res) => {
    try{
        // const removeTask = await Task.remove({_id: req.params.id})
        // res.status(200).json(removeTask);

        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
          return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task })
    }
    catch(err){
        res.status(500).json({err});
    }
}

module.exports = {getAllTasks, createTasks, getTasks, updateTask, deleteTasks}