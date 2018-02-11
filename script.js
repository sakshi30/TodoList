// Code goes here

var todoList = 
{
  todos: [], 
  addTodoList: function()
  {
    var todo = document.getElementById('x_value');
    this.todos.push({
      todo : todo.value,
      completed: false
    });
    
    view.display();
    
  },
  changeTodoList:function(position, newValue)
  {
    //debugger;
    this.todos[position].todo = newValue;
    view.display();
  }, 
  deleteTodoList : function(position_del)
  {
    this.todos.splice(position_del, 1);
    view.display();
  }, 
  toggleCompleted : function()
  {
    var toggle_id = document.getElementById('toggle_id');
    var todo_a = this.todos[(toggle_id.valueAsNumber)-1];
    todo_a.completed = !todo_a.completed;
    view.display();
  },
  toggleAll:function()
  {
    count = 0;
    for (var i = 0; i < this.todos.length; i++)
    {
      if(this.todos[i].completed == true)
      {
        count += 1;
      }
    }
    if(count == this.todos.length){
      for(var j = 0; j < this.todos.length; j++){
        this.todos[j].completed = false;
      }
    }
    else{
      for(var j = 0; j < this.todos.length; j++){
        this.todos[j].completed = true;
      }
    }
    view.display();
  }
};

var view = {
  display :function(){
    var viewUl = document.querySelector('ul');
    viewUl.innerHTML = '';
    for(var i = 0; i< todoList.todos.length; i++){
      var viewli = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      if(todo.completed === true){
        todoTextWithCompletion = '(X) ' + todo.todo;
      }
      else{
        todoTextWithCompletion = '( ) ' + todo.todo;
      }
      viewli.id = i
      viewli.textContent = todoTextWithCompletion;
      viewli.appendChild(this.createDeleteButton());
      viewli.appendChild(this.createChangeOption());
      viewUl.appendChild(viewli);
      
    }
  }, 
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X' ;
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }, 
  createChangeOption: function(){
    var changeOption = document.createElement('button');
    changeOption.textContent = 'Change';
    changeOption.className = 'inputType';
    return changeOption;
  }
};

var deleteButtonQuery = document.querySelector('ul');
deleteButtonQuery.addEventListener('click', function(event){
  var element = event.target;
  if(element.className == 'deleteButton'){
    todoList.deleteTodoList(element.parentNode.id);
  }
});

var changeItem = document.querySelector('ul');
changeItem.addEventListener('click', function(event){
  var element = event.target;
  if(element.className == 'inputType'){
    var text = prompt();
    todoList.changeTodoList(element.parentNode.id, text);
  }
  
});


























