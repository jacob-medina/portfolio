import { useState } from "react"

import LinkButton from "../common/LinkButton/LinkButton";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleFormInput(event) {
        console.log(event.target.value);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form className="contact-form">
            <label htmlFor="contact-form-name">Name</label>
            <input id="contact-form-name" name="name" type="text" onInput={handleFormInput} value={formData.name}></input>

            <label htmlFor="contact-form-email">Email</label>
            <input id="contact-form-email" name="email" type="email" onInput={handleFormInput} value={formData.email}></input>

            <label htmlFor="contact-form-message">Message</label>
            <textarea id="contact-form-message" name="message" type="text" onInput={handleFormInput} value={formData.message}></textarea>

            <LinkButton
                href={`mailto:jacobmedina1618@gmail.com?subject=${formData.name}&body=${formData.message}`}
                newPage={true}
            />
            <button type="submit">Send</button>
        </form>
    )
}