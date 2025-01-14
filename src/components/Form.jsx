function Form(props) {
    const errorStyles = {
        backgroundColor: "hsla(4, 100%, 67%, .2)",
        borderColor: "hsl(4, 100%, 67%)",
        color: "hsl(4, 100%, 67%)",
        outline: "none"
    }




    return (
        <form>
            <label htmlFor="email">
                <span>Email address {props.error ? <em>Valid email required</em> : null}</span>
                <input
                    onChange={props.onChange}
                    style={props.error ? errorStyles : {}}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@company.com" />
            </label>

            <button onClick={props.handleSubmit}><div>Subscribe to monthly newsletter</div></button>
        </form>
    )
}

export default Form;