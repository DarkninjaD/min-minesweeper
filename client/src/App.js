import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  GamePage,
  LoginPage,
  ProfilePage,
  LeaderBoardPage,
  ErrorPage,
} from "./pages";

function App() {
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
