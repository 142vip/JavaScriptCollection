/**
 * MVC模式
 * - ts版本
 */

// 模型（Model）
interface Todo {
  id: number
  title: string
  completed: boolean
}

class TodoModel {
  private todos: Todo[] = []

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  getTodos() {
    return this.todos
  }

  updateTodoStatus(id: number, completed: boolean) {
    const todo = this.todos.find(todo => todo.id === id)
    if (todo) {
      todo.completed = completed
    }
  }
}

// 视图（View）
class TodoView {
  render(todos: Todo[]) {
    console.log('Todo List:')
    todos.forEach((todo) => {
      console.log(`[${todo.completed ? 'x' : ' '}] ${todo.title}`)
    })
  }
}

// 控制器（Controller）
class TodoController {
  private model: TodoModel
  private view: TodoView

  constructor(model: TodoModel, view: TodoView) {
    this.model = model
    this.view = view
  }

  addTodoToModel(todo: Todo) {
    this.model.addTodo(todo)
  }

  updateTodoStatusInModel(id: number, completed: boolean) {
    this.model.updateTodoStatus(id, completed)
  }

  updateView() {
    const todos = this.model.getTodos()
    this.view.render(todos)
  }
}

// 使用示例
const model = new TodoModel()
const view = new TodoView()
const controller = new TodoController(model, view)

// 添加新任务
const todo1: Todo = { id: 1, title: 'Learn TypeScript', completed: false }
const todo2: Todo = { id: 2, title: 'Write Code', completed: true }

controller.addTodoToModel(todo1)
controller.addTodoToModel(todo2)

// 更新任务状态
controller.updateTodoStatusInModel(1, true)

// 更新视图
controller.updateView()
