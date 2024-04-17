import React, { useState } from "react";
import Footer from "../components/Footer";

const ContactPage = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement logic to handle form submission, like sending the data to a server
    console.log("Form submitted:", { name, email, message });
    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="w-full flex flex-col px-4 md:px-32">
        <div className="py-8 text-4xl font-bold tracking-wide">Contact Us</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-400 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-400 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold">
                  Message:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-gray-400 rounded px-4 py-2 w-full h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="text-lg mb-4">
              If you have any questions or feedback, feel free to reach out to
              us via email or phone:
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-bold">Email:</span>{" "}
                contact@yourwebsite.com
              </div>
              <div>
                <span className="font-bold">Phone:</span> +123-456-7890
              </div>
              <div>
                <span className="font-bold">Address:</span> 123 Main St, City,
                Country
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
