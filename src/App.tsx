import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaDove, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

import Home from "./pages/Home";
import "./assets/css/global.css";

function App() {
  return (
    <>
      <header className="flex items-center w-full p-5 justify-between">
        <h2 className="text-2xl">sadnawale</h2>
        <nav className="w-[40%] md:w-[15%] flex items-center justify-between">
          <a
            href="/"
            className="p-1 rounded bg-[#444] hover:bg-[#555] font-bold drop-shadow-lg"
          >
            home
          </a>
          <a
            href="#about"
            className="p-1 rounded bg-[#444] hover:bg-[#555] font-bold drop-shadow-lg"
          >
            about
          </a>
          <a
            href="#contact"
            className="p-1 rounded bg-[#444] hover:bg-[#555] font-bold drop-shadow-lg"
          >
            contact
          </a>
        </nav>
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      <footer className="flex items-center flex-col md:flex-row gap-8 w-full p-5 justify-between border-t">
        <div className="w-full  md:w-[40%]">
          <h2 className="text-2xl mb-2">crysadnawale</h2>
          <p className="text-sm">
            Looking to start but dont know how, this is the place to get any
            updates or even email notifcations.
          </p>

          <nav className="flex items-center flex-col md:flex-row  gap-4 mt-3">
            <a
              href="/"
              className="text-sm text-emerald-500 bg-[#111] hover:bg-[#444] flex gap-4 items-center p-2 drop-shadow-lg rounded"
            >
              <FaDove />
              <span>@cryptonapwhale</span>
            </a>

            <a
              href="/"
              className="text-sm text-emerald-500 bg-[#111] hover:bg-[#444] flex gap-4 items-center p-2 drop-shadow-lg rounded"
            >
              <FaFacebookSquare />
              <span>@cryptonapwhale</span>
            </a>

            <a
              href="/"
              className="text-sm text-emerald-500 bg-[#111] hover:bg-[#444] flex gap-4 items-center p-2 drop-shadow-lg rounded"
            >
              <FaGithubSquare />
              <span>@crispysandwhich</span>
            </a>
          </nav>
        </div>

        <nav className="w-full w-[10%] bg-[#444] p-2 rounded drop-shadow-lg">
          <h2 className="text-xl mb-2 text-center bold uppercase">Links</h2>
          <div className="flex items-center justify-between flex-col gap-4">
            <a
              href="/"
              className="p-1 rounded bg-[#111] hover:bg-[#555] font-bold drop-shadow-lg"
            >
              home
            </a>
            <a
              href="#about"
              className="p-1 rounded bg-[#111] hover:bg-[#555] font-bold drop-shadow-lg"
            >
              about
            </a>
            <a
              href="#contact"
              className="p-1 rounded bg-[#111] hover:bg-[#555] font-bold drop-shadow-lg"
            >
              contact
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default App;
