import type { NextPage } from 'next'
import Counter from "./counter/Counter";

const Home: NextPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default Home
