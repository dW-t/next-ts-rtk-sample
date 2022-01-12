import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { completeTask, deleteTask } from './taskSlice';
import { Task } from './Type';

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <input
        type='checkbox'
        onClick={() => dispatch(completeTask(task.id))}
        defaultChecked={task.completed}
      />
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>DELETE</button>
    </div>
  );
};

export default TaskItem;
