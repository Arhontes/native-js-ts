import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type SuperCheckBoxPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onChangeChecked?: (checked: boolean) => void
}
const SuperCheckBox: React.FC<SuperCheckBoxPropsType> = (
    {
        checked,
        onChangeChecked,
        onChange,
        type,
        children,

        ...restProps
    }) => {

    const onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
        onChange&&onChange(e)

        onChangeChecked&&onChangeChecked(e.currentTarget.checked)
    }
    return (
        <>
            <input
                type={"checkbox"}
                onChange={onChangeHandler}
            />
            {children && <div>No children here</div>&&children}
        </>



    );
};

export default SuperCheckBox;