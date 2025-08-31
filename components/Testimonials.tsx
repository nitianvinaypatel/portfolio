import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Vinay has been instrumental in redesigning our Trifit fitness app. His React Native expertise and attention to UI/UX details have significantly improved user engagement. His collaboration with our backend team has been seamless.",
      name: "Yash Khandelwal",
      designation: "Co-Founder, Dashwave.io",
      src: "https://media.licdn.com/dms/image/v2/D5603AQFvQArzhaf9dg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720725113074?e=1759363200&v=beta&t=loP0H3B_BdAryd_0zzC_tMS1tpcnfttHwd6B8ryrQ4E",
    },
    {
      quote:
        "During his internship at DevOrbital, Vinay consistently delivered high-quality code across multiple client projects. His proficiency in React Native, React.js, and the MERN stack made him an invaluable team member.",
      name: "Partha Sarathi Ghosh",
      designation: "Founder, DevOrbital",
      src: "https://media.licdn.com/dms/image/v2/D5603AQG-M894MEWaDw/profile-displayphoto-shrink_400_400/B56ZYqEbfEGcAk-/0/1744462527121?e=1759363200&v=beta&t=KdgKaA35YxQR9PXfL-tk-ALYbf62Pe9LuOCp2yrZLq8",
    },
    {
      quote:
        "Vinay's work on the DigiRide project was exceptional. His development of both the Rider App and Admin Dashboard showcased excellent technical skills in React Native and Next.js. The 30% latency reduction he achieved was impressive.",
      name: "	Dr. Lalhruaizela",
      designation: "Professor, NIT Mizoram",
      src: "https://nitmz.ac.in/ImageGenerator.aspx?imgID=200420&command=profile_pic&w=100&h=100",
    },
    {
      quote:
        "During his 2-month internship with us, Vinay demonstrated strong technical skills in React.js and Node.js. His problem-solving abilities and adaptability while working on web applications were remarkable for someone so early in their career.",
      name: "Balaji Mishra",
      designation: "Founder, Software Giant",
      src: "https://media.licdn.com/dms/image/v2/D5603AQFaSO4eN5E9vA/profile-displayphoto-shrink_400_400/B56ZcGy3sIHwAg-/0/1748165688738?e=1759363200&v=beta&t=HtI-KKsnFGlsZXCN077j0cRWGLPOqpecXxDRVaTe5t4",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
