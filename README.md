# Hire a Wifey — Premium Service Website

A polished, conversion-focused landing page prototype for **Hire a Wifey**, a home-help and lifestyle support service serving Hervey Bay and surrounding areas in Queensland, Australia.

The website is designed to help prospective clients understand the service, build trust quickly, and submit an enquiry or booking request. It is currently a front-end prototype with realistic sample content and visual assets, ready to connect to the client’s production booking and CRM workflow.

## What has been built

### Premium responsive homepage

- Warm, premium brand direction using blush pink, soft cream, charcoal, and champagne accents.
- Responsive layout for desktop, tablet, and mobile screens.
- Accessible semantic sections with clear heading hierarchy.
- Smooth scroll navigation and prominent conversion-focused CTAs.
- Sticky mobile booking CTA for easy access on smaller screens.
- Reduced-motion support for visitors who prefer less animation.

### Homepage sections

- Announcement bar and branded navigation.
- Hero section with premium kitchen imagery, service positioning, and booking CTA.
- Trust/value strip highlighting reliable support, local service, and reclaimed time.
- Services overview covering:
  - Home cleaning
  - Laundry and linen
  - Bed making
  - Ironing
  - Home organisation
  - Dishes and kitchen reset
  - Meal preparation support
- “Give your time back” lifestyle section.
- How-it-works process section.
- NDIS and DVA support information.
- Hervey Bay service-area content.
- Client testimonial and social-proof content.
- FAQ accordion.
- Recruitment section for future Wifeys.
- Enquiry form with a front-end success state.
- Footer with navigation, service information, and contact placeholders.

### Visual assets and interactions

- Premium hero image stored locally at `public/images/wifey-premium-kitchen.png`.
- Lucide icons are used for service categories, navigation, benefits, and actions.
- Subtle entrance animations and hover states add polish without distracting from conversion.
- Form validation and confirmation messaging are handled in the browser.
- Placeholder booking and recruitment destinations are clearly structured so they can be replaced with the client’s real URLs.

## Current functionality

The site currently works as a static front-end marketing prototype:

- Navigation links scroll to the relevant sections.
- Booking CTAs point to the booking/enquiry area.
- The enquiry form accepts client details and displays a confirmation state after submission.
- FAQ items can be expanded and collapsed.
- Responsive navigation and mobile layout adapt to viewport size.
- No client data is currently sent to a server, email inbox, CRM, or database.

The form success message is only a demonstration of the intended user experience. It does not yet create a real booking or send an email.

## What the client needs to provide

Before launch, the client should provide or approve the following production details.

### Brand and content

- Final logo files, preferably SVG and PNG versions.
- Confirmed brand colours and typography, if different from the prototype.
- Final business name, tagline, and preferred tone of voice.
- Final service descriptions and pricing or “from” pricing.
- Approved testimonials with client permission to publish.
- Final FAQ answers.
- Final NDIS and DVA wording reviewed by the relevant business representative.

### Business details

- Correct phone number.
- Correct email address.
- Business address or service-area wording.
- ABN and any required business registration details.
- Confirmed Hervey Bay suburbs and surrounding areas served.
- Operating days and hours.
- Cancellation, rescheduling, and minimum-booking policies.
- Any insurance, police-check, safeguarding, or worker-screening statements the business wants displayed.

### Photography and media

- Approved photos of the team and real homes, if available.
- Permission to use every client, team, and property image.
- Final image preferences for the hero and service sections.
- Optional short video or client story content for a future enhancement.

### Booking and enquiry workflow

- Preferred booking method: booking platform, contact form, phone, email, or a combination.
- The destination URL for the booking button.
- The email inbox that should receive enquiries.
- Required enquiry fields, such as property type, suburb, preferred date, service type, support requirements, and budget.
- Whether clients should receive an automatic confirmation email.
- Whether enquiries should be sent to a CRM such as HubSpot, GoHighLevel, Jobber, or another system.

### Legal and compliance

- Privacy Policy URL.
- Terms and Conditions URL.
- Cookie and analytics requirements.
- Accessibility requirements or client-specific policies.
- NDIS-specific service and privacy wording approved for publication.
- Consent wording for enquiry forms and marketing communications.

## Recommended production work before launch

1. Connect the enquiry form to the client’s email, CRM, or booking platform.
2. Replace all sample testimonials, contact details, service copy, and placeholder links.
3. Add the approved logo and final brand assets.
4. Review the page with the client on desktop and mobile.
5. Add Privacy Policy and Terms links.
6. Configure analytics and conversion tracking after the final booking path is selected.
7. Test form delivery, spam protection, validation, and confirmation emails.
8. Test keyboard navigation, screen-reader labels, colour contrast, and reduced-motion behavior.
9. Add SEO verification, sitemap, robots rules, and social sharing metadata if required.
10. Connect the production domain and run a final launch checklist.

## Project structure

```text
app/
  layout.tsx       Global metadata, fonts, and document layout
  page.tsx         Main Hire a Wifey homepage
  globals.css      Brand tokens, responsive styles, animations, and utilities

public/
  images/
    wifey-premium-kitchen.png  Local hero image

README.md          Project documentation and launch handover notes
```

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- Vercel Analytics package included in the project
- Local static image assets

## Local development

Install dependencies using the project package manager, then start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Available scripts:

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Start the production server
```

## Deployment

This project is connected to the v0/Vercel workflow. The project can be reviewed and published from the Vercel project interface. Before publishing for the client, complete the production work listed above and confirm that all contact and booking destinations are live.

## Important prototype note

This version is intentionally presented as a high-fidelity marketing prototype. It includes realistic sample data and polished interactions to demonstrate the finished direction to the client, but it should not be treated as a production booking system until the enquiry workflow, legal content, business details, and final assets have been connected and approved.

## v0 project

Continue editing the project through the connected v0 project:

[Continue working on Hire a Wifey in v0](https://v0.app/chat/projects/prj_nKA4lWAexQfvABpe3y8Z56vAcVqT)

## License

The website content, brand assets, imagery, and business copy should be treated as client-owned project material. Confirm ownership and licensing for all final assets before public launch.
