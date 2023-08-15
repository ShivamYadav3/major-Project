import React from "react";

function Help() {
  return (
    <div className="flex flex-col gap-5 font-bold text-4xl p-4">
      <div className="text-center">How can I help you ?</div>
      <p className="text-base text-lime-950">
        Welcome to our Help Center! We are dedicated to providing you with the
        support and guidance you need to make the most of our technological
        platform. Below, you'll find helpful resources and information to
        address common questions and concerns:
      </p>
      <div>
        <h3 className="text-lg">1. Frequently Asked Questions (FAQ)</h3>
        <p className="text-sm">
          Explore our comprehensive FAQ section to find answers to frequently
          asked questions about our services, booking process, payments, and
          more. Save time by finding quick solutions without contacting customer
          support.
        </p>
      </div>
      <div>
        <h3 className="text-lg">2. Account Assistance</h3>
        <p className="text-sm">
          Learn how to create an account, update your personal information, and
          manage your preferences. If you encounter any issues with your
          account, this section will guide you through the steps to resolve
          them.
        </p>
      </div>
      <div>
        <h3 className="text-lg">3. Booking Services</h3>
        <p className="text-sm">
          Discover how to book a service and navigate through our user-friendly
          booking process. This section will walk you through the steps to
          schedule services according to your preferences.
        </p>
      </div>
      <div>
        <h3 className="text-lg">4. Payment and Billing</h3>
        <p className="text-sm">
          Understand our payment methods, billing process, and how to resolve
          payment-related issues. We strive to ensure a seamless and secure
          payment experience for our users.
        </p>
      </div>
      <div>
        <h3 className="text-lg">5. Service Provider Information</h3>
        <p className="text-sm">
          Get insights into our Service Providers, their qualifications,
          ratings, and reviews. This section will help you make informed
          decisions when choosing the right Service Provider for your needs.
        </p>
      </div>
      <div>
        <h3 className="text-lg">6. Cancellations and Refunds</h3>
        <p className="text-sm">
          Learn about our cancellation policy and the process for requesting
          refunds. We aim to provide transparency and flexibility in case you
          need to modify or cancel a booking.
        </p>
      </div>
    </div>
  );
}

export default Help;
