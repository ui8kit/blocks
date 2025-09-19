// Sample testimonial data
const sampleTestimonials = [
  {
    id: "testimonial-1",
    rating: 5,
    quote: "This product has completely transformed how our team works. The intuitive design and powerful features make complex tasks feel effortless. I can't imagine going back to our old workflow.",
    author: "Sarah Johnson",
    position: "Product Manager",
    description: "This product has completely transformed how our team works.",
    company: "TechStart Inc",
    avatar: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      alt: "Sarah Johnson"
    },
    verified: true
  },
  {
    id: "testimonial-2", 
    rating: 5,
    quote: "Outstanding customer service and product quality. The support team went above and beyond to ensure we had everything set up correctly. Highly recommend to anyone looking for a reliable solution.",
    author: "Michael Chen",
    position: "CTO",
    description: "Outstanding customer service and product quality.",
    company: "Digital Solutions Co",
    verified: true
  },
  {
    id: "testimonial-3",
    rating: 4,
    quote: "Great value for money. The features are comprehensive and the learning curve is minimal. Our productivity has increased significantly since implementation.",
    description: "Great value for money with comprehensive features.",
    author: "Emily Rodriguez",
    position: "Operations Director",
    company: "Growth Partners LLC",
    avatar: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      alt: "Emily Rodriguez"
    },
    verified: false
  },
  {
    id: "testimonial-4",
    rating: 5,
    quote: "Exceptional quality and attention to detail. The team clearly cares about delivering a superior user experience. This has become an essential tool in our daily operations.",
    author: "David Park",
    position: "Senior Developer",
    description: "Exceptional quality and attention to detail.",
    company: "CodeCraft Studios",
    verified: true
  },
  {
    id: "testimonial-5",
    rating: 5,
    quote: "Seamless integration and fantastic results. The ROI was evident within the first month of usage. Couldn't be happier with our decision.",
    author: "Lisa Thompson",
    position: "Marketing Director",
    description: "Seamless integration and fantastic results.",
    company: "Creative Agency Pro",
    avatar: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      alt: "Lisa Thompson"
    },
    verified: true
  }
];

export const SplitTestimonialPreset = [
{
				type: "testimonial.split",
				variant: "featured",
				props: { content: { title: "Trusted by Industry Leaders", description: "See what our customers are saying about their experience with our platform and how it's transformed their business operations.", badge: "Customer Stories", testimonials: sampleTestimonials, ctaText: "Read All Reviews" }, mediaPosition: "right", useContainer: true }
			},
{
				type: "testimonial.split",
				variant: "carousel",
				props: { content: { title: "Join Thousands of Happy Customers", subtitle: "Discover why companies of all sizes choose our solution to drive their success.", badge: "Customer Reviews", testimonials: sampleTestimonials }, mediaPosition: "left", useContainer: true }
			},
{
				type: "testimonial.split",
				variant: "stats",
				props: { content: { title: "Proven Results Speak for Themselves", description: "Our customers consistently rate us highly and see measurable improvements in their business metrics within weeks of implementation.", testimonials: sampleTestimonials, stats: { totalReviews: "2,500+", averageRating: "4.9", satisfied: "98%" }, ctaText: "Start Your Free Trial" }, mediaPosition: "right", useContainer: true }
			}
];
