import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') {
      if (value.length <= maxChars) {
        setCharCount(value.length);
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      'service_s2otafb',  
      'template_79bd36p',  
      templateParams,      
      'asxtaxzNoJN8yWv4v'  
    )
    .then((response) => {
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); 
      setCharCount(0); 
    })
    .catch((error) => {
      setStatusMessage('Error sending message. Please try again.');
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <div className="char-count">
            {charCount}/{maxChars} characters
          </div>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
