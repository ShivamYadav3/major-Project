import React from "react";

function AboutUs() {
  return (
    <div className=" h-[523px] flex items-center justify-center border">
      <div className=" flex flex-col gap-y-10 font-bold text-4xl">
        <div className="flex justify-center">AboutUs</div>
        <div>
          <h2 className="flex justify-center">Who we are</h2>
          <p className="text-base text-lime-950">
            Welcome to our firm! We are a leading technological platform that
            brings a variety of easy services to your door. Our objective is to
            give you with the greatest home experience possible, including
            beauty treatments, haircuts, massage therapy, cleaning, plumbing,
            carpentry, appliance repair, painting, and much more. You may now
            easily order these services and enjoy them in the comfort of your
            own home, at a time that is convenient for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
