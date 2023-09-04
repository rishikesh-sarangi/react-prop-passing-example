import "./App.css";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory";

function App() {
  return (
    <>
      <main className="h-full bg-yellow-50">
        <section className="min-h-screen">
          <Header />
          <Inventory />
        </section>
      </main>
    </>
  );
}

export default App;
