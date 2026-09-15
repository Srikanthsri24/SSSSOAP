"use client";
import { useEffect, useState } from "react";
const quotes = [
  "The best way to find yourself is to lose yourself in the service of others.",
  "Love all, serve all. Help ever, hurt never.",
  "A little kindness, shared every day, becomes a movement.",
  "Service is the highest expression of devotion.",
  "One mission. Many hands. One heart.",
];
export default function QuoteStrip(){
  const [index,setIndex]=useState(0);
  useEffect(()=>{const id=setInterval(()=>setIndex(i=>(i+1)%quotes.length),4200);return()=>clearInterval(id)},[]);
  return <div className="quote-strip" aria-live="polite"><span className="quote-mark">“</span><span key={index} className="quote-text">{quotes[index]}</span><span className="quote-dots">{quotes.map((_,i)=><i key={i} className={i===index?"on":""}/>)}</span></div>;
}
