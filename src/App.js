import React, { useState, useCallback, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import './App.css';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const modalRef = useRef(null);

	useEffect(() => {
		modalRef.current = document.getElementById('modal');
	}, []);

	const handleAddTodo = useCallback(title => {
		setTodos(prevTodos => [...prevTodos, { title, completed: false }]);
	}, []);

	const handleToggleStatus = useCallback(title => {
		setTodos(prevTodos =>
			prevTodos.map(todo =>
				todo.title === title ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}, []);

	const handleOpenModal = useCallback(() => {
		setIsModalOpen(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	return (
		<div>
			<TodoList todos={todos} onAddTodo={handleOpenModal} onToggleStatus={handleToggleStatus} />
			<AddTodoModal isOpen={isModalOpen} onClose={handleCloseModal} onAddTodo={handleAddTodo} />
			<div id="modal" ref={modalRef}></div>
		</div>
	);
};

export default App;
