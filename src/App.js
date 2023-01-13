import './App.css';
import TempratureComponent from './components/TempratureComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import RegisterForm from './components/RegisterForm';
import RegWithFormValidation from './components/RegWithFormValidation';
import RegValWithFunctionalComp from './components/RegValWithFunctionalComp';
import Quiz from './components/Quiz';
import Todolist from './components/TodoApp/Todolist';
import TodoListWrap from './components/TodoApp';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  console.log("app")
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/first' element={<FirstComponent />} />
          <Route exact path='/second' element={<SecondComponent />} />
          <Route exact path='/third' element={<ThirdComponent />} />
          <Route exact path='/Temp' element={<TempratureComponent />} />
          <Route exact path='/register' element={<RegisterForm />} />
          <Route exact path='/form-validation' element={<RegWithFormValidation />} />
          <Route exact path='/func-form-val' element={<RegValWithFunctionalComp />} />
          <Route exact path='/quiz' element={<Quiz />} />
          <Route exact path='/' element={<TodoListWrap />} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
