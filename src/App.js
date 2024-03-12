import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Input from "./components/input";
import { nav } from "./data/nav";
import { inputData } from "./data/inputData";
function App() {
  return (
    <div className="App">
      <Header navigation={nav} />
      <Input inputData={inputData} />
      <Footer navigation={nav} />
    </div>
  );
}

export default App;
