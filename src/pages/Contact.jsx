function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">

        <div className="contact-hero-content">

          <p className="legal-label">
            GET IN TOUCH
          </p>

          <h1>
            We'd Love to
            <br />
            <span>Hear From You.</span>
          </h1>

          <p>
            Have a question, suggestion or feedback?
            Send us a message and we'll get back to you.
          </p>

        </div>

      </section>

      <section className="contact-section">

        <div className="contact-grid">

          <div className="contact-info">

            <p className="legal-label">
              CONTACT US
            </p>

            <h2>
              Let's Talk.
            </h2>

            <p>
              Whether you have a question about a product,
              want to share feedback or have a suggestion
              for our website, we'd be happy to hear from you.
            </p>

            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <strong>
                    Email
                  </strong>

                  <span>
                    support@smartpickhub.com
                  </span>
                </div>

              </div>

              <div className="contact-detail">

                <div className="contact-icon">
                  ⏱
                </div>

                <div>
                  <strong>
                    Response Time
                  </strong>

                  <span>
                    We aim to respond within 1–2 business days.
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  "Thanks for contacting SmartPick Hub!"
                );
              }}
            >

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="7"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="primary-button contact-submit"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;