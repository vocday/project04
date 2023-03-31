import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import StagesPage from "./pages/StagesPage/StagesPage";
import { Signup } from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./components/Signin/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectdetails" element={<StagesPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
