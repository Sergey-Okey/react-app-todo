import React, { useState, useCallback } from 'react';
import '../App.css';

const AddTodoModal = ({ isOpen, onClose, onAddTodo }) => {
	const [newTodo, setNewTodo] = useState('');

	const handleAddTodo = useCallback(() => {
		onAddTodo(newTodo);
		setNewTodo('');
		onClose();
	}, [newTodo, onAddTodo, onClose]);

	return (
		<div style={{ display: isOpen ? 'block' : 'none' }}>
			<input
				type="text"
				placeholder="Введите название задачи"
				value={newTodo}
				onChange={e => setNewTodo(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Добавить</button>
			<button onClick={onClose}>Отмена</button>
		</div>
	);
};

export default AddTodoModal;
