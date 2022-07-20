import React, { useState } from 'react'
import classes from './CustomSelect.module.css';
// import classnames from 'classnames'
// import classnames from 'classnames'

export default function CustomSelect ({ value, title, options, onChange }) {
  const [isActive, setIsActive] = useState(false)

  const applyChange = (newItemId) => {
    onChange && onChange([...value, newItemId])
  }

  const removeValue = (removedItemId) => {
    onChange && onChange(value.filter(i => i !== removedItemId))
  }

  return <div className={classes.dropdowncontainer} >
    <label>{title}</label>
    <div className={classes.dropdowninput} >
      <span onClick={() => setIsActive(!isActive)} className='arrow-down'></span>
      <div className={classes.dropdownvalues} >
        {value.length ? value.map(v => <div key={v} className={classes.dropdownvalue}> {options[v].label} <span className={classes.dropdownremove}  onClick={() => removeValue(v)}>X</span></div>) : <div onClick={() => setIsActive(!isActive)} className={classes.dropdownplaceholder} >Select an Algorithm</div> }
      </div>
    </div>
    <div className={isActive ? classes.dropdownactive : classes.dropdownoptions}>
      {options.filter(i => value.findIndex(v => v === i.id) === -1).map(item =>
        <div onClick={() => applyChange(item.id)} className={classes.dropdownitem} key={item.id}>
          <img src={item.logo}/>
          {item.label}
        </div>
      )}
    </div>
  </div>
}

