import React from 'react';
import PageHeader from '../components/PageHeader';

const PrivacyPolicyPage = () => {
  return (
    <div>
        <PageHeader title={"Privacy & Cookie Policy"}  />
    <div className="container mx-auto px-4 py-10">
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy & Cookie Policy</h1> */}

      <p className="text-xl text-gray-700 mb-4">
        Last Updated: <span className='text-deepNavy font-semibold'>1st Jan, 2025</span>
      </p>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
        <p>
          We collect various types of information to provide and improve our services:
        </p>
        <ul className="list-disc ml-6">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>Usage Data: Information on how you interact with our website, such as IP addresses and device information.</li>
        </ul>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
        <p>
          The information we collect is used for the following purposes:
        </p>
        <ul className="list-disc ml-6">
          <li>To provide and maintain our services.</li>
          <li>To personalize and improve your experience on our website.</li>
          <li>To communicate with you, including sending updates and marketing communications.</li>
          <li>To analyze website usage and trends for better performance.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">3. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us analyze usage and personalize content for users.
        </p>
        <ul className="list-disc ml-6">
          <li>Essential Cookies: For website functionality and security.</li>
          <li>Analytics Cookies: To track user behavior and improve our site.</li>
          <li>Advertising Cookies: To display personalized ads.</li>
        </ul>
        <p className="mt-4">
          By using our website, you consent to our use of cookies. You can manage cookies in your browser settings, but this may affect your site experience.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">4. Data Sharing and Disclosure</h2>
        <p>
          We do not share your personal information with third parties except in the following cases:
        </p>
        <ul className="list-disc ml-6">
          <li>Service Providers: Third-party services like hosting, analytics, and email communications.</li>
          <li>Legal Compliance: When required by law or to protect our rights.</li>
          <li>Business Transfers: In case of a merger, acquisition, or sale of assets.</li>
        </ul>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal information. However, no data transmission is 100% secure, and we cannot guarantee complete security.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc ml-6">
          <li>Access: Request access to the personal data we hold about you.</li>
          <li>Correction: Request corrections to any inaccurate information.</li>
          <li>Deletion: Request deletion of your personal information.</li>
          <li>Opt-out: Opt-out of receiving marketing communications from us.</li>
        </ul>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we discover that we have collected information from a child under 18, we will take steps to delete it.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy & Cookie Policy</h2>
        <p>
          We may update this Privacy & Cookie Policy from time to time. We will revise the "Last Updated" date when changes are made. Please review this policy periodically to stay informed about how we are protecting your information.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy & Cookie Policy, please contact us:
        </p>
        <p>Email: info@webcrafty.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Address: [Insert Address]</p>
      </section>
    </div>
    </div>
  );
};

export default PrivacyPolicyPage;
