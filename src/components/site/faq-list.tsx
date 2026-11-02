import { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { faqs } from '@/lib/faqs';
export function FAQList({items=faqs,initialOpen=0}:{items?:typeof faqs;initialOpen?:number}) {
 const [open,setOpen]=useState<string|null>(items[initialOpen]?.question??null);
 return <div className="faq-list">{items.map((item,index)=><article className="faq-item" key={item.question}><Button variant="ghost" className="faq-question" aria-expanded={open===item.question} aria-controls={`answer-${index}`} onClick={()=>setOpen(open===item.question?null:item.question)}>{item.question}{open===item.question?<Minus size={17}/>:<Plus size={17}/>}</Button>{open===item.question&&<div id={`answer-${index}`} className="faq-answer">{item.answer}<br/><a className="official-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.source}<ArrowUpRight size={13}/></a></div>}</article>)}</div>;
}
