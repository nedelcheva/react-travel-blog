import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <div className="contact">
            <form className="contact-form" action="" method="post">
            <h1 className="title">Contact us</h1>

                <div className="add-container">
                    <label name="subject">Subject</label>
                    <input type="text" placeholder="Subject" name="subject" required />

                    <label name="message">Message</label>
                    <textarea className="add-textarea" name="message" cols="42" rows="10" placeholder="Write the message..."></textarea>

                    <button className="button-submit" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}
