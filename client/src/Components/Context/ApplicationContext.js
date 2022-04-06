import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ApplicationContext = createContext();


// This context provider is passed to any component requiring the context
export const ApplicationProvider = ({ children }) => {

    const [students, setStudents] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [teacherName, setTeacherName] = useState("")

  return (
    <ApplicationContext.Provider value={{students,setStudents,isLoggedIn,setIsLoggedIn,teacherName,setTeacherName}}>
      {children}
    </ApplicationContext.Provider>
  );
};