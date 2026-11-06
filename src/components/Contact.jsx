import { useState } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#1c252f] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Have a project in mind or want to work together?
            Feel free to get in touch with me.
          </p>

        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-2xl font-bold mb-5">
              Let's Work <span className="text-cyan-400">Together</span>
            </h3>

            <p className="text-gray-300 leading-7 mb-10">
              I'm always open to discussing new projects,
              creative ideas and opportunities to be part
              of your vision. Let's connect and create
              something amazing together.
            </p>

            {/* Contact Details */}
            <div className="space-y-7">

              <div className="flex items-center gap-5">

                <div className="bg-[#263442] p-4 rounded-xl text-cyan-400">
                  <FaEnvelope size={23} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-400 text-sm">
                    nitishsingh811302@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-[#263442] p-4 rounded-xl text-cyan-400">
                  <FaPhoneAlt size={23} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400 text-sm">
                    +91 6202166576
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-[#263442] p-4 rounded-xl text-cyan-400">
                  <FaMapMarkerAlt size={23} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-400 text-sm">
                    India
                  </p>
                </div>

              </div>

            </div>

            {/* Social Media */}
            <div className="mt-10">

              <h4 className="text-lg font-semibold mb-5">
                Connect With Me
              </h4>

              <div className="flex gap-4">

                {[FaGithub, FaLinkedin, FaInstagram, FaFacebook].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-11 h-11 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950 transition duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  )
                )}

              </div>

            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#263442] p-6 md:p-9 rounded-2xl border border-gray-700 shadow-xl">

            <h3 className="text-2xl font-bold mb-7">
              Send Me a <span className="text-cyan-400">Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#1c252f] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#1c252f] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full bg-[#1c252f] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full bg-[#1c252f] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-cyan-400 text-gray-950 font-bold py-3 rounded-lg hover:bg-cyan-300 hover:scale-[1.02] transition duration-300"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-20 pt-8 text-center">

          <h3 className="text-xl font-bold">
            Nitish<span className="text-cyan-400">.</span>
          </h3>

          <p className="text-gray-400 text-sm mt-3">
            © {new Date().getFullYear()} Nitish Kumar. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Designed & Developed with ❤️ by Nitish Kumar
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;