import { HashRouter, Route, Routes } from "react-router-dom";
import team from "./data/team";
import "./App.scss";
import TicketCardsContainer from "./components/TicketCardsContainer/TicketCardsContainer";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

HashRouter;
function App() {
  return (
    <HashRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home team={team} />} />
          <Route
            path="/tickets"
            element={<TicketCardsContainer team={team} />}
          />
          <Route path="/profile/:id" element={<Profile team={team} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
