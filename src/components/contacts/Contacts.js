import React from "react";

const emailAddress = "etosin70@gmail.com";

const Contacts = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry: ${formData.get("subject")}`);
    const body = encodeURIComponent(
      `Hi Tosin,\n\n${formData.get("message")}\n\nFrom: ${formData.get("name")}\nReply to: ${formData.get("email")}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="page-shell contact-layout">
        <div className="contact-copy" data-scroll-reveal="left">
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let&apos;s make <span>it happen.</span></h2>
          <p className="body-copy">
            Have a project, a role, or just want to say hello? I&apos;d love to hear from you.
          </p>
          <a className="contact-email" href={`mailto:${emailAddress}`}>
            {emailAddress} <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-phone" href="tel:+2348135359082">+234 813 535 9082</a>
          <div className="contact-socials">
            <a href="https://linkedin.com/in/emmanuel-tosin-817257149" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/certifiedTboy" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://wa.me/2347018810562" target="_blank" rel="noreferrer">
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <form className="contact-form" data-scroll-reveal="right" onSubmit={handleSubmit}>
          <p className="form-intro">Send me a note</p>
          <div className="form-row">
            <label>
              Your name
              <input autoComplete="name" name="name" placeholder="Jane Smith" required />
            </label>
            <label>
              Email address
              <input autoComplete="email" name="email" type="email" placeholder="jane@company.com" required />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" placeholder="What would you like to talk about?" required />
          </label>
          <label>
            Your message
            <textarea name="message" placeholder="Tell me a little about it..." rows="4" required />
          </label>
          <button className="button button-primary form-submit" type="submit">
            Open email to send <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note">This opens your email app with your message ready to send.</p>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
