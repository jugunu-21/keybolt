// pages/privacy-policy.tsx

import React from 'react';
import Head from 'next/head';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Keybolt</title>
        <meta name="description" content="Privacy Policy for Keybolt" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last Updated: [Insert Date]</p>
        <p className="mb-4">
          Welcome to Keybolt! Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how Keybolt collects, uses, and discloses your personal information when you visit or use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect several types of information in order to provide and improve our services:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Personal Information:</strong> This may include your name, email address, and other contact details you provide when you register on our website, subscribe to our newsletter, or interact with our services.</li>
          <li><strong>Usage Data:</strong> We collect data on how you access and use our website and services, including IP address, browser type, operating system, pages viewed, time spent on pages, and other diagnostic data.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track the activity on our website. This helps us improve your experience, analyze trends, and gather demographic information.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used for various purposes, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>To Provide and Maintain Our Services:</strong> We use your information to deliver, operate, and maintain our website and services.</li>
          <li><strong>To Improve Our Services:</strong> We analyze the data collected to better understand user preferences, enhance our features, and develop new functionalities.</li>
          <li><strong>To Communicate With You:</strong> We may use your contact information to send you updates, marketing materials, or important notices related to our services.</li>
          <li><strong>To Monitor Usage and Security:</strong> We use the data to monitor the performance of our services and detect any potential security threats or technical issues.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">3. Sharing of Your Information</h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services. These service providers are required to maintain the confidentiality of your information.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it from unauthorized access, loss, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">5. Your Data Protection Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have the following data protection rights:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Access and Correction:</strong> You have the right to access the personal information we hold about you and to request corrections if it is inaccurate or incomplete.</li>
          <li><strong>Erasure:</strong> You can request the deletion of your personal data under certain circumstances.</li>
          <li><strong>Restriction of Processing:</strong> You have the right to request the restriction of processing of your personal data.</li>
          <li><strong>Data Portability:</strong> You may request to receive your personal data in a structured, commonly used, and machine-readable format.</li>
          <li><strong>Withdrawal of Consent:</strong> If we are processing your personal information based on your consent, you can withdraw your consent at any time.</li>
        </ul>
        <p className="mb-4">
          To exercise any of these rights, please contact us using the contact details provided below.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">6. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to track user activity on our website. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. If you do not accept cookies, you may not be able to use some parts of our website.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">7. Links to Other Websites</h2>
        <p className="mb-4">
          Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third-party's website. We strongly advise you to review the privacy policy of every site you visit. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">8. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: Abhinav@oakley.website</li>
          <li>Website: https://keybolt.uk/</li>
        </ul>
      </div>
    </>
  );
};

export default PrivacyPolicy;
