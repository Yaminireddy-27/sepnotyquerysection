import { Component } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { IoLogoWechat } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import InputElements from "../InputElements";
import ContactSection from "../ContactSection";
import "./index.css";

const contactListItem = [
  {
    id: 1,
    contactIcon: <IoCall className="contact-icon" />,
    contactType: "Call Us",
  },
  {
    id: 2,
    contactIcon: <IoLogoWechat className="contact-icon" />,
    contactType: "Live Chat",
  },
  {
    id: 3,
    contactIcon: <IoLogoWhatsapp className="contact-icon" />,
    contactType: "Whats app",
  },
  {
    id: 4,
    contactIcon: <MdAttachEmail className="contact-icon" />,
    contactType: "Email",
  },
];

const inputElementList = [
  { id: 1, inputType: "Full name" },
  { id: 2, inputType: "Company" },
  { id: 3, inputType: "Work email" },
  { id: 4, inputType: "Phone" },
];

class SepnotyQuerySection extends Component {
  render() {
    return (
      <div className="container">
        <div className="query-container ">
          <div className="question-container">
            <h1 className="heading">
              Have a question to our team or need help with your project?
            </h1>
            <p className="description">
              our team is ready to provide client references, estimate your
              project, or answer any other question related to your IT
              intiative.
            </p>
            <textarea
              rows="7"
              cols="85"
              placeholder="How can we help you?"
              className="textarea"
            ></textarea>
          </div>
          <div className="drag-and-drop">
            <FiUploadCloud className="upload-icon" />
            <p className="description">
              Drag and drop or{" "}
              <a href="" className="anchor-ele">
                browse
              </a>{" "}
              to upload your file(s)?
            </p>
          </div>
          <div className="input-container">
            <ul className="input-list">
              {inputElementList.map((eachItem) => (
                <InputElements
                  key={eachItem.id}
                  inputType={eachItem.inputType}
                />
              ))}
            </ul>
          </div>
          <div className="checked">
            <input type="radio" id="sepnotyContact" name="agree" checked />
            <label for="sepnotyContact" className="description">
              I agree to have Sepnoty contact me via email, phone, messengers
            </label>
            <br />
            <input type="radio" id="requestSepnoty" name="agree" />
            <label for="requestSepnoty" className="description">
              I agree to have Sepnoty provide my request Information to Sepnoty
              affiliated development center
            </label>
          </div>
          <div className="button-con">
            <button type="button" className="button">
              Send
            </button>
          </div>
        </div>
        <div className="contact-container">
          <h1 className="contact-heading">Get in touch instantly</h1>
          <ul className="contactus-items">
            {contactListItem.map((eachItem) => (
              <ContactSection key={eachItem.id} contactDetails={eachItem} />
            ))}
          </ul>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/du74u7bsh/image/upload/v1707124056/Screenshot__184_-removebg_ezwcrq.png"
              alt="contactUs"
              class="image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SepnotyQuerySection;
