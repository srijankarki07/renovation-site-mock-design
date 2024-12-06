export default function Info() {
  return (
    <div className="info">
      <div className="form">
        <h3>Get a Free Quote</h3>
        <form className="form-component" id="contact">
          <div className="input-group">
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="input-group">
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="input-group">
            <textarea placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="maps">
        <h3>Our Location</h3>
        <iframe
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "15px" }}
          src="https://www.openstreetmap.org/export/embed.html?bbox=-13.820731043815615%2C65.5273946117464%2C-13.81383240222931%2C65.528921255366&amp;layer=mapnik"
        />
      </div>
    </div>
  );
}
