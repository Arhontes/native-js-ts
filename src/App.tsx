import React, {useState} from 'react';
import './App.css';
import SuperInputText from "./components/SuperInput/SuperInputText";
import SuperCheckBox from "./components/SuperCheckBox";

//цель 1 - создать инпут который вводит текст
function App() {
    const [text, setText] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false)
    console.log(checked)
    const error = text ? '' : 'error'
    const git =()=>{
        alert("push")
        alert("pull")
    }
    return (
        <div>
        <SuperInputText  value={text} onChange={(e)=>setText(e.currentTarget.value)}/>
        <SuperCheckBox onChangeChecked={setChecked}> <>dasfasdga</> </ SuperCheckBox >
    </div>

    )
}

export default App;
