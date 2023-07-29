 let Plumber = {
  service_id: "1",
  service_name: "Plumbing",
  description:"Professional plumbing services for residential and commercial clients.",
    
  service_categories: [
    // {
    //   category_id: "1",
    //   category_name: "Pipe Repairs",
    //   category_description:
    //     "Fixing leaks, burst pipes, and damaged plumbing lines.",
    //   category_services: [
        {
          service_id: "101",
          service_name: "Fixing Leaks",
          price: 50,
          currency: "USD",
        },
        {
          service_id: "102",
          service_name: "Repairing Burst Pipes",
          price: 100,
          currency: "USD",
        },
        {
          service_id: "103",
          service_name: "Replacing Plumbing Lines",
          price: 150,
          currency: "USD",
        },
    //   ],
    // },
    // {
    //   category_id: "2",
    //   category_name: "Drain Cleaning",
    //   category_description: "Clearing clogged drains and sewer lines.",
    //   category_services: [
        {
          service_id: "201",
          service_name: "Drain Unclogging",
          price: 70,
          currency: "USD",
        },
        {
          service_id: "202",
          service_name: "Sewer Line Cleaning",
          price: 120,
          currency: "USD",
        },
    //   ],
    // },
    // {
    //   category_id: "3",
    //   category_name: "Fixture Installation",
    //   category_description:
    //     "Installing and replacing faucets, sinks, showers, and toilets.",
    //   category_services: [
        {
          service_id: "301",
          service_name: "Faucet Installation",
          price: 40,
          currency: "USD",
        },
        {
          service_id: "302",
          service_name: "Sink Installation",
          price: 60,
          currency: "USD",
        },
        {
          service_id: "303",
          service_name: "Toilet Replacement",
          price: 100,
          currency: "USD",
        },
      ],
    // },
  // ],
  // service_providers: [
  //   {
  //     provider_id: "101",
  //     provider_name: "John Smith",
  //     experience_years: 10,
  //     rating: 4.8,
  //     location: "New Delhi",
  //     contact: "+91 9876543210",
  //   },
  //   {
  //     provider_id: "102",
  //     provider_name: "Emily Johnson",
  //     experience_years: 8,
  //     rating: 4.6,
  //     location: "Mumbai",
  //     contact: "+91 8765432109",
  //   },
  // ]
  
};

let opration= Plumber.service_categories.map((data)=>{
   
   return data.service_name

})
console.log(opration)