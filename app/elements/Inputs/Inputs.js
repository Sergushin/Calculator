import { Slider} from '@mui/material';
import styles from './Inputs.module.scss';
import { useState } from 'react';
import { AttachMoney } from '@mui/icons-material';
import Link from 'next/link';





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
    let regex = /[a-z!$(){}[[:;-<+?.,';>e/\\]/g;
    const handleChangess = e => {
        setInputValue(e.target.value.replace(regex,''))
    }
    const total=Number(inputValue)+value+value1

    return (
        <div className={styles.inputs}>
            <div className="text-input">
                <label htmlFor="loan">Loan Amount</label>
                <AttachMoney className={styles.money}/>
                <input type="text" maxLength={9} onChange={handleChangess} value={inputValue} in placeholder='999.999.999' />
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
            <Link className={styles.link}
        href={{
          pathname: "/calculate",
          query:{total}
        }}
        
      >
        Calculate
      </Link>
        </div>
    );
}

export default Inputs;