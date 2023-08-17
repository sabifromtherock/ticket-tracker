import { BrowserRouter, Route, Routes } from "react-router-dom";
import team from "./data/team";
import profilePicture from "./assets/images/profile-picture.png";
import "./App.scss";
import TicketCardsContainer from "./components/TicketCardsContainer/TicketCardsContainer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home team={team} profilePicture={profilePicture} />}
          />
          <Route
            path="/tickets"
            element={
              <TicketCardsContainer
                team={team}
                profilePicture={profilePicture}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
