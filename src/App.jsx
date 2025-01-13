import Form from "./components/Form"
import Success from "./components/Success";
import { useState } from "react";

function App() {
  // setting some states...
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  // checking wheter the provided email is valid...
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget.parentElement)
    const email = formData.get("email")

    const validEmail = email.trim() && /\S+@\S+\.\S+/.test(email);

    if (!validEmail) {
      setError(true)
    } else {
      setSuccess(true)
    }
  }

  // letting the user try again...
  function onChange() {
    setError(false)
  }

  // dissmissing the "Thanks for subscribing" message...
  function dissmiss() {
    setSuccess(false)
  }

  // deciding what element to render
  return (
    <>
      <main>
        {success ? <Success onClick={dissmiss} /> : null}

        {success ? null : <div className="main-content">
          <picture>
            <source srcSet="./assets/images/illustration-sign-up-desktop.svg" media="(min-width: 65em)" />
            <source srcSet="./assets/images/illustration-sign-up-mobile.svg" media="(max-width: 64.9em)" />
            <img src="./assets/images/illustration-sign-up-mobile.svg" alt="illustration-sign-up-mobile" />
          </picture>

          <section className="info">
            <h1>Stay updated!</h1>
            <ul>
              <li>

                <p>Join 60,000+ product managers receiving montly updates on: </p>
              </li>

              <li>
                <img src="./assets/images/icon-list.svg" alt="icon-list" />
                Product discovery and building what matters
              </li>

              <li>
                <img src="./assets/images/icon-list.svg" alt="icon-list" />
                Measuring to ensure updates are a success
              </li>

              <li>
                <img src="./assets/images/icon-list.svg" alt="icon-list" />
                And much more!
              </li>
            </ul>

            <Form
              handleSubmit={handleSubmit}
              error={error}
              onChange={onChange}
            />
          </section>
        </div>}
      </main>
    </>

  )
}

export default App;