import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export default function Button({ to, children, light = false }) { return <Link to={to} className={`button ${light ? 'button-light' : ''}`}>{children}<ArrowUpRight size={16}/></Link>; }
