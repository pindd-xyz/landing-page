# Components Structure

This document outlines the componentized structure of the pindd.xyz landing page.

## Created Components

All components are located in `src/components/pieces/`:

### 1. `animations.ts`
- Contains reusable Framer Motion animation variants
- Exports: `fadeInUp`, `fadeInLeft`, `staggerChildren`

### 2. `navigation.tsx`
- Fixed navigation header with logo and menu links
- Responsive design with mobile considerations
- Contact button with smooth scroll to contact section

### 3. `hero-section.tsx`
- Hero section with main headline and CTAs
- Animated background with dotted pattern
- Responsive design with illustration on desktop

### 4. `services-section.tsx`
- Three service cards (Web Apps, Mobile Apps, Staff Augmentation)
- Icons from lucide-react
- Hover animations and responsive grid

### 5. `about-section.tsx`
- Two-column layout for mission and culture
- Icon-based feature list
- Responsive design

### 6. `process-section.tsx`
- Three-step process visualization
- Horizontal stepper with separators
- Responsive (vertical on mobile, horizontal on desktop)

### 7. `contact-section.tsx`
- Contact form with state management
- Alternative contact methods (Calendly, email)
- Two-column responsive layout

### 8. `footer.tsx`
- Simple footer with social links
- Copyright information

### 9. `index.ts`
- Barrel export file for easy imports

## Main Page Structure

The main `page.tsx` now imports and uses all components:

```tsx
import {
  Navigation,
  HeroSection,
  ServicesSection,
  AboutSection,
  ProcessSection,
  ContactSection,
  Footer
} from "@/components/pieces";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
```

## Benefits of This Structure

1. **Reusability**: Each component can be easily reused or modified
2. **Maintainability**: Changes to specific sections are isolated
3. **Testability**: Each component can be tested independently
4. **Code Organization**: Clear separation of concerns
5. **Performance**: Components can be optimized individually
6. **Development Experience**: Easier to work with smaller, focused components

## CSS Classes Used

The components rely on the following custom CSS classes defined in `globals.css`:
- `.accent-text` - For the purple accent color on ".xyz"
- `.dotted-bg` - For the dotted background pattern
- `.btn-hover` - For button hover animations

All components use Tailwind CSS for styling and maintain responsive design principles.
