
import Body from './Body/Body';
import Main from './Main.js/Main';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <Navbar/>
      {/* <Sidebar /> */}
      <Body />
    </div>
  );
}

export default App;
