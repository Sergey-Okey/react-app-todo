import React, { useMemo } from 'react';
import '../App.css';

const TodoList = ({ todos, onAddTodo, onToggleStatus }) => {
	const renderedList = useMemo(() => {
		return todos.map(todo => (
			<div key={todo.title}>
				<span>{todo.title}</span>
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => onToggleStatus(todo.title)}
				/>
			</div>
		));
	}, [todos, onToggleStatus]);

	return (
		<div>
			{renderedList}
			<button onClick={onAddTodo}>Добавить задачу</button>
		</div>
	);
};

export default TodoList;
