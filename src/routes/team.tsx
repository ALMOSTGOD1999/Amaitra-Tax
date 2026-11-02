import { createFileRoute } from '@tanstack/react-router';
import { PageBanner } from '@/components/site/layout';
import { OurTeamSection } from '@/components/site/our-team';
import { pageHead } from '@/lib/site';
export const Route=createFileRoute('/team')({head:()=>pageHead('Our Team','Meet the tax assistants, accountants and office executives behind Arindam Maitra Tax Consulting Unit in Berhampore, West Bengal.'),component:Team});
function Team(){return <main><PageBanner eyebrow="Our team" title="The people behind the numbers." description="Tax assistants, accountants, analysts and office executives who keep day-to-day compliance moving — from our Gora Bazar office in Berhampore."/><OurTeamSection/></main>;}
