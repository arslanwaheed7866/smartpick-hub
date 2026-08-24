function About() {
  return (
    <main className="about-page">

      {/* ABOUT HERO */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="legal-label">
            ABOUT SMARTPICK HUB
          </p>

          <h1>
            Helping You Find
            <br />
            <span>Products Worth Knowing.</span>
          </h1>

          <p>
            SmartPick Hub is a product discovery website
            built to make online shopping research simpler,
            more organized and easier to navigate.
          </p>

        </div>

      </section>

      {/* OUR MISSION */}

      <section className="about-section">

        <div className="about-container">

          <div className="about-heading">

            <p className="legal-label">
              OUR MISSION
            </p>

            <h2>
              Less Searching.
              <br />
              Better Discovering.
            </h2>

          </div>

          <div className="about-text">

            <p>
              Finding the right product online can sometimes
              mean opening dozens of pages, comparing different
              options and trying to understand which products
              are actually worth considering.
            </p>

            <p>
              SmartPick Hub aims to make that process easier by
              organizing products into simple categories and
              presenting useful information in one place.
            </p>

            <p>
              Our goal is not to tell you what you must buy.
              Instead, we want to help you discover options so
              you can make your own informed decision.
            </p>

          </div>

        </div>

      </section>

      {/* WHAT WE DO */}

      <section className="about-section about-light">

        <div className="about-container-single">

          <div className="section-heading">

            <p>
              WHAT WE DO
            </p>

            <h2>
              Product Discovery Made Simple
            </h2>

            <span>
              We focus on making the research process easier.
            </span>

          </div>

          <div className="about-feature-grid">

            <div className="about-feature-card">

              <div className="about-feature-icon">
                🔎
              </div>

              <h3>
                Discover
              </h3>

              <p>
                Explore products across different categories
                without having to search through countless
                websites.
              </p>

            </div>

            <div className="about-feature-card">

              <div className="about-feature-icon">
                📋
              </div>

              <h3>
                Research
              </h3>

              <p>
                Review product descriptions and available
                information before making a decision.
              </p>

            </div>

            <div className="about-feature-card">

              <div className="about-feature-icon">
                🛒
              </div>

              <h3>
                Shop
              </h3>

              <p>
                When you find a product you like, you can
                continue to the retailer to learn more or
                complete your purchase.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TRANSPARENCY */}

      <section className="about-section">

        <div className="about-container-single">

          <div className="transparency-box">

            <p className="legal-label">
              TRANSPARENCY
            </p>

            <h2>
              How We May Earn Money
            </h2>

            <p>
              Some links on SmartPick Hub may be affiliate
              links. This means that if you click certain
              links and make a qualifying purchase, we may
              receive a commission from the retailer.
            </p>

            <p>
              Affiliate relationships do not change our goal
              of providing useful product discovery content.
              You should always review the retailer's current
              product information, price and terms before
              purchasing.
            </p>

            <a
              href="/disclosure"
              className="primary-button about-button"
            >
              Read Affiliate Disclosure
            </a>

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}

      <section className="about-cta">

        <div>

          <p className="hero-label">
            HAVE A QUESTION?
          </p>

          <h2>
            We'd Love to Hear From You.
          </h2>

          <p>
            Have feedback or a suggestion for SmartPick Hub?
            Get in touch with us.
          </p>

          <a
            href="/contact"
            className="secondary-button"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}

export default About;