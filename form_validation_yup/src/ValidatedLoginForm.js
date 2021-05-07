import React from 'react';
import Formik from 'formik';
import  * as Yup from 'yup';


const ValidatedLoginForm = () => (
    <Formik
    initialValues={{email: "",password: ""}}
    onSubmit={(values,{setSubmitting}) =>{
     setTimeout(() => {
         console.log("Logging in",values)
     },500);

    }}
    

    //Here we will define the validation
    validationSchema={Yup.object().shape({
        email:Yup.toString()
        .email()
        .required("Required"),

        password:Yup.toString()
        .required("No Password Provided")
        .min(8,"Password is too short -should be eight character long")
        .matches(/(?=.*[0-9])/,"Password should contain a number")


    })}
    >
    {
        props =>{
            const{
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return(
              
              <form autoComplete="off" onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>

                  <input type="text" 
                  value={values.email}
                   name="email" 
                   onChange={handleChange}
                   onBlur={handleBlur}
                   placeholder="Enter Email" 
                   className={errors.email && touched.email && "error"}
                   />
                   {
                       errors.email && touched.email && (
                           <div className="input-feeback">{errors.email}</div>
                       )
                   }

                  <label htmlFor="password">Password</label>

                  <input type="password" 
                  value={values.password}
                   name="password" 
                   onChange={handleChange}
                   onBlur={handleBlur}
                   placeholder="Enter Password" 
                   className={errors.password && touched.password && "error"}
                   />
                   {
                       errors.password && touched.password && (
                           <div className="input-feedback">{errors.password}</div>
                       )
                   }

                  <button type="submit" disabled={isSubmitting}>Login</button>
              </form>
            )
        }
    }


    </Formik>

);
    
export default ValidatedLoginForm