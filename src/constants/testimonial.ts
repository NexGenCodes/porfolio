export interface Testimonial {
  name: string;
  title: string;
  company?: string;
  quote: string;
  avatar: string;
}

const avatar = "https://placehold.co/200x200";

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    title: "CEO at TechStart",
    quote:
      "Working with this developer was a game-changer for our startup. They delivered a complex e-commerce platform ahead of schedule and with all the features we needed. Their technical expertise and communication skills made the entire process smooth.",
    avatar: avatar,
  },
  {
    name: "Michael Chen",
    title: "Product Manager",
    company: "InnovateCorp",
    quote:
      "I've worked with many developers over my career, but few have the combination of technical skill and business understanding that this developer brings to the table. They don't just write code; they solve business problems.",
    avatar: avatar,
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director",
    company: "GrowthBrand",
    quote:
      "Our mobile app project was stalling until we brought this developer on board. They quickly identified the issues, proposed elegant solutions, and implemented them flawlessly. Our user engagement has increased by 45% since the relaunch.",
    avatar: avatar,
  },
  {
    name: "David Kim",
    title: "CTO",
    company: "HealthTech Solutions",
    quote:
      "As a healthcare technology company, we needed a developer who could handle sensitive data while building intuitive interfaces. This developer exceeded our expectations, delivering a HIPAA-compliant solution that our medical staff love using.",
    avatar: avatar,
  },
];
