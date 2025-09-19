import { ArrowRight, Play, Users, Zap, Shield, ExternalLink, Rocket, Award, Download, Globe, TrendingUp } from 'lucide-react';

export const SplitCTAPreset = [
{
				type: "cta.split",
				variant: "withImage",
				props: { content: { badge: "New Product", title: "Revolutionize Your Workflow", description: "Experience the next generation of productivity tools designed to streamline your processes and boost team collaboration.", buttons: [{ id: "start-free", text: "Start Free Trial", variant: "default", lucideIcon: ArrowRight }, { id: "see-demo", text: "See Demo", variant: "outline", lucideIcon: Play }], image: { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", alt: "Team collaboration workspace" }, features: [{ id: "real-time", title: "Real-time Collaboration", description: "Work together seamlessly", lucideIcon: Users }, { id: "secure", title: "Enterprise Security", description: "Your data is always protected", lucideIcon: Shield }, { id: "fast", title: "Lightning Fast", description: "Optimized for peak performance", lucideIcon: Zap }] }, leftMedia: false }
			},
{
				type: "cta.split",
				variant: "withBackground",
				props: { content: { badge: "Premium", title: "Unlock Your Full Potential", description: "Take your business to the next level with our comprehensive suite of advanced tools and premium features.", buttons: [{ id: "upgrade-now", text: "Upgrade Now", variant: "default", lucideIcon: Rocket }, { id: "compare-plans", text: "Compare Plans", variant: "outline", lucideIcon: ExternalLink }], backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", stats: { users: "100K+", rating: "4.8", downloads: "5M+" } }, leftMedia: true }
			},
{
				type: "cta.split",
				variant: "withStats",
				props: { content: { title: "Trusted by Thousands Worldwide", description: "Join a growing community of successful businesses that have transformed their operations with our proven platform.", buttons: [{ id: "get-started", text: "Get Started Today", variant: "default", lucideIcon: ArrowRight }, { id: "read-stories", text: "Read Success Stories", variant: "outline", lucideIcon: Award }], stats: { users: "75K+", rating: "4.9", downloads: "2.5M+" } }, leftMedia: false }
			},
{
				type: "cta.split",
				variant: "withDevices",
				props: { content: { badge: "Cross-Platform", title: "Access Anywhere, Anytime", description: "Our platform works seamlessly across all your devices, ensuring you stay productive whether you're at your desk or on the go.", buttons: [{ id: "download-app", text: "Download App", variant: "default", lucideIcon: Download }, { id: "web-version", text: "Try Web Version", variant: "outline", lucideIcon: Globe }], devices: { desktop: "85%", mobile: "92%", tablet: "78%" } }, leftMedia: true }
			},
{
				type: "cta.split",
				variant: "withFeatures",
				props: { content: { badge: "Feature Rich", title: "Everything You Need in One Place", description: "Discover how our comprehensive feature set can transform the way you work and help you achieve better results.", buttons: [{ id: "explore-all", text: "Explore All Features", variant: "default", lucideIcon: Rocket }, { id: "schedule-demo", text: "Schedule Demo", variant: "outline", lucideIcon: Play }], features: [{ id: "analytics", title: "Advanced Analytics", description: "Get deep insights into your performance with comprehensive reporting and real-time dashboards.", lucideIcon: TrendingUp }, { id: "automation", title: "Smart Automation", description: "Automate repetitive tasks and workflows to save time and reduce human error.", lucideIcon: Zap }, { id: "collaboration", title: "Team Collaboration", description: "Work together efficiently with built-in communication and project management tools.", lucideIcon: Users }, { id: "security", title: "Enterprise Security", description: "Protect your data with bank-level encryption and advanced security protocols.", lucideIcon: Shield }] }, leftMedia: false }
			}
];
