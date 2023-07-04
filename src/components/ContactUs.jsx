import "../styles/contactus.css";

const ContactUs = () => {
  return (
    <main className="contact-us">
      <h2>Confused? Send in Your Question Here.</h2>
      <form>
        <div className="name-and-email-con">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="subject-and-msg-con">
          <input type="text" placeholder="Subject" />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="send-message">Send Message</button>
      </form>
    </main>
  );
};

export default ContactUs;
