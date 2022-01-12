import type { NextPage } from 'next';
import Counter from './counter/Counter';
import TaskList from './task/TaskList';
import TaskInput from './task/TaskInput';
import styles from '../styles/index.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <header className='App-header'>
        <Counter />
        <TaskInput />
        <TaskList />
      </header>
    </div>
  );
};

export default Home;
