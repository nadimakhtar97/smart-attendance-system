import React from 'react';
import {Field} from 'formik';
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Box

} from "@chakra-ui/react";


const ChakraInput = (props) => {

    const {label,name,...rest} = props;

    return (
        <Field name={name}>
            {
                ({form,field}) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                            <FormLabel  htmlFor={name}>{label}</FormLabel>
                            <Input id={name} {...rest} {...field} border='1px' borderColor='black.200'/>
                            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                }
            }
        </Field>
    );
};

export default ChakraInput;