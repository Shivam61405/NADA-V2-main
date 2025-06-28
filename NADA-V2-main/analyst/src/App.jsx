import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import CaseList from "./pages/CaseList";
import AthleteInformation from "./pages/AthleteInformation";
import AthletesReport from "./pages/AthletesReport";
import AthleteProfile2 from "./pages/AthleteProfile2"; // Import AthleteProfile2 component
import DataBase from "./pages/DataBase";
import ABP from "./pages/ABP";
import InvestigatorPanel from "./pages/InvestigatorPanel";
import Settings from "./pages/Settings";
import RegistrationTestingPanel from "./pages/RegistrationTestingPanel";
import ReportSection from "./pages/ReportSection";
import AppSetting from "./pages/AppSetting";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ 
  flex: 1, 
  padding: "16px", 
  marginLeft: "160px", // Match this to the sidebar width
  overflow: 'auto', 
  backgroundColor: "#f0f2f5" 
}}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/data-base" element={<DataBase />} />
            <Route path="/abp" element={<ABP />} />
            <Route path="/athlete-information" element={<AthleteInformation />} />
            <Route path="/athletes-report" element={<AthletesReport />} />
            <Route path="/athlete-profile2" element={<AthleteProfile2 />} /> {/* Add route for AthleteProfile2 */}
            <Route path="/caselist" element={<CaseList />} />
            <Route path="/investigator-panel" element={<InvestigatorPanel />} />
            <Route path="/settings" element={<Settings />}>
              <Route path="registration-testing-panel" element={<RegistrationTestingPanel />} />
              <Route path="report-section" element={<ReportSection />} />
              <Route path="app-settings" element={<AppSetting />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;