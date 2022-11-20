import { InputAdornment, OutlinedInput, TextField, Slider } from '@mui/material';
import styles from './Inputs.module.scss';
import { useState } from 'react';



const Inputs = () => {
    const [value, setValue] = useState(0)
    const handleChange = e => {
        setValue(e.target.value);
    }
    const [value1, setValues] = useState(0)
    const handleChanges = e => {
        setValues(e.target.value);
    }
    const [inputValue, setInputValue] = useState(0)
    const handleChangess = e => {
        setInputValue(e.target.value);
    }
    return (
        <div className={styles.inputs}>
            <div className="text-input">
                <label htmlFor="loan">Loan Amount</label>
                <OutlinedInput
                    type='number'
                    className={styles.input}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    value={inputValue}
                    onChange={handleChangess}
                    label="Amount"
                />
            </div>
            <div className="">
                <label htmlFor="loan">Interest rate <span>- Procent</span></label>
                <Slider value={value1} onChange={handleChanges} aria-label="loan" />
                <span>{value1} %</span>
            </div>
            <div className="">
                <label htmlFor="loan"> Tenure <span>- Years</span></label>
                <Slider value={value} onChange={handleChange} aria-label="loan" />
                <span>{value} Years</span>
            </div>
        </div>
    );
}

export default Inputs;