import React,{useState} from 'react';

function UseForm(initialvalues) {

const [values, setValues] = useState(initialvalues);

const handleInputChange = e => {
    const {name, value} = e.target
    setValues({
        ...values,
        [name]:value
    })
}

return{
    values,
    setValues,
    handleInputChange 
}




}

export default UseForm