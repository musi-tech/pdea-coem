import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Notifications from './pages/Notifications';


import Academics from './pages/Academics/Academics';
import CompEngg from './pages/Academics/Deapartment/ComputerEngineering';
import Eandtc from './pages/Academics/Deapartment/Eandtc';
import FirstYear from './pages/Academics/Deapartment/FirstYearEngineering';
import IT from './pages/Academics/Deapartment/InformationTechnology';
import InstruControl from './pages/Academics/Deapartment/InstrumentationandControl';
import MBA from './pages/Academics/Deapartment/MBA';
import MechEngg from './pages/Academics/Deapartment/MechanicalEngineering';

import Admission from './pages/Admission';
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Hostels from './pages/Hostels';
import Placements from './pages/Placements';
import Scholarship from './pages/Scholarship';
import Statistics from './pages/Statistics';

import IQAC from './pages/IQAC';
import OldIQAC from './pages/OldIQAC';

import Alumni from './pages/Alumni';

import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './Components/ProtectedRoute';

import GeneralFacultyPage from './pages/GeneralFacultyPage';
import OngoingResearch from './pages/OngoingResearch';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/statistic" element={<Statistics />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/computer-engineering" element={<CompEngg />} />
        <Route path="/eandtc" element={<Eandtc />} />
        <Route path="/first-year" element={<FirstYear />} />
        <Route path="/it" element={<IT />} />
        <Route path="/instrumentation-and-control" element={<InstruControl />} />
        <Route path="/mba" element={<MBA />} />
        <Route path="/mechanical-engineering" element={<MechEngg />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/oldiqac" element={<OldIQAC />} />
        <Route path="/alumni" element={<Alumni />} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<ProtectedRoute element={<AdminPanel />} />} />

        <Route path="/faculty" element={<GeneralFacultyPage />} /> 

        <Route path="/ongoingprojects" element={<OngoingResearch />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
