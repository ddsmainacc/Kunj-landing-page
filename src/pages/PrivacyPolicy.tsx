import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            App Privacy Policy
          </h1>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="text-slate-300 space-y-6 leading-relaxed">
              <p>
                This privacy policy applies to all mobile applications and games (hereinafter referred to as "Applications") developed by Kunj INFOTECH (hereinafter referred to as "Service Provider") provided as free services. These services are offered "AS IS."
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                What information do the Applications obtain and how is it used?
              </h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                User Provided Information
              </h3>
              <p>
                The Applications acquire information you supply when you download and register. Registration with the Service Provider is not mandatory. However, you might not be able to utilize some features unless you register.
              </p>

              <p>
                The Service Provider may use the information you provide to contact you from time to time with important information, required notices, or marketing promotions.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                Automatically Collected Information
              </h3>
              <p>
                The Applications may collect certain information automatically, including but not limited to:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The type of mobile device you use</li>
                <li>Your mobile device's unique device ID</li>
                <li>Your mobile device's IP address</li>
                <li>Your mobile operating system</li>
                <li>The type of mobile Internet browsers you use</li>
                <li>Information about how you use the Applications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Does the Application collect precise real-time location information?
              </h2>
              <p>
                The Applications do not gather precise real-time location information of your device.
              </p>

              <p>
                However, they may collect approximate location data for the following purposes:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Geolocation Services:</strong> To provide features like personalized content, relevant recommendations, and location-based services.
                </li>
                <li>
                  <strong>Analytics and Improvements:</strong> To analyze user behavior, identify trends, and enhance performance and functionality.
                </li>
                <li>
                  <strong>Third-Party Services:</strong> Anonymized location data may be shared with external services to improve the Applications.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Do third parties see and/or have access to information obtained by the Applications?
              </h2>
              <p>
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Applications and services. Your information may also be shared:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>As required by law (e.g., to comply with legal processes)</li>
                <li>When necessary to protect rights, safety, investigate fraud, or respond to government requests</li>
                <li>With trusted service providers who assist the Service Provider under confidentiality agreements</li>
              </ul>

              <p>
                The Applications may use third-party services that have their own privacy policies. Links to their policies:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Google Play Services
                  </a>
                </li>
                <li>
                  <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    AdMob
                  </a>
                </li>
                <li>
                  <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Google Analytics for Firebase
                  </a>
                </li>
                <li>
                  <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Firebase Crashlytics
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/about/privacy/update/printable" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Unity
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                What are my opt-out rights?
              </h2>
              <p>
                You can stop all collection of information by uninstalling the Application using the standard uninstall process available on your mobile device or marketplace.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Data Retention Policy, Managing Your Information
              </h2>
              <p>
                The Service Provider retains user-provided data for as long as you use the Applications and for a reasonable time afterward. Automatically collected data is retained for up to 24 months and may thereafter be stored in aggregate.
              </p>

              <p>
                If you would like the Service Provider to delete user-provided data, please contact at{' '}
                <a href="mailto:contact@kunjinfotech.com" className="text-blue-400 hover:text-blue-300">
                  contact@kunjinfotech.com
                </a>. Some data may be required for the Applications to function properly.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Children
              </h2>
              <p>
                The Service Provider does not knowingly collect personal information from children under 13 years of age. If it is discovered that such data has been collected, it will be deleted immediately. If you are a parent or guardian and believe your child has provided personal information, please contact the Service Provider.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Security
              </h2>
              <p>
                The Service Provider is concerned about safeguarding the confidentiality of your information. Physical, electronic, and procedural safeguards are used to protect the data. However, no security system can prevent all potential breaches.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Changes
              </h2>
              <p>
                This Privacy Policy may be updated from time to time. Changes will be reflected by updating this page. Continued use of the Applications signifies acceptance of any changes.
              </p>

              <p>
                This Privacy Policy is effective as of 2025-04-28.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Your Consent
              </h2>
              <p>
                By using the Applications, you consent to the Service Provider processing your information as described in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions regarding privacy while using the Applications, please contact the Service Provider at{' '}
                <a href="mailto:contact@kunjinfotech.com" className="text-blue-400 hover:text-blue-300">
                  contact@kunjinfotech.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
