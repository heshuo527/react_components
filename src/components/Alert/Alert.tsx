import React from 'react'

export type AlertTypes = {
    artType: 'success' | 'default' | 'danger' | 'warning'
}

const Alert :React.FC<AlertTypes> = (props) => {

    console.log(props);
    
  return (
    <div>Alert</div>
  )
}

export default Alert