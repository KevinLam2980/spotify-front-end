import * as Yup from 'yup'

const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email.")
    .required("Must include email."),
  password: Yup
    .string()
    .min(3, "Password must be at least 3 characters long")
    .required("Password is required"),
})

export default formSchema