import React from 'react'
import ChakraInput from '../ChakraInput/ChakraInput'
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select'

function FormikControl(props) {
    const { control, ...rest } = props
    

    switch (control) {

        case 'input':
            return <ChakraInput {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio':
            return 
        case 'checkbox':
            return
        case 'date':
            return
        default:
            return null
    }

}

export default FormikControl