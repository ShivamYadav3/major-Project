import React from "react";

function AboutUs() {
  // if (true) throw new Error("AboutUs");
  return (
    <div className=" h-[517px] flex justify-start p-4 pt-6 border flex-col gap-y-6 font-bold text-4xl">
      <div className="text-center">AboutUs</div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl">Who we are</h2>
        <p className="text-base text-lime-950">
          Welcome to our firm! We are a leading technological platform that
          brings a variety of easy services to your door. Our objective is to
          give you with the greatest home experience possible, including beauty
          treatments, haircuts, massage therapy, cleaning, plumbing, carpentry,
          appliance repair, painting, and much more. You may now easily order
          these services and enjoy them in the comfort of your own home, at a
          time that is convenient for you.
        </p>

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
          Phone: +91 8458825347
        </div>

        <div className="text-base text-lime-950">
          Email: HomeService.jbp@gmail.com
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
