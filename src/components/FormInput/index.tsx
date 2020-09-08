import React, {ChangeEvent} from 'react';
import './styles.scss';

export interface FormInputProps{
    handleChange: (e: ChangeEvent) => void;
    label: string;
    value: string;
    name: string;
    type?: string;
    required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({handleChange, label, ...otherProps}: FormInputProps) => (
    <div className={'group'}>
        <input className={'form-input'} onChange={handleChange} {...otherProps} />
        {
            label ?
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                :
                null
        }
    </div>
)

export default FormInput;