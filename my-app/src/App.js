import Pages from "./Pages/Pages";
import Searched from "./Components/Searched";
import NewNav from "./Components/NewNav";

function App() {
  return (

    <div className='App'>
      <NewNav/>
      <Searched/>
      <Pages/>
    </div>
  );
}
export default App;
