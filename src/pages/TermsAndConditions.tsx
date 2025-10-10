import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
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
            App Terms and Condition
          </h1>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="text-slate-300 space-y-6 leading-relaxed">
              <p>
                These terms and conditions apply to all mobile applications and games (hereinafter referred to as "Applications") for mobile devices that were created by Kunj INFOTECH (hereinafter referred to as "Service Provider") as Free services.
              </p>

              <p>
                By downloading or utilizing the Applications, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Applications. Unauthorized copying, modification of the Applications, any part of the Applications, or the Service Provider's trademarks is strictly prohibited. Any attempts to extract the source code of the Applications, translate the Applications into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Applications remain the property of the Service Provider.
              </p>

              <p>
                The Service Provider is dedicated to ensuring that the Applications are as beneficial and efficient as possible. As such, they reserve the right to modify the Applications or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Applications or their services will be clearly communicated.
              </p>

              <p>
                The Applications store and process personal data that you have provided to the Service Provider in order to provide the service. It is your responsibility to maintain the security of your device and access to the Applications. The Service Provider strongly advises against jailbreaking or rooting your device, which involves removing software restrictions and limitations imposed by the official operating system. Such actions could expose your device to malware, viruses, malicious programs, compromise security features, and may result in the Applications not functioning correctly or at all.
              </p>

              <p>
                Please note that the Applications utilize third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Google Play Services
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/admob/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    AdMob
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/analytics/terms/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Google Analytics for Firebase
                  </a>
                </li>
                <li>
                  <a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Firebase Crashlytics
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/legal/terms/plain_text_terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://unity3d.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Unity
                  </a>
                </li>
              </ul>

              <p>
                Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Applications require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Applications do not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.
              </p>

              <p>
                If you are using the Applications outside of a Wi-Fi area, please be aware that your mobile network provider's terms still apply. Consequently, you may incur charges from your provider for data usage or other third-party charges. By using the Applications, you accept responsibility for any such charges, including roaming data charges if applicable. If you are not the bill payer for the device you are using, it is assumed that you have obtained permission from the bill payer.
              </p>

              <p>
                Similarly, the Service Provider cannot always assume responsibility for your usage of the Applications. It is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the service, the Service Provider cannot be held responsible.
              </p>

              <p>
                In terms of the Service Provider's responsibility for your use of the Applications, while they strive to ensure that they are updated and accurate, they rely on third parties to provide information. The Service Provider accepts no liability for any loss, direct or indirect, resulting from reliance on the functionality of the Applications.
              </p>

              <p>
                The Service Provider may update the Applications at some point. The Applications are currently available according to the requirements for the operating system (and for any additional systems the Service Provider may decide to extend availability to) and may change. You may need to download updates to continue using the Applications. The Service Provider does not guarantee that updates will always be provided to maintain compatibility with every device or operating system version. You agree to always accept updates when offered. The Service Provider may also cease providing the Applications and terminate their availability at any time without prior notice. Upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the Applications and delete them from your device if necessary.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Changes to These Terms and Conditions
              </h2>
              <p>
                The Service Provider may periodically update these Terms and Conditions. You are advised to review this page regularly for any changes. Changes will be posted on this page.
              </p>

              <p>
                These Terms and Conditions are effective as of 2025-04-28.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions or suggestions about the Terms and Conditions, please contact the Service Provider at{' '}
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

export default TermsAndConditions;
