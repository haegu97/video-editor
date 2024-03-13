import "./App.css";
import VideoEditor from "./pages/VideoEditor/VideoEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/VideoEditor/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/video-editor" element={<VideoEditor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
