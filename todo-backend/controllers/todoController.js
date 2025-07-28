const Todo = require('../models/todomodel');

exports.createTodo = async (req, res) => {
try {
      const { title, description, dueDate } = req.body;
      
      if (!title || !description || !dueDate) {
        return res.status(400).json({ error: 'todo is required' });
      }
    
      const newTodo = new Todo({ title, description, dueDate });
      const savedTodo = await newTodo.save();
      res.status(201).json(savedTodo);
} catch (error) {
    res.status(500).json({message: "Server error"})
}
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.json(todos);
  } catch (error) {
    res.status(500).json({message: "Server error"})
    
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
  
    res.json({ message: 'Todo removed' });
  } catch (error) {
    res.status(500).json({message: "Server error"})
    
  }
};