import React, { useState } from 'react';
import { newTask } from './taskSlice';
import { useAppDispatch } from '../../app/hooks';

const TaskInput = () => {
  const dispatch = useAppDispatch();
  const [editTitle, setEditTitle] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={editTitle}
        onChange={handleTitleChange}
        placeholder='Please type in'
      />
      <button>NEW</button>
    </form>
  );
};

export default TaskInput;
