import React from 'react';
import  { Formik } from 'formik';
import  * as Yup from 'yup';
import '../src/Header.scss';



const Header = () => (
    <Formik
        initialValues={{name:"",email: "",arrivaldate: "",
           departuredate: ""}}
         onSubmit={(values,{setSubmitting}) =>{
             setTimeout(() => {
            console.log("Logging in",values)
          },500);

    }}
 //here we will define the validation

    validationSchema={ Yup.object().shape({
        name:Yup.string()
        .required("Name is Required"),

        email:Yup.string()
        .email()
        .required("Email is Required"),

        arrivaldate:Yup.string()
        .required("Arrival Date is Required"),

        departuredate:Yup.string()
        .required("Departure Date is Required"),

        })}

    >
    
        {props =>{
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
              <div className="Container">
              
              <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-25">
                <label className="lab" htmlFor="name">Name*</label>
                  </div> 
                  <div className="col-75">
                  <input type="text" 
                  value={values.name}
                   name="name" 
                   onChange={handleChange}
                   onBlur={handleBlur}
                   placeholder="Name" 
                   className={errors.name && touched.name && "error"}
                   />
                   
                   {
                       errors.name && touched.name && (
                           <div className="input-feeback">{errors.name}</div>
                       )
                    }
                       </div> </div>

              <div className="row">
                <div className="col-25">
                  <label htmlFor="email">Email*</label>
                  </div> 
                  
                  <div className="col-75">
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
                   </div></div>
                   
                   <div className="row">
                <div className="col-25">
                  <label htmlFor="email">Room Type</label>
                  </div> 
                  <div className="col-75"> 
                   <select value="select">
                       <option value="Orange">select</option>
                        <option value="Radish">Radish</option>
                        <option value="Cherry">Cherry</option>
                </select>
                </div></div> 
                <div class="row">
                   <div class="col-25">
                   <label htmlFor="arrivaldate">Arrival Date*</label></div>
                   <div class="col-75">
                   <input type="arrivaldate"
                   value={values.arrivaldate}
                   name="arrivaldate"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   placeholder="Arrival Date"
                   className={errors.arrivaldate && touched.arrivaldate && "error"}
                   />
                   { errors.arrivaldate && touched.arrivaldate && (
                       <div className="input-feedback">{errors.arrivaldate}</div>
                   )}
                   </div></div>

                  <div class="row">
                  <div class="col-25">
                 <label htmlFor="departuredate">Departure Date*</label></div>
                 <div class="col-75">
                            < input type="departuredate"
                           value={values.departuredate}
                         name="departuredate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                     placeholder="Departure Date"
                  className={errors.depaturedate && touched.departuredate && "error"}
              />
           { errors.departuredate && touched.departuredate && (
          <div className="input-feedback">{errors.departuredate}</div>
         )}
         </div></div>

         <div className="row">
                <div className="col-25">
                <label htmlFor="name">Flight Number</label>
                  </div> 
                  <div className="col-75">
                  <input type="text" 
                 
                   name="flightnumber" 
                   placeholder="Flight Number"/>
                   </div></div>
                <div className="row">
                <div className="col-25">
                  <label htmlFor="guest">Number Of Guests</label>
                  </div> 
                  <div className="col-75"> 
                   <select value="select">
                       <option value="select">select</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                </select>
                </div></div> 
                <div className="row">
                <div className="col-25">
                  <label htmlFor="specialrequest">Special Request</label>
                  </div> 
                  <div className="col-75">
                  <input type="specialrequest"
                   name="specialrequest"
                   placeholder="special Request"/>
                   </div></div>
              <button type="submit" disabled={isSubmitting}>Login</button>
              </form>
              </div>
            )
        }
    }


 </Formik>

);
    
export default Header;