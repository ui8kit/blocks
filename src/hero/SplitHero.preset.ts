import { Info, Rocket, BookOpen, Code, ExternalLink, Zap, Shield } from 'lucide-react';

export const SplitHeroPreset = [
{
				type: "hero.split",
				variant: "media",
				props: { content: { badge: "New Release", title: "Build the future with modern technology", description: "Transform your ideas into reality with our cutting-edge platform. Experience unparalleled performance, security, and scalability that grows with your business.", image: { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Modern technology dashboard" }, primaryButtonText: "Get Started Free", secondaryButtonText: "View Demo", primaryButtonIcon: Rocket, secondaryButtonIcon: Info }, useContainer: true }
			},
{
				type: "hero.split",
				variant: "media",
				props: { content: { badge: "Developer Tools", title: "Code faster, deploy smarter, scale better", description: "Our comprehensive developer platform provides everything you need to build, test, and deploy applications with confidence. Join thousands of developers who trust our tools.", image: { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Developer coding environment" }, primaryButtonText: "Start Building", secondaryButtonText: "Documentation", primaryButtonIcon: Code, secondaryButtonIcon: BookOpen }, leftMedia: true, useContainer: true }
			},
{
				type: "hero.split",
				variant: "gallery",
				props: { content: { topButton: { text: "🎉 Announcing our Series A funding", href: "#" }, badge: "Funding News", title: "We raised $50M to accelerate innovation", description: "With this new funding, we're doubling down on our mission to democratize technology and make powerful tools accessible to everyone.", images: [{ id: "1", src: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Portfolio showcase 1" }, { id: "2", src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Portfolio showcase 2" }, { id: "3", src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Portfolio showcase 3" }], primaryButtonText: "Read Announcement", secondaryButtonText: "Join Journey", primaryButtonIcon: ExternalLink, secondaryButtonIcon: Rocket }, useContainer: true, className: "bg-gradient-to-br from-primary/10 to-secondary/10" }
			},
{
				type: "hero.split",
				variant: "gallery",
				props: { content: { badge: "Portfolio", title: "Showcase your work beautifully", description: "Create stunning portfolios and galleries that captivate your audience. Our platform makes it easy to present your work in the best possible light.", images: [{ id: "1", src: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Portfolio showcase 1" }, { id: "2", src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Portfolio showcase 2" }, { id: "3", src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Portfolio showcase 3" }], primaryButtonText: "Explore Gallery", secondaryButtonText: "Learn More", primaryButtonIcon: BookOpen, secondaryButtonIcon: Code }, leftMedia: true, useContainer: true }
			},
{
				type: "hero.split",
				variant: "media",
				props: { content: { badge: "Enterprise Security", title: "Protect your business with enterprise-grade security", description: "Our comprehensive security suite provides advanced threat protection, compliance management, and peace of mind for businesses of all sizes.", image: { src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", alt: "Security dashboard interface" }, primaryButtonText: "Start Audit", secondaryButtonText: "View Features", primaryButtonIcon: Shield, secondaryButtonIcon: Zap }, leftMedia: true, useContainer: true, className: "bg-gradient-to-r from-secondary to-primary/10" }
			}
];
