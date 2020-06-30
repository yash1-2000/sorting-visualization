import React, { useState, createContext } from "react";

export const Arraycontext = createContext();
export const Totalcontext = createContext();
export const Speedcontext = createContext();
export const Disablecontext = createContext();

export function Arrayprovider(props) {
  const [array, setarray] = useState([]);

  return (
    <Arraycontext.Provider value={[array, setarray]}>
      {props.children}
    </Arraycontext.Provider>
  );
}

export function Totalprovider(props) {
  const [total, settotal] = useState(50);

  return (
    <Totalcontext.Provider value={[total, settotal]}>
      {props.children}
    </Totalcontext.Provider>
  );
}

export function Speedprovider(props) {
  const [speed, setpeed] = useState(2);

  return (
    <Speedcontext.Provider value={[speed, setpeed]}>
      {props.children}
    </Speedcontext.Provider>
  );
}

export function Disableprovider(props) {
  const [disable, setdisable] = useState(true);

  return (
    <Disablecontext.Provider value={[disable, setdisable]}>
      {props.children}
    </Disablecontext.Provider>
  );
}
