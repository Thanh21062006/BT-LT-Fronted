    const todoInput = document.getElementById("todo-input");
      const addTodoButton = document.getElementById("add-todo");
      const todoList = document.getElementById("todo-list");

      // Load todos from localStorage
      const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.forEach((todo) => addTodoToDOM(todo));
      };

      // Save todos to localStorage
      const saveTodos = () => {
        const todos = Array.from(todoList.children).map(
          (item) => item.querySelector(".todo-text").textContent
        );
        localStorage.setItem("todos", JSON.stringify(todos));
      };

      // Add a todo to the DOM
      const addTodoToDOM = (todoText) => {
        const li = document.createElement("li");
        li.className = "todo-item";

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todoText;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
          li.remove();
          saveTodos();
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
      };

      // Add a new todo
      addTodoButton.addEventListener("click", () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
          addTodoToDOM(todoText);
          saveTodos();
          todoInput.value = "";
        }
      });

      // Initialize the app
      loadTodos();