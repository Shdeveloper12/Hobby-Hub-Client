import React from "react";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - HobbyHub</title>
        <meta name="description" content="Learn about the privacy policy of HobbyHub" />
      </Helmet>
      <div className="max-w-4xl mx-auto my-12 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p>
          At HobbyHub, we are committed to protecting your privacy. This policy
        outlines how we collect, use, and safeguard your personal information.
      </p>

      <h2 className="text-xl font-semibold">1. Information We Collect</h2>
      <ul className="list-disc pl-6">
        <li>
          Personal details like name, email address, and profile image during
          registration.
        </li>
        <li>
          Usage data such as pages visited, groups joined, and interactions with
          content.
        </li>
        <li>Optional information you provide in your profile or posts.</li>
      </ul>

      <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6">
        <li>To personalize your experience and improve platform features.</li>
        <li>
          To communicate with you regarding updates, new features, or support.
        </li>
        <li>To ensure safety and prevent fraudulent activity.</li>
      </ul>

      <h2 className="text-xl font-semibold">3. Data Sharing</h2>
      <p>
        We do not sell or rent your personal information. Your data is only
        shared with third-party service providers necessary for operating the
        platform (e.g., cloud hosting, analytics).
      </p>

      <h2 className="text-xl font-semibold">4. Data Retention</h2>
      <p>
        We retain your data as long as your account is active or needed to
        provide services. You may request account deletion at any time.
      </p>

      <h2 className="text-xl font-semibold">5. Your Rights</h2>
      <p>
        You have the right to access, modify, or delete your personal data. For
        any concerns, contact our support team at privacy@hobbyhub.com.
      </p>
    </div>
    </>
  );
};

export default Privacy;
