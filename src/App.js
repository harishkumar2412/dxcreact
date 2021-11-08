import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">

      <Counter />

      <Message />

      <Greet name="Harish" college="IIT">
        <p> this is children property</p>
      </Greet>

      <Greet name="Kumar" college="Oxford">
        <button>click me</button>
      </Greet>
      <Greet />

      <Welcome name="Vijay" alias="Deverakonda" />

    </div>
  );
}

export default App;