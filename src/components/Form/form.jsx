import scss from './form.module.scss'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { FormWarning } from "./form-warning";


const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().required(),
})
const initialValues = {
    name: '',
    email: '',
}


export const CallbackForm = () => {

    const handleSubmit = (values, {resetForm}) => {
        console.log(values)
   
    resetForm()
    }
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form name="callback" method="post" >
          <Field type="hidden" name="form-name" value="callback" />
          <div>
            <label>
              <Field
                type="text"
                name="name"
                className={scss.field}
                placeholder="Enter your name"
              />
            </label>
          </div>
          <div>
            <label>
              <Field
                type="email"
                name="email"
                className={scss.field}
                placeholder="Enter email*"
              />
              <ErrorMessage name="email" component={FormWarning} />
            </label>
          </div>

          <button type="submit" className={scss.sendButton}>
            Send
          </button>
        </Form>
      </Formik>
    );
}