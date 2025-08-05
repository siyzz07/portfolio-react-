import { useState } from "react";
import { useTheme } from "../ContextApi/ThemeProvider";

function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim().length > 3 && formData.message.trim().length > 3) {

      const data = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      await fetch("https://script.google.com/macros/s/AKfycbysG26u2U-sxEpObn0dOfTi1S6gsAdpmtYoRs_T8dAyp4Sb06Jsbh_JMsXDyVhJklE_/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      alert("Idea submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(
        "Enter Valied Data \n Name must be greather than 3 words \n Message must be greather than 3 words"
      );
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center  mb-8">Contact Me</h2>
        <p className="text-lg t text-center mb-8">
          Have a project in mind? Let's connect!
        </p>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`${
                isDark
                  ? "border-white  bg-black text-white focus:ring-white placeholder-white"
                  : "border-black  bg-white text-black focus:ring-black placeholder-black"
              } w-full p-3 rounded-lg border     focus:outline-none focus:ring-2`}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`${
                isDark
                  ? "border-white  bg-black text-white focus:ring-white placeholder-white"
                  : "border-black  bg-white text-black focus:ring-black placeholder-black"
              } w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black`}
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`${
                isDark
                  ? "border-white  bg-black text-white focus:ring-white placeholder-white"
                  : "border-black  bg-white text-black focus:ring-black placeholder-black"
              } w-full p-3 rounded-lg border    `}
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className={`${
                isDark
                  ? "bg-white hover:bg-gray-300  text-black"
                  : "bg-black text-white hover:bg-gray-700 "
              } w-full   p-3 rounded-lg font-semibold transition`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
