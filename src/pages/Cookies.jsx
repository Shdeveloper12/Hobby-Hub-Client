import React from "react";

const Cookies = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Cookie Policy</h1>
      <p>
        HobbyHub uses cookies to enhance user experience, analyze traffic, and
        provide social media features. By continuing to browse our site, you
        consent to our use of cookies.
      </p>

      <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help us remember your preferences, login status, and
        customize content.
      </p>

      <h2 className="text-xl font-semibold">2. Types of Cookies We Use</h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Essential Cookies:</strong> Required for login, navigation,
          and account functionality.
        </li>
        <li>
          <strong>Performance Cookies:</strong> Track how users interact with
          the platform to help us improve it.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> Remember user settings like
          dark mode or preferences.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">3. Managing Cookies</h2>
      <p>
        You can control and delete cookies through your browser settings.
        Disabling cookies may affect site functionality.
      </p>

      <h2 className="text-xl font-semibold">4. Third-Party Cookies</h2>
      <p>
        We may use third-party tools (e.g., Google Analytics) which may place
        their own cookies to collect anonymized data.
      </p>
    </div>
  );
};

export default Cookies;
