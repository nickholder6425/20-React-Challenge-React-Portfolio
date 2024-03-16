import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // Hook that manages form data
  //   initialize values of state, clear input fields on loading component
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Hook that manages email error message
  const [errorMessage, setErrorMessage] = useState("");
  // destructure formState obj into its properties
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();

    // state only updates if form data passed quality tests(no err message)
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  }

  // JSX DOM elements
  return (
    <section>
      <h1 data-testid="h1tag">Reach me</h1>
      <a href="mailto:njthanhtrang@gmail.com">@njthanhtrang@gmail.com</a>
    
    </section>
  );
}

export default ContactForm;