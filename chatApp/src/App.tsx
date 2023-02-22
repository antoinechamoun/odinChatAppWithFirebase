import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        {/* <Route path="/:id" element={<Body />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
