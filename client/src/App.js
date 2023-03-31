import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import StagesPage from "./pages/StagesPage/StagesPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectdetails" element={<StagesPage />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
