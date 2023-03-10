import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const initialValues = {
  name: 'cp',
  email: '',
  city: ''
}
const onSubmit = values => {
  console.log('Form data', values)
}
//validation using Yup
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
const validationSchema = Yup.object({
  name:Yup.string().required('Required!!'),
  email:Yup.string()
    .email('Invalid email format!')
    .required('Required!!'),
  city: Yup.string().required('Required!!!')
})
function SimpleForm() {
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validate
    })
    console.log('visited fields', formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        
        <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input type='text' 
        id='name' name='name' 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.name}/>
        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>
        

        <div className='form-control'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' 
        id='email' 
        name='email' 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.email}/>
        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
          </div>
        <div className='form-control'>
        <label htmlFor='city'>City</label>
        <input type='text' 
        id='city' name='city' 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.city}/>
        {formik.touched.city && formik.errors.city ? <div className='error'>{formik.errors.city}</div> : null}

        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm
