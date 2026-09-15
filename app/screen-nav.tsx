import QuoteStrip from "./quote-strip";
const links = [["About", "/about"], ["Our Wings", "/wings"], ["Initiatives", "/initiatives"], ["Districts", "/districts"], ["Resources", "/resources"], ["Get Involved", "/get-involved"], ["Contact", "/contact"]] as const;
export default function ScreenNav({ current }: { current: string }) { return <><nav className="screen-nav" aria-label="Section navigation">{links.map(([label, href]) => <a className={label === current ? "active" : ""} href={href} key={label}>{label}</a>)}</nav><QuoteStrip/></>; }
