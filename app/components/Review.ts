export interface IceCreamReview {
    name: string;
    comment: string;
    image: string;
  }
  
  export const iceCreamReviews: IceCreamReview[] = [
    {
      name: "John Doe",
      comment: "The ice cream was delicious!",
      image: "/images/1.png"
    },
    {
      name: "Jane Smith",
      comment: "I loved the variety of flavors.",
      image: "/images/2.png"
    },
    {
      name: "David Johnson",
      comment: "The service was excellent.",
      image: "/images/3.png"
    },
    {
      name: "Sarah Williams",
      comment: "The ice cream shop is nice.",
      image: "/images/12.png"
    },
    {
      name: "Michael Brown",
      comment: "The prices are affordable.",
      image: "/images/13.png"
    },
    {
      name: "Emily Davis",
      comment: "The staff is friendly and helpful.",
      image: "/images/1.png"
    },
    {
      name: "Daniel Miller",
      comment: "The ice cream quality is top.",
      image: "/images/2.png"
    },
    {
      name: "Olivia Wilson",
      comment: "I highly recommend flavors.",
      image: "/images/8.png"
    },
  
  ];
  
  console.log(iceCreamReviews);