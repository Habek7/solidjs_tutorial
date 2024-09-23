import styles from './App.module.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Counter2 from './Counter2';
import Login from './Login';

function App() {
  return (
  <>
    <div class={styles.App}>Dobar dan, svijete!</div>
    <MyComponent/>
    <Counter/>
    <Counter2/>
    <Login/>
  </>
  );
}

export default App;

