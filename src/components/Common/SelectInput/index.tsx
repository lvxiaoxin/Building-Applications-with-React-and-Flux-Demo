import React from 'react';

interface Props {
    id: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    value: number;
    name: string;
}

const SelectInput = (props: Props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.id}>{props.label}</label>
            <div className='field'>
                <select
                    id={props.id}
                    name={props.name}
                    onChange={props.onChange}
                    className='form-control'
                    value={props.value || 0}
                >
                    <option value='' />
                    <option value='1'>Cory House</option>
                    <option value='2'>Scott Allen</option>
                    <option value='3'>Dan Wahlin</option>
                </select>
            </div>
        </div>
    );
};

export default SelectInput;
