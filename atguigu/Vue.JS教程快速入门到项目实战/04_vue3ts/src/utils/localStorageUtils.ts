import { ITodo } from '../types/ITodo';

export function saveTodos(todos: ITodo[]): void {
  localStorage.setItem('todos_key', JSON.stringify(todos));
}

export function readTodos(): ITodo[] {
  return JSON.parse(localStorage.getItem('todos_key') || '[]');
}
