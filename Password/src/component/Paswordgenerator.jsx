import React,{useState} from "react";
import { Copy } from "lucide-react";

const Passwordgenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [strength, setStrength] = useState(50);
  const [copied, setCopied] = useState(false);
  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = lowerCase;
    if (strength>=30)characters+= upperCase+ numbers;
    if (strength>=60)characters+= symbols;
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      
  }
  const getSliderBackground = () => {
    return{
      background:'linear-gradient(to right, red 0%,orange 25%,yellow 50%,lightgreen 75%,green 100%)',
    }
  };
  return (
    <div className="w-96 bg-amber-400 h-[22.15rem] p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <div className="flex flex-col items-center mb-4">
        <label className="text-left">
          Password Length: {length}
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="text-left">
          Password Strength: {strength}
          <input
            type="range"
            min="0"
            max="100"
            value={strength}
            onChange={(e) => setStrength(parseInt(e.target.value))}
            className="w-full appearance-none h-2 bg-amber-300 rounded-lg"
            style={getSliderBackground()}
          />
        </label>  
      </div>
      <button
        onClick={generatePassword}
        className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600">Generate Password</button>
        {password && (<div className="mt-4 p-2 bg-amber-200 rounded-lg">
          <h2 className="text-lg font-bold">Generated Password:</h2>
          <p className="text-xl font-mono">{password}
            <button
              onClick={copyToClipboard}
              className="bg-amber-500 text-white px-2 py-1 rounded-lg ml-2 hover:bg-amber-600"title="copy password">
              <Copy size={16} color="white" />
            </button>
          </p>
        </div>

        )}
        {copied && (
          <p className="text-white-500 mt-2">Password copied to clipboard!</p>
        )}
    </div>
  );
};
export default Passwordgenerator;