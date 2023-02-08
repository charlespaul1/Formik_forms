import React from 'react';

import { useFormik } from 'formik';
const initialValues = {
  name: '',
  email: '',
  city: ''
}
const onSubmit = values => {
  console.log('Form data', values)
}

const validate = values => {
  let errors = {}

          if (!values.name){
            errors.name = 'Required'
          }

          if (!values.email){
            errors.email = 'Required'
          } else if (!/^[A-Z0-9.-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'Invalid email format'
          }

          if (!values.city) {
            errors.city = 'Required'
          }
          
          return errors
}
function SimpleForm() {
    const formik = useFormik({
      initialValues,
      onSubmit,
      validate
    })
    //console.log('Form values', formik.values)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' 
        id='name' name='name' 
        onChange={formik.handleChange} 
        value={formik.values.name}/>

        <label htmlFor='email'>E-mail</label>
        <input type='email' 
        id='email' 
        name='email' 
        onChange={formik.handleChange} 
        value={formik.values.email}/>

        <label htmlFor='city'>City</label>
        <input type='text' 
        id='city' name='city' 
        onChange={formik.handleChange} 
        value={formik.values.city}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm
