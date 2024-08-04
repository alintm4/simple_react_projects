import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setnumberAllowed] = useState(false);
  const [characterallowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) str += "0123456789";
    if (characterallowed) str += "!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, characterallowed, setPassword]);

  const refValue = useRef(null); // only for user better experience


  const copypassword = useCallback(() => {
    refValue.current?.select()
    refValue.current?.setSelectionRange(0,length) // to select only dedicated length of password
    window.navigator.clipboard.writeText(password);
  }, [password]);

//use effect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, characterallowed, setPassword]);

  return (
    <>
      <div className=" bg-red-100 max-w-md w-full mx-auto rounded-lg px-4 my-8">
        <h1 className="text-4xl text-center text-black ">Password Generator</h1>
        <div className="flex shadow rounded-lg mb-4 overflow-hidden my-3 text-center">
          <input
            type="text"
            placeholder="password"
            value={password}
            className="py-1 px-3 w-full"
            readOnly
            ref={refValue}
          />
          <button
            onClick={copypassword}
            className="bg-blue-700 text-white
           px-3 py-0.5 "
          >
            Copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className=" flex  items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label>Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="number"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={characterallowed}
              onChange={() => {
                setcharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
