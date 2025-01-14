function Success(props) {
    const email = document.getElementById("email").value;
    return (
        <section className="success">
            <img src="./assets/images/icon-list.svg" alt="icon-list" />

            <h2>Thanks for subscribing!</h2>

            <p>
                A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.
            </p>

            <button onClick={props.onClick}><div>Dissmiss Message</div></button>

        </section>
    )
}

export default Success;
