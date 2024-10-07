import styles from './App.module.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Counter2 from './Counter2';
import Login from './Login';
import Flow from './Flow';
import Menu from './Menu';
import Dynamo from './Dynamo';
import Events from './Events';
import Styles from './Styles';
import Refs from './Refs';

function App() {
  return (
  <>
    <div class={styles.App}>Dobar dan, svijete!</div>
    <Events/>
    <Styles/>
    <Refs/>
  </>
  );
}

export default App;

