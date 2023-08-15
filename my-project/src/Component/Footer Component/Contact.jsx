import React from "react";

function Contact() {
  return (
    <div className="h-[517px] flex flex-col gap-y-10 font-bold text-4xl p-5">
      <div className="flex justify-center">Contact Us</div>
      <h3 className="text-lg">
        Our mission is to empower millions of service providers by offering
        services at home in new ways.
      </h3>
      <div className="flex flex-col gap-6">
        <div className="text-base text-lime-950">
          Office Address: <br />
          Plot No. 3037/18, Akash Vihar Road, Near Kali Mata Mandir Temple,
          <br />
          Ground Floor, Kanchan Vihar, Vijay Nagar,
          <br /> Jabalpur - 482002, Madhya Pradesh, India.
        </div>

        <div className="text-base text-lime-950">
          Contact Details:
          <br />
          Phone: +91 8982296937 <br />
          Phone: +91 8770353470 <br />
          Phone: +91 8458825347 <br />
          <br />
          Call Me Back <br />
          Phone: +91 9993565347
        </div>

        <div className="text-base text-lime-950">
          Email: HomeService.jbp@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Contact;
