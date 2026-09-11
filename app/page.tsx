'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BedDouble,
  Check,
  ChevronDown,
  Clock3,
  CookingPot,
  HeartHandshake,
  Home,
  Shirt,
  Leaf,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  WashingMachine,
  X,
} from 'lucide-react'

const services = [
  { icon: Sparkles, title: 'Cleaning', text: 'A fresh, sparkling home without the weekend clean-up.' },
  { icon: WashingMachine, title: 'Laundry', text: 'Wash, fold and put away — because baskets have a limit.' },
  { icon: BedDouble, title: 'Beds & linen', text: 'Fresh sheets, made beds and a beautiful start to the day.' },
  { icon: Shirt, title: 'Ironing', text: 'Crisp clothes and one less thing waiting for you.' },
  { icon: Home, title: 'Home organisation', text: 'Calm, considered spaces that make everyday life easier.' },
  { icon: CookingPot, title: 'Meal preparation', text: 'A helping hand in the kitchen, from prep to pack-up.' },
]

const faqs = [
  ['What is a Wifey?', 'A Wifey is your trusted household helper. We take care of the practical jobs around your home, from cleaning and laundry to meal prep and organisation, so you can spend your time where it matters.'],
  ['What areas do you service?', 'We currently service Hervey Bay and surrounding areas. Get in touch and we can confirm availability for your suburb.'],
  ['Can I customise what my Wifey does?', 'Absolutely. Every home is different, so we tailor your visit around the jobs that will make the biggest difference to your week.'],
  ['Do you help NDIS and DVA clients?', 'Yes. We proudly support eligible NDIS and DVA clients with reliable, respectful household assistance. Contact us to discuss your needs.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground pb-20 md:pb-0">
      <div className="announcement">Now welcoming new clients across Hervey Bay <span>•</span> Your home, handled.</div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="site-shell flex h-[76px] items-center justify-between">
          <a href="#top" className="brand-mark" aria-label="Hire a Wifey home">hire a <strong>wifey</strong><span>.</span></a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[84px] flex-col gap-5 rounded-2xl border border-border bg-background p-6 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label="Main navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
            <a href="#become-a-wifey" onClick={() => setMenuOpen(false)}>Become a Wifey</a>
            <a href="#enquire" className="nav-cta" onClick={() => setMenuOpen(false)}>Book a Wifey <ArrowRight size={15} /></a>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="relative z-10">
            <p className="eyebrow"><Sparkles size={15} /> More than a clean</p>
            <h1>More time for <em>your</em> life.</h1>
            <p className="hero-copy">We take care of home — so you can take care of what matters. Hire a Wifey for the cleaning, laundry, meals and little things that make a big difference.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="button button-primary" href="#enquire">Book a Wifey <ArrowRight size={18} /></a>
              <a className="button button-quiet" href="#services">See what we do <span>↓</span></a>
            </div>
            <div className="trust-line"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><span><strong>Loved by local families</strong><br /><Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <Star size={13} fill="currentColor" /> <small>5.0 from our clients</small></span></div>
          </div>
          <div className="hero-image-wrap"><div className="hero-image" role="img" aria-label="A smiling household helper folding fresh laundry in a bright home" /><div className="hero-note"><HeartHandshake size={20} /><span><strong>We&apos;ve got this.</strong><br />Your home is in good hands.</span></div></div>
        </div>
      </section>

      <section className="value-strip"><div className="site-shell grid gap-5 md:grid-cols-3"><div><Clock3 /><span><strong>Your time back</strong><br />More space for the things you love.</span></div><div><HeartHandshake /><span><strong>Care you can trust</strong><br />Friendly, reliable and genuinely helpful.</span></div><div><Leaf /><span><strong>Home, your way</strong><br />Flexible help that fits your life.</span></div></div></section>

      <section id="services" className="section section-white"><div className="site-shell"><div className="section-heading"><p className="eyebrow">The wifey way</p><h2>A little help goes <em>a long way.</em></h2><p>We&apos;re not just here to clean. We&apos;re here to make home feel lighter, calmer and more yours.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="icon-bubble"><Icon size={24} strokeWidth={1.7} /></div><h3>{title}</h3><p>{text}</p><a href="#enquire" aria-label={`Enquire about ${title}`}>Tell me more <ArrowRight size={15} /></a></article>)}</div></div></section>

      <section className="story-section"><div className="site-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-20"><div className="story-image" role="img" aria-label="Household helper organising a calm kitchen space" /><div><p className="eyebrow">The real luxury</p><h2>It&apos;s not the clean home.<br /><em>It&apos;s the time it gives you.</em></h2><p className="large-copy">A tidy home is lovely. But what you really want is the Sunday morning back. The dinner with your kids. The energy to do the thing you&apos;ve been putting off.</p><p>That&apos;s why we do more than tick boxes. We notice what needs doing and take it off your plate — with care, kindness and a little bit of magic.</p><a className="text-link" href="#enquire">Find your extra hours <ArrowRight size={16} /></a></div></div></section>

      <section id="how-it-works" className="section section-blush"><div className="site-shell"><div className="section-heading center"><p className="eyebrow">Simple from the start</p><h2>Let&apos;s make home <em>easy.</em></h2></div><div className="steps-grid"><div><span>01</span><h3>Tell us what you need</h3><p>Book online or send an enquiry. We&apos;ll have a friendly chat about your home and your wish list.</p></div><div><span>02</span><h3>Meet your Wifey</h3><p>We match you with someone caring, capable and the right fit for your household.</p></div><div><span>03</span><h3>Feel the difference</h3><p>Come home to a little more calm, a little more time and a lot less on your to-do list.</p></div></div><div className="center"><a className="button button-primary" href="#enquire">Book your first visit <ArrowRight size={18} /></a></div></div></section>

      <section className="support-section"><div className="site-shell grid gap-7 md:grid-cols-3"><div className="support-intro"><p className="eyebrow">Here for every kind of home</p><h2>Support that fits <em>real life.</em></h2><p>Whether you&apos;re busy, ageing at home, caring for someone, or simply ready for a hand — we&apos;re here.</p></div><div className="support-card"><span className="support-label">NDIS support</span><h3>Practical help, with dignity.</h3><p>Reliable household assistance that supports independence and helps you feel at home.</p><a href="#enquire">Talk to us <ArrowRight size={15} /></a></div><div className="support-card dark"><span className="support-label">DVA support</span><h3>Home help made simple.</h3><p>We can help eligible veterans and their families with everyday household tasks.</p><a href="#enquire">Talk to us <ArrowRight size={15} /></a></div></div></section>

      <section className="quote-section"><div className="site-shell"><div className="quote-mark">“</div><blockquote>It feels like a weight has been lifted. I get to enjoy my home now, instead of constantly working in it.</blockquote><p className="quote-person"><span>R</span> Rachel, Hervey Bay <span className="quote-stars"><Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /></span></p></div></section>

      <section id="faq" className="section section-white"><div className="site-shell faq-layout"><div><p className="eyebrow">Good to know</p><h2>Questions, <em>answered.</em></h2><p>Still curious? We&apos;re only a message away.</p><a className="text-link" href="#enquire">Ask us anything <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map(([q, a], index) => <div className="faq-item" key={q}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{q}</span><ChevronDown className={openFaq === index ? 'rotate-180' : ''} size={20} /></button>{openFaq === index && <p>{a}</p>}</div>)}</div></div></section>

      <section id="become-a-wifey" className="join-section"><div className="site-shell grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><p className="eyebrow">Do you have the gift of help?</p><h2>Become a <em>Wifey.</em></h2><p>Join a community of kind, capable women helping Australian homes feel better every day.</p></div><a className="button button-outline" href="#enquire">Find out more <ArrowRight size={18} /></a></div></section>

      <section id="enquire" className="enquire-section"><div className="site-shell grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-24"><div><p className="eyebrow">Let&apos;s chat</p><h2>Ready to get your time <em>back?</em></h2><p>Tell us a little about what you need and we&apos;ll be in touch soon. No pressure, just a friendly conversation.</p><div className="contact-detail"><MessageCircle size={20} /><span><strong>Prefer to talk?</strong><br />Send us a message and we&apos;ll call you back.</span></div></div>{sent ? <div className="success-panel"><div className="success-icon"><Check size={26} /></div><h3>We&apos;ve got your note.</h3><p>Thanks for reaching out. A member of our team will be in touch soon.</p><a href="#top" className="text-link">Back to top <ArrowRight size={16} /></a></div> : <form className="enquiry-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><div className="form-row"><label>First name<input required name="firstName" placeholder="Your first name" /></label><label>Last name<input name="lastName" placeholder="Your last name" /></label></div><label>Email address<input required type="email" name="email" placeholder="you@email.com" /></label><label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us what would make your week easier..." /></label><button className="button button-primary" type="submit">Send enquiry <ArrowRight size={18} /></button><p className="form-note">By submitting, you agree to be contacted about your enquiry.</p></form>}</div></section>

      <footer><div className="site-shell grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-end"><div><a href="#top" className="brand-mark footer-brand">hire a <strong>wifey</strong><span>.</span></a><p>We take care of home.<br />You take care of what matters.</p></div><div className="footer-links"><strong>Explore</strong><a href="#services">What we do</a><a href="#how-it-works">How it works</a><a href="#faq">FAQs</a></div><div className="footer-links"><strong>Get in touch</strong><a href="#enquire">Make an enquiry</a><a href="#become-a-wifey">Become a Wifey</a><span>Hervey Bay, QLD</span></div></div><div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} Hire a Wifey. All rights reserved.</span><span>Made with care for real homes.</span></div></footer>
      <a className="mobile-book" href="#enquire">Book a Wifey <ArrowRight size={17} /></a>
    </main>
  )
}
