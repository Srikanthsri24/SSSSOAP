import { ArrowLeft, ArrowUpRight, HeartHandshake, Mail, MapPin, UsersRound } from "lucide-react";

const paths = [["Volunteer", "Offer your time, skills or a helping hand.", UsersRound], ["Find a Samithi", "Connect with the Sai centre closest to you.", MapPin], ["Contact the team", "Reach the Andhra Pradesh office with your enquiry.", Mail]] as const;

export default function GetInvolved() {
  return <main className="screen-page involved-screen"><a className="back-link" href="/"><ArrowLeft size={16} /> Back to home</a><div className="screen-kicker">06 / YOUR NEXT STEP</div><div className="involved-hero"><div><h1>There is always a way to <em>serve.</em></h1><p className="screen-lead">Bring your time, your care or your curiosity. Every sincere step becomes part of a larger movement of love across Andhra Pradesh.</p></div><div className="involved-mark"><HeartHandshake size={42} /><span>Start where<br />you are.</span></div></div><div className="involved-grid">{paths.map(([title,desc,Icon])=><a href="/get-involved" className="involved-card" key={title}><Icon size={25}/><span>{title}</span><p>{desc}</p><ArrowUpRight size={18}/></a>)}</div><div className="involved-note"><strong>Love all · Serve all</strong><span>We’ll help you find the right way to participate.</span></div></main>;
}
