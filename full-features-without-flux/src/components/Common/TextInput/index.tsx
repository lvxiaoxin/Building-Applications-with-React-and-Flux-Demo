import React from 'react';

interface Props {
    id: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    name: string
}

const TextInput = (props: Props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.id}>{props.label}</label>
            <div className='field'>
                <input
                    id={props.id}
                    type='text'
                    onChange={props.onChange}
                    name={props.name}
                    className='form-control'
                    value={props.value}
                />
            </div>
        </div>
    );
};

export default TextInput;
