import React,{useState} from "react";
const Passwordgenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [strenght, setStrength] = useState(50);

  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = lowerCase;
    if (strenght>=30)characters+= upperCase+ numbers;
    if (strenght>=60)characters+= symbols;
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };
  const getSliderBackground = () => {
    return{
      background:'linear-gradient(to right, red 0%,orange 25%,yellow 50%,lightgreen 75%,green 100%)',
    }
  };
  return (
    <div className="max-w-md mx-auto bg-amber-400 p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <div className="flex flex-col items-center mb-4">
        <lebel className="text-left">
          Password Length: {length}
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </lebel>
        <lebel className="text-left">
          Password Strength: {strenght}
          <input
            type="range"
            min="0"
            max="100"
            value={strenght}
            onChange={(e) => setStrength(parseInt(e.target.value))}
            className="w-full appearance-none h-2 bg-amber-300 rounded-lg"
            style={getSliderBackground()}
          />
        </lebel>  
      </div>
      <button
        onClick={generatePassword}
        className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600">Generate Password</button>
        {password && (<div className="mt-4 p-2 bg-amber-200 rounded-lg">
          <h2 className="text-lg font-bold">Generated Password:</h2>
          <p className="text-xl font-mono">{password}</p>
        </div>
        )}
    </div>
  );
};
export default Passwordgenerator;