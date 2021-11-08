import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Greet name="Harish" college="IIT">
        <p> this is children property</p>
      </Greet>
      <Greet name="Kumar" college="Oxford" />
      <Greet name="Vijay" college="GITAM" />

      <Welcome />

    </div>
  );
}

export default App;