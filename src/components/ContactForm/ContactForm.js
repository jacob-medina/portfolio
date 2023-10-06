export default function ContactForm() {
    return (
        <form className="contact-form">
            <label htmlFor="contact-form-name">Name</label>
            <input id="contact-form-name" name="name" type="text"></input>

            <label htmlFor="contact-form-email">Email</label>
            <input id="contact-form-email" name="email" type="email"></input>

            <label htmlFor="contact-form-message">Message</label>
            <textarea id="contact-form-message" name="message" type="text"></textarea>

            <button type="submit">Send</button>
        </form>
    )
}