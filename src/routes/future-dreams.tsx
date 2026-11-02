import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import { PageBanner } from '@/components/site/layout';
import { Reveal } from '@/components/site/reveal';
import { FutureDreamsTeam } from '@/components/site/fd-team';
import { Button } from '@/components/ui/button';
import { business, fdServices, pageHead, sisterVenture } from '@/lib/site';
import loansPhoto from '@/assets/fd-loans.jpg';
import taxationPhoto from '@/assets/fd-taxation.jpg';
import wealthPhoto from '@/assets/fd-wealth.jpg';

export const Route=createFileRoute('/future-dreams')({head:()=>pageHead('Future Dreams — Our Sister Venture','Future Dreams Financial & Marketing Consultancy offers loans, taxation and registration support, mutual funds, insurance and share trading from Berhampore, Murshidabad.'),component:FutureDreams});

const fdPhotos=[loansPhoto,taxationPhoto,wealthPhoto];
const fdAlt=['Home loan sanction letter with a model house, calculator and keys on a walnut desk','Income tax return, GST registration papers and a certificate of incorporation beside a brass scale','Mutual fund documents and a life insurance policy with a sapling growing from a stack of rupee coins'];

function FutureDreams(){return <main className="fd-scope">
  <PageBanner eyebrow="A sister venture" title="Future Dreams." description="Financial & Marketing Consultancy — loans, taxation, registrations, insurance and investments for individuals, families and local businesses across Berhampore and Murshidabad, from the same head office as Arindam Maitra Tax Consulting Unit."/>
  <section className="section wrap split-content">
    <div className="prose"><Reveal>
      <div className="eyebrow">The group</div>
      <h2 className="section-heading">One address.<br/>Two consultancies.</h2>
      <p>Future Dreams Financial & Marketing Consultancy is the sister venture of Arindam Maitra Tax Consulting Unit. While the tax practice looks after GST, income tax and statutory compliance, Future Dreams works alongside it on loans, registrations, insurance and the financial side of your plans.</p>
      <p>The two consultancies share the same head office at 35/8, Ukilabad Road (near Baro Bigha Kabarkhana), Berhampore — so financial and compliance conversations stay coordinated under one roof.</p>
      <Button variant="corporate" asChild className="mt-5"><a href={sisterVenture.phoneHref}>Call Future Dreams <ArrowUpRight/></a></Button>
      <p className="mt-6 text-[13px] text-muted-foreground">Looking for tax, GST or compliance support instead? <Link to="/services" className="text-link">See the tax practice’s services <ArrowUpRight size={14}/></Link></p>
    </Reveal></div>
    <Reveal><div className="venture-contacts">
      <h2 className="section-heading">Reach Future Dreams directly</h2>
      <div className="venture-contact-line"><Smartphone size={18}/><span>M.&nbsp; <a href={sisterVenture.mobiles[0]!.href}>{sisterVenture.mobiles[0]!.label}</a> &nbsp;/&nbsp; <a href={sisterVenture.mobiles[1]!.href}>{sisterVenture.mobiles[1]!.label}</a></span></div>
      <div className="venture-contact-line"><Phone size={18}/><a href={sisterVenture.phoneHref}>Landline: {sisterVenture.phone}</a></div>
      <div className="venture-contact-line"><Mail size={18}/><a href={`mailto:${sisterVenture.email}`}>{sisterVenture.email}</a></div>
      <div className="venture-contact-line"><MapPin size={18}/><span>Berhampore &amp; Head Office: {sisterVenture.address}<br/><a href={business.maps} target="_blank" rel="noopener noreferrer" className="text-link">Get directions <ArrowUpRight size={14}/></a></span></div>
      <p className="form-note">Please call to confirm office hours and appointment availability.</p>
    </div></Reveal>
  </section>
  {fdServices.map((s,i)=><section key={s.name} className={`section wrap split-content${i%2?' split-reverse':''}`}>
    <div className="prose"><Reveal>
      <div className="eyebrow">{`0${i+1} / ${s.tag}`}</div>
      <h2 className="section-heading">{s.name}.</h2>
      <p>{s.description}</p>
      <ul className="fd-item-list">{s.items.map(item=><li key={item}>{item}</li>)}</ul>
      <p className="text-[12px] text-muted-foreground mt-6 leading-relaxed">{s.note}</p>
    </Reveal></div>
    <Reveal delay={120}><img src={fdPhotos[i]} alt={fdAlt[i]} width={1600} height={1072} loading="lazy" className="editorial-photo"/></Reveal>
  </section>)}
  <FutureDreamsTeam/>
  <section className="section faq-band"><div className="wrap"><Reveal>
    <div className="eyebrow">Working together</div>
    <h2 className="section-heading">Three practices. One roof.</h2>
    <p className="section-intro">Future Dreams, the tax practice and our sister concern Tradx Equisearch — for market-linked investments in association with PL Capital — coordinate from the same office, so your financial, tax and investment conversations stay connected.</p>
    <div className="process-row">
      <article><span className="number">01</span><h3>Loans & funding</h3><p>Vehicle, home, project, education and mortgage loans — options explained and applications prepared.</p></article>
      <article><span className="number">02</span><h3>Registrations & tax</h3><p>Income tax, GST, P. Tax, EPF & ESIC and every kind of entity registration, with trademarks and project reports.</p></article>
      <article><span className="number">03</span><h3>Investments & protection</h3><p>Mutual funds, general & life insurance and online share trading, matched to your goals.</p></article>
    </div>
    <Link to="/tradx-equisearch" className="text-link">Meet our sister concern, Tradx Equisearch <ArrowUpRight size={14}/></Link>
  </Reveal></div></section>
</main>;}
