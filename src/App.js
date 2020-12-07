// const { default: HomePage } = require("./pages/home"); //or
// import AboutPage from './pages/about';
// import ContactPage from './pages/contact';
// import HomePage from './pages/home';
// import LoopPage from './pages/loop';
import ToDoListPage from './pages/todolist';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <AboutPage/>
      <ContactPage/> */}
      {/* <LoopPage/> */}
      <ToDoListPage/>
    </div>
  );
}

export default App;
