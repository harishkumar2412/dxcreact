import logo from './logo.svg';
import './App.css';
import FocusInput from './components/refs/FocusInput';
import Input from './components/refs/Input';

import RefsDemo from './components/RefsDemo';


function App() {
  return (
    <div className="App">
    <RefsDemo/>
      <FocusInput/>
    </div>
  );
}
export default App;