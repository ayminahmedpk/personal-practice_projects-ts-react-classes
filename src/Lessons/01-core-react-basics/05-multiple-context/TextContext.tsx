import React from "react";

type TextObjectType = {
  text: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const TextContext = React.createContext({} as TextObjectType);

export default TextContext;