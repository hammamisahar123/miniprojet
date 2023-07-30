import Navbar from './components/Navbar';
import Home from './page/Home';
import Login from './page/Login';


function App() {
  return (
    <div className="bg-gray-400 min-h-screen">
      <Login />
      <Navbar />
      <Home />
    </div>
    

  );
}

export default App;
