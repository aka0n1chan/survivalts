import { useState } from 'react';

//引数なしでJSX.Elementを返す関数という型定義を与えている
export const SimpleButton: () => JSX.Element = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prevState) => !prevState);
  };
  return <button onClick={handleClick}>{state ? 'ON' : 'OFF'}</button>;
};
