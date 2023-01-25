import React, { createContext } from "react";
import { useState } from "react";

export const Videocontext = React.createContext({
  vid: null,
  vididhandler: () => {},
});

export function VideocontextProvider(props) {
  const [id, setId] = useState();
  function Videoidhandler(ID) {
    setId(ID);
  }
  return (
    <Videocontext.Provider value={{ vid: id, vididhandler: Videoidhandler }}>
      {props.children}
    </Videocontext.Provider>
  );
}
