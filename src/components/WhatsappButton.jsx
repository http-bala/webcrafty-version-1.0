import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const message = "Hello! I'm interested in your digital marketing services. How can you help me?";

  return (
    <a
      href={`https://wa.me/918154954408?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-6 lg:right-6 bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-2xl transition-all z-20"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={30} color="white" />
    </a>
  );
};

export default WhatsappButton;
