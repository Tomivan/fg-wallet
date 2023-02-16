import React from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { usePinInput } from 'react-pin-input-hook'
import "./pin.component.css"

const Pin = () => {
    const {handleSubmit, register} = useForm([]);
    const [values, setValues] = React.useState(Array(4).fill(''))
    const { fields } = usePinInput({
    values,
    onChange: (values) => {
      setValues(values)
    },
  })
    const sendPin = (data) => {
        fetch('http://ec2-34-238-76-176.compute-1.amazonaws.com/api/login', {
            method: "patch",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pin: data.pin
                })
            })
            .then((response) => (
                response.json()))
            .then((data) => {
                if(data.success === true){
                    alert('Your profile has been created, you can log in now')
                    Navigate(`/`);
                }
            })
        }
    return(
        <div className='pin'>
            <div className='pin-top'>
                <h1>Create PIN</h1>
                <p>Transaction PIN is a 4-digit, which will be used to authorize your transactions</p>
            </div>
            <form className='pin-form' onSubmit={handleSubmit(sendPin)}>
            {fields.map((propsField, index) => (
                <input key={index} {...propsField} {...register("pin",{required: true})} />
            ))}
                <p>Provide your secret transaction pin</p>
                <button className='done'>Done</button>
            </form>
        </div>
    )
}

export default Pin; 