import React, {useContext, useRef} from 'react';

import ls from './RadioButtons.less';

const RadioButtonsContext = React.createContext({groupName: '', value: undefined, onChange: () => {}});

let GROUP_COUNTER = 0;

export default function RadioButtons({value, onChange, children}) {
  const groupRef = useRef('group_' + GROUP_COUNTER++);
  return (
    <RadioButtonsContext.Provider value={{groupName: groupRef.current, value, onChange}}>
      <div>{children}</div>
    </RadioButtonsContext.Provider>
  );
}

export function RadioButton({value, label}) {
  const {groupName, value: selected, onChange} = useContext(RadioButtonsContext);
  const onChangeHandler = e => onChange(e.target.value);
  const text = label || value;
  return (
    <label className={ls.radioButton}>
      <input type='radio' name={groupName} checked={selected === value}
             value={value} onChange={onChangeHandler}/> {text}
    </label>
  );
}
