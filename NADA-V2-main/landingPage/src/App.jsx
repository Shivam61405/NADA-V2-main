


import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Header";
import { LabHeader } from "./components/LabHeader";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import ContentPage from "./pages/ContentPage";
import InteractiveModulesPage from "./pages/InteractiveModulesPage";
import Module1 from "./pages/modules/Module1";
import Module2 from "./pages/modules/Module2";
import QuizPage from "./pages/QuizPage";
import ReportSection from "./pages/ReportSection";
import LabInfo from "./pages/LabInfo";
import AthleteProfile from "./pages/AthleteProfile";
import UploadReport from "./pages/UploadReport";
import About from './pages/About';
// import PerformanceChart from "./pages/performance";
function App() {
  const Layout = () => {
    const location = useLocation();
    const isLabRoute = location.pathname.startsWith("/lab");
    const hideFooterRoutes = ["/lab/athlete", "/lab/info", "/lab/upload"];

    return (
      <>
        {isLabRoute ? <LabHeader /> : <Header />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/lab/info" element={<LabInfo />} />
          <Route path="/lab/athlete" element={<AthleteProfile />} />
          <Route path="/lab/upload" element={<UploadReport />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/whistle" element={<ReportSection />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/modules" element={<InteractiveModulesPage />} />
          <Route path="/modules/module1" element={<Module1 />} />
          <Route path="/modules/module2" element={<Module2 />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/perform" element={<PerformanceChart/>} /> */}
        </Routes>
        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <main className="flex-grow">
          <Layout />
        </main>
      </Router>
    </div>
  );
}

export default App;

