import React from 'react'
import styles from './FormContainer.module.css'
import mainimg from '../../components/Screenshot_16.png'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FormContainer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className={styles.mainDiv}>
            <div className={styles.Form}>
                <p>SignUp</p>
                <Formik
                    initialValues={
                        {
                            email: '',
                            password: '',
                            username: '',
                            phone: '',
                            file: null
                        }
                    }
                    validate={values => {
                        const errors = {};

                        // EMAIL
                        if (!values.email) {
                            errors.email = 'Email Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        //USERNAME
                        if (!values.username) {
                            errors.username = 'Username Required';
                        } else if (values.username.length < 15) {
                            errors.username = 'username is too short';
                        }

                        //PHONENO
                        if (!values.phone) {
                            errors.phone = 'Phone number Required';
                        } else if (values.phone.length !== 10) {
                            errors.phone = 'Enter valid Phone number';
                        }

                        //PASSWORD
                        if (!values.password) {
                            errors.password = 'Password Required';
                        } else if (values.confirmpassword !== values.password) {
                            errors.confirmpassword = 'Password must Match';
                        }

                        //FILE
                        if (!values.file) {
                            errors.file = 'Upload image Required';
                        }
                        else if (values.file.size > 2000000) {
                            errors.file = 'file must be less than 2Mb';
                        }

                        return errors;
                    }}


                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                        dispatch({
                            type: 'Data',
                            username: values.username,
                            email: values.email,
                            phone: values.phone,
                            file: URL.createObjectURL((values.file)),
                        });
                        navigate('/home');
                    }

                    }>

                    {({ isSubmitting, setFieldValue }) => (

                        <Form className={styles.Form}>

                            <div className={styles.photo}>
                                <input id='file'
                                    onChange={(e) => {
                                        setFieldValue("file", e.currentTarget.files[0]);
                                    }}
                                    accept='.jpg, .png'
                                    type="file" hidden name="file" />
                                <ErrorMessage name="file" component="div" />
                                <label htmlFor='file' name='file' className={styles.photoadd}>Photo +</label>
                            </div>

                            <label>Name</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="div" />

                            <label>Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />

                            <label>PhoneNo</label>
                            <Field type="text" name="phone" />
                            <ErrorMessage name="phone" component="div" />

                            <label>Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />

                            <label>Confirm Password</label>
                            <Field type="password" name="confirmpassword" />
                            <ErrorMessage name="confirmpassword" component="div" />

                            <div className={styles.btn}>
                                <button type="submit" className={styles.submit} disabled={isSubmitting}>
                                    Submit
                                </button>
                                <button type="reset" className={styles.reset}>
                                    Reset
                                </button>
                            </div>

                        </Form>

                    )}
                </Formik>
            </div>
            <img src={mainimg} alt='' />
        </div>



    )
}

export default FormContainer