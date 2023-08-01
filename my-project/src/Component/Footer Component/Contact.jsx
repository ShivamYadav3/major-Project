import React from "react";

function Contact() {
  return (
    <div className=" flex items-center justify-center border">
      <div className=" flex flex-col gap-y-10 font-bold text-4xl">
        <div>
          <div className="flex justify-center">Contact Us</div>
          <h3 className="flex justify-center text-lg ">
            Our mission is to empower millions of service providers by offering
            services at home in new ways.
          </h3>
          <div>
            <div className="text-base text-lime-950">
              Office Address: Plot No. 3037/18, Akash Vihar Road, Near Kali Mata
              Mandir Temple, Ground Floor, Kanchan Vihar, Vijay Nagar, Jabalpur
              - 482002, Madhya Pradesh, India.
            </div>
            <div className="text-base text-lime-950">
              Contact Details: Phone: +91 8982296937 Phone: +91 8770353470
              Phone: +91 8458825347
            </div>
            <div className="text-base text-lime-950">
              Email: HomeService.jbp@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
