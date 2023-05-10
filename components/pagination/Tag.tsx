import React from 'react'
import { ButtonProps } from '../buttons/Button'

const Tag:React.FC<ButtonProps> = ({disabled,label}) => {
  return (
    <button className={`ensome__pagination__tag`} disabled={disabled}>
      {label}
    </button>
  )
}

export default Tag
