import React from "react";

function TermsCondition() {
  return (
    <div className=" flex items-center justify-center border p-4">
      <div className=" flex flex-col gap-5 font-bold text-4xl">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">Terms & Conditions</div>
          <p className="text-base text-lime-950">
            Welcome to our technological platform ("the Platform"). By using our
            services, you agree to comply with and be bound by the following
            terms and conditions. Please read these terms carefully before using
            the Platform. If you do not agree with any part of these terms,
            please refrain from using our services.
          </p>
        </div>

        <div>
          <h3 className="text-lg">1. Acceptance of Terms</h3>
          <p className="text-sm">
            By accessing or using our Platform, you acknowledge that you have
            read, understood, and agree to be bound by these terms and
            conditions, as well as our Privacy Policy. These terms constitute a
            legally binding agreement between you and our firm.
          </p>
        </div>

        <div>
          <h3 className="text-lg">2. Services Offered</h3>
          <p className="text-sm">
            Our Platform provides a range of services, including beauty
            treatments, haircuts, massage therapy, cleaning, plumbing,
            carpentry, appliance repair, painting, and more. These services are
            offered by independent service providers ("Service Providers")
            registered on our Platform.
          </p>
        </div>

        <div>
          <h3 className="text-lg">3. Service Bookings</h3>
          <p className="text-sm">
            When you book a service through our Platform, you agree to provide
            accurate and complete information. Service availability may vary
            based on location, time, and other factors. We will make reasonable
            efforts to ensure the timely provision of services, but we do not
            guarantee the availability of specific service providers at all
            times.
          </p>
        </div>

        <div>
          <h3 className="text-lg">4. Service Payments</h3>
          <p className="text-sm">
            Payment for services must be made through our secure payment
            gateway. Prices displayed on the Platform are subject to change and
            may vary based on the type and scope of services requested. You
            agree to pay the specified amount for the service at the time of
            booking.
          </p>
        </div>

        <div>
          <h3 className="text-lg">5. Cancellations and Refunds</h3>
          <p className="text-sm">
            If you wish to cancel a service booking, please do so within the
            specified time frame. Cancellation policies and applicable fees are
            outlined on the Platform. Refunds, if applicable, will be processed
            according to our Refund Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsCondition;
