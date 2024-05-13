"use client";

import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";

const ContactElements2: React.FC = () => {
  const handleSubmit = (value: FormikValues) => {
    const fetchRequest = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/user",
          { ...value },
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.data;
      } catch (err) {
        console.log(err);
      }
    };
    fetchRequest();
  };

  return (
    <>
      <div>
        <h2>Let's build something</h2>
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("required"),
            email: Yup.string()
              .email("invalid email address")
              .required("required"),
            subject: Yup.string()
              .max(100, "Must be less then 100 characters")
              .required("required"),
            message: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className=" max-w-lg">
              <div>
                <label htmlFor="name" className="block">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block">
                  Subject
                </label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your subject"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactElements2;
