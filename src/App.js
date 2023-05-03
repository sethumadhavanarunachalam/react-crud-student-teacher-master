import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login/Login';
import Student from './components/Student/Student';
import Portal from "./components/Portal/Portal"
import { useState } from 'react';
import Mentor from './components/Teacher/Mentor';
import MentorView from './components/Teacher/MentorView';
import StudentView from './components/Student/StudentView';
import AdmissionForm from './components/Student/AdmissionForm';
import EditStudent from './components/Student/EditStudent';
import { UserProvider } from './components/Context/UserContext';

function App() {
  const [studentdata, setstudentData] = useState([
    {
      roll_no: 1,
      name: "Venkateshwaran S",
      standard: 10,
      mother_name: "Angalaeswari",
      father_name: "Sanmugam R",
      contact: "9526541245",
      address: "chennai"
    },
    {
      roll_no: 2,
      name: "Pandieswar J",
      standard: 10,
      mother_name: "Jeyalakshmi",
      father_name: "Jeyaprakash",
      contact: "9856541458",
      address: "chennai"
    }
    ,
    {
      roll_no: 3,
      name: "Sathyamoorthi P",
      standard: 10,
      mother_name: "Lakshmi",
      father_name: "Palani R",
      contact: "9856545878",
      address: "chennai"
    }
  ])
  const mentordata = [
    {
      employe_id: 1,
      name: "Rajkumar A",
      subject: "Tamil",
      qualification: "Tamil(literature)",
      experience: "8 years",
      salary: 28000,
      contact: "9226347852",
      address: "chennai"
    },
    {
      employe_id: 2,
      name: "Kavitha S",
      subject: "English",
      qualification: "English(literature)",
      experience: "7 years",
      salary: 30000,
      contact: "8526544857",
      address: "chennai"
    },
    {
      employe_id: 3,
      name: "Chandrajothi M",
      subject: "Maths",
      qualification: "M.sc,B.Ed",
      experience: "8 years",
      salary: 40000,
      contact: "9786547845",
      address: "chennai"
    },
    {
      employe_id: 4,
      name: "Sendhilnathan M",
      subject: "science",
      qualification: "M.sc(Science)",
      experience: "2 years",
      salary: 35000,
      contact: "9126547502",
      address: "chennai"
    },
    {
      employe_id: 5,
      name: "Mariyamma B",
      subject: "social",
      qualification: "M.sc(History)",
      experience: "9 year",
      salary: 28000,
      contact: "9528242369",
      address: "chennai"
    }
  ]
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login setMentorVisible={setMentorVisible} />} />
        <Route path="/portal" element={<Portal />}>
          <Route path='mentor' element={<Mentor mentordata={mentordata} />} />
          <Route path='mentorview/:id' element={<MentorView mentordata={mentordata} />} />
          <Route path="student" element={<Student studentdata={studentdata} setstudentData={setstudentData} mentorVisible={mentorVisible} />} />
          <Route path='studentview/:id' element={<StudentView studentdata={studentdata} />} />
          <Route path='admissionform' element={<AdmissionForm studentdata={studentdata} setstudentData={setstudentData} />} />
          <Route path='editstudent/:id' element={<EditStudent studentdata={studentdata} setstudentData={setstudentData} />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
