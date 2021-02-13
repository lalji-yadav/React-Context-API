import React  from 'react';

const MyContext = React.createContext('Default Valus')

export const Provider = MyContext.Provider
export const Consumer = MyContext.Consumer
