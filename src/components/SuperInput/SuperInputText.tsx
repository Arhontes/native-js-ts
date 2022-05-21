import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type SuperInputTextPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onChangeText?: (value: string) => void
    onEnter?:(value:string)=>void
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        onChange,
        onChangeText,
        onKeyPress,onEnter,
        type,

        ...restProps
    }) => {
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        onChange && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressHandler =(e:React.KeyboardEvent<HTMLInputElement>)=>{
        onKeyPress && onKeyPress(e)

        onEnter && e.key==="Enter" && onEnter(e.currentTarget.value)
    }

    return (
        <input type="text" onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
    );
}

export default SuperInputText;