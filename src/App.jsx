import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import People from "./pages/People";
import More from "./pages/More";
import Footer from "./components/Footer";

import Policython from './pages/Policython';
import DRP from './pages/DRP';
import RFP from './pages/RFP';
import BuddyProgram from './pages/BuddyProgram';
import ReviewJournal from './pages/ReviewJournal';

function App() {
  return (
    <Router basename="/recons_website">
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/people" element={<People />} />
            <Route path="/more" element={<More />} />
            <Route path="/policython" element={<Policython />} />
            <Route path="/drp" element={<DRP />} />
            <Route path="/rfp" element={<RFP />} />
            <Route path="/bp" element={<BuddyProgram />} />
            <Route path="/rj" element={<ReviewJournal />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;