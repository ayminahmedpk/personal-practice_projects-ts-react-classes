

import React from "react";

type CountObjectType = {
  count: number,
  increment: (event: React.MouseEvent<HTMLButtonElement> ) => void
  decrement: (event: React.MouseEvent<HTMLButtonElement> ) => void
}

const CountContext = React.createContext({} as CountObjectType); // to set type

export default CountContext;