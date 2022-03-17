import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ApplicationContext = createContext();


// This context provider is passed to any component requiring the context
export const ApplicationProvider = ({ children }) => {

    const [students, setStudents] = useState([])

  return (
    <ApplicationContext.Provider value={{students,setStudents}}>
      {children}
    </ApplicationContext.Provider>
  );
};