function Success(props) {
    return (
        <section className="success">
            <img src="./assets/images/icon-list.svg" alt="icon-list" />

            <h2>Thanks for subscribing!</h2>

            <p>
                A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.
            </p>

            <button onClick={props.onClick}>Dissmiss Message</button>

        </section>
    )
}

export default Success;
