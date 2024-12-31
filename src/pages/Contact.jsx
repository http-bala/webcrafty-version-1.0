import React, { useState } from 'react';
import PageHeader from '../components/PageHeader'; // Ensure this path matches your project structure
import contactImage from '../assets/images/about-1.jpg'; // Replace with your background image
import { toast } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submit state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { email: '', phone: '' };

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Phone Number Validation (max 10 characters and only numbers)
    const phoneRegex = /^[0-9]{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true); // Disable the button
      // Simulate sending the form data (replace with actual API call)
      setTimeout(() => {
        toast.success('Message sent successfully!');
        setIsSubmitting(false); // Re-enable the button after sending
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        }); // Clear form data
      }, 2000); // Simulating an API request with a delay
    }
  };

  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Contact Us" backgroundImage={contactImage} />

      {/* Contact Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-gray-800">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions or want to work with us? Feel free to reach out!
              </p>
              <div className="space-y-2">
                <p>
                  <span className="font-medium text-gray-800">Email:</span>{" "}
                  <a href="mailto:info@webcrafty.com" className="text-blue-500 hover:underline">
                    info@webcrafty.com
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-800">Phone:</span>{" "}
                  <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                    +123-456-7890
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-800">Address:</span>{" "}
                  123 Webcrafty Lane, Berlin, Germany
                </p>
              </div>
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.547146759692!2d72.83590241493263!3d20.397479586312673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051ba6dc4f4b3%3A0x5b7a7d5b3f28deda!2sBhimpore%2C%20Daman%20and%20Diu%20396110!5e0!3m2!1sen!2sin!4v1695064950304!5m2!1sen!2sin"
                className="w-full h-96 rounded-lg shadow-md border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-medium mb-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your phone number"
                    maxLength={10}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Type your message here"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting} // Disable button while submitting
                  className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500'} text-white font-medium py-2 rounded-lg hover:${isSubmitting ? '' : 'bg-blue-600'} transition`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
