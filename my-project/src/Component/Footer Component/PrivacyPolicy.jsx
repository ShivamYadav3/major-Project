import React from "react";

function PrivacyPolicy() {
  return (
    <div className=" h-[523px] flex items-center justify-center border">
      <div className=" flex flex-col gap-y-10 font-bold text-4xl">
        <div>Your Privacy Is our Privacy</div>
        <p className="text-base text-lime-950">
          Welcome to our technological platform ("the Platform"). By using our
          services, you agree to comply with and be bound by the following terms
          and conditions. Please read these terms carefully before using the
          Platform. If you do not agree with any part of these terms, please
          refrain from using our services.
        </p>

        <div>
          <h3 className="text-lg">1. Information We Collect</h3>
          <p className="text-sm">
            <div>
              Personal Information: This includes your name, email address,
              phone number, and other information you provide when creating an
              account or booking a service.
            </div>
            <div>
              Location Data: We may collect your device's location data to
              provide you with location-based services.
            </div>
            <div>
              Payment Information: We collect payment details when you make
              transactions on the Platform. However, we do not store credit card
              information on our servers.
            </div>
          </p>
        </div>
        <div>
          <h3 className="text-lg">2. How We Use Your Information</h3>
          <p className="text-sm">
            <div>
              To provide and improve our services, including processing service
              bookings and payments.
            </div>
            <div>
              To communicate with you, respond to inquiries, and provide
              customer support.
            </div>
            <div>
              To send you promotional materials and updates about our services,
              but only if you have provided your consent to receive such
              communications.
            </div>
          </p>
        </div>
        <div>
          <h3 className="text-lg">7. Children's Privacy</h3>
          <p className="text-sm">
            The Platform is not intended for use by individuals under the age of
            18. We do not knowingly collect personal information from children.
            If you are a parent or guardian and believe that your child has
            provided us with their information, please contact us, and we will
            promptly remove such data from our records.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
