


import React  from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EventComponent from './TASK/EventComponent';
import TeacherComponent from './TASK/TeacherComponent';
import StudentComponent from './TASK/StudentComponent';
import MilestoneComponent from './TASK/MilestoneComponent';
import Navbar from "./TASK/Navbar.jsx";
import { Widgets } from './TASK/Widgets.jsx';

import AdmissionRateChart from './TASK/AdmissionRateChart';
import StudentPerformanceChart from './TASK/StudentPerformanceChart';
import GraduationRateChart from './TASK/GraduationRateChart';


//

// export default App;
function App() {

  return (
    
  <div>
  <Navbar/>
  
<Router>
    

      <Routes>
      <Route path="/" element={<Widgets/>} />
        <Route path="/events" element={<EventComponent/>} />
        <Route path="/teachers"element={<TeacherComponent/>} />
        <Route path="/students" element={<StudentComponent/>} />
        <Route path="/milestones" elementt={<MilestoneComponent />} />
        </Routes>

    </Router>
    <AdmissionRateChart />
  <StudentPerformanceChart />
  <GraduationRateChart />
    
</div>
  );
}

export default App;

