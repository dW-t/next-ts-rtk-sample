import React from 'react';
import { useAppSelector } from '../../app/hooks';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.task.tasks);
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
