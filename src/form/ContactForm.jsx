import React from 'react'
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            name: "",
            email: "",
            phone: "",
            message: ""
        };
    }
    handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert('Thanks for sending a message! We will respond as soon as we can.'))
            .catch(error => alert(error));
        console.log(this.state)
        e.preventDefault();
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { name, email, message,first, last, phone } = this.state;
        return (
            <div className='form-container'>
                <h3>Corporate Sales Form</h3>
                <form name='contact' method="POST" class="contact__form" netlify-honeypot="bot-field" data-netlify="true" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <h4>Name</h4>
                        <label>
                            First: <input type="text" name="first" value={first} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Last: <input type="text" name="last" value={last} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <h4>Business Name</h4>
                        <label>
                            <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <h4>Email</h4>
                        <label>
                            <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <h4>Phone</h4>
                        <label>
                            <input type="text" name="phone" value={phone} onChange={this.handleChange} />
                        </label>
                    </p>

                    <p>
                        <h4>Message</h4>
                        <label>
                            <textarea name="message" value={message} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                    <h3>CAPTCHA</h3>
                        <button type="submit">SUBMIT</button>
                    </p>
                </form>
            </div>
        )
    }
}
export default ContactForm