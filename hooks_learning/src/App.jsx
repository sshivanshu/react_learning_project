import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  useEffect(() => {passwordGenerator()},[length,,numberAllow,charAllow])
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@##$%&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [charAllow, numberAllow, length, setPassword]);

  const copyPass = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-white bg-gray-700 text-center">
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 text-black"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 px-3 py-0.5" onClick={copyPass}>copy</button>
        </div>
        <div>
          <div>
            <input type="range" min={6} max ={100} value={length} onChange={(e)=>{setLength(e.target.value)}} className="cursor-pointer" />
            <label > Length: {length}</label>
          </div>
          <div>
            <input type="checkbox" id="numberInput" defaultChecked={numberAllow} onChange={()=> {setNumberAllow(prev=>!prev)}} />
            <label > Number</label>
          </div>
          <div>
            <input type="checkbox" id="charInput" defaultChecked={charAllow} onChange={()=> {setCharAllow(prev=>!prev)}} />
            <label > Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
