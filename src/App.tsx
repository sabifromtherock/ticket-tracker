import { BrowserRouter, Route, Routes } from "react-router-dom";
import team from "./data/team";
import "./App.scss";
import TicketCardsContainer from "./components/TicketCardsContainer/TicketCardsContainer";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/ticket-tracker" element={<Home team={team} />} />
          <Route
            path="/ticket-tracker/tickets"
            element={<TicketCardsContainer team={team} />}
          />
          <Route
            path="/ticket-tracker/profile/:id"
            element={<Profile team={team} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
