import styles from './App.module.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Counter2 from './Counter2';
import Login from './Login';
import Flow from './Flow';
import Menu from './Menu';
import Dynamo from './Dynamo';

function App() {
  return (
  <>
    <div class={styles.App}>Dobar dan, svijete!</div>
    <MyComponent/>
    <Counter/>
    <Counter2/>
    <Login/>
    <Flow/>
    <Menu/>
    <Dynamo/>
  </>
  );
}

export default App;

