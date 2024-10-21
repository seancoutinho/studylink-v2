import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">StudyLinkEU</h3>
            <p className="text-sm text-muted-foreground mb-4">Your gateway to European education for African and Asian students.</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Our Services', 'Courses', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Study Destinations</h4>
            <ul className="space-y-2 text-sm">
              {['Study in Germany', 'Study in Poland', 'Study in Netherlands'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2" /> info@studylinkeu.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone size={16} className="mr-2" /> +1 234 567 890
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin size={16} className="mr-2" /> 123 Education St, Europe
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-muted pt-8 text-sm text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} StudyLinkEU. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;