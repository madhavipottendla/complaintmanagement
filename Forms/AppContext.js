import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [formData, setFormData] = useState({
    shopname: '',
        district: '',
        mandal: '',
        village: '',
        pincode: '',
        imageUri: null,
        firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    complaintText: '',  
    complaintType: '',  
    recordedURI: '', 
  });

  return (
    <AppContext.Provider value={{ formData, setFormData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
