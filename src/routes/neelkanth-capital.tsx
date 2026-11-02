import { createFileRoute } from '@tanstack/react-router';
import { NeelkanthCapitalPage } from '@/components/site/neelkanth-capital';
import { pageHead } from '@/lib/site';

export const Route=createFileRoute('/neelkanth-capital')({head:()=>pageHead('Neelkanth Capital — Our Sister Concern','Neelkanth Capital is a Berhampore-based wealth advisory and financial services firm — equity broking, mutual funds, wealth management, IPO advisory and insurance solutions, an authorised partner of Prabhudas Lilladher.'),component:()=> <main><NeelkanthCapitalPage/></main>});
