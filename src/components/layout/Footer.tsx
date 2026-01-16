import React from "react";
import { Linkedin, Twitter, Youtube, Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  // Social Links mapping from provided HTML
  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/company/3aiplatform/" },
    { Icon: Twitter, href: "https://twitter.com/3aiplatform" },
    { Icon: Youtube, href: "https://www.youtube.com/channel/UCc4KdG7ZtAYBSBrP6ITfLcA" },
    { Icon: Facebook, href: "https://www.facebook.com/3aiplatform/" },
    { Icon: Instagram, href: "https://www.instagram.com/3aiplatform/" },
  ];

  return (
    <footer className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="relative w-32 h-12 flex items-center justify-center">
              <img
                src="assets/img/logo/logo-bg-black.png"
                alt="3AI Logo"
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          
          <p className="text-slate-400 font-medium max-w-xs leading-relaxed">
            The world's largest integrated professional ecosystem for GCC
            leaders and AI professionals.
          </p>

          {/* Contact Information extracted from HTML */}
          <div className="space-y-3">
            <a href="mailto:info@3ai.in" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <Mail size={16} className="text-blue-500" />
              <span className="text-sm">info@3ai.in</span>
            </a>
            <a href="https://wa.me/919154068312" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <MessageCircle size={16} className="text-green-500" />
              <span className="text-sm">+91 91540 68312</span>
            </a>
          </div>

          {/* Social Icons with extracted links */}
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all text-slate-400 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="space-y-6">
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-blue-500">Platform</h4>
          <ul className="space-y-4 text-slate-400 font-medium text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Atlas Knowledge</a></li>
            <li><a href="#" className="hover:text-white transition-colors">3AIFlix</a></li>
            <li><a href="#" className="hover:text-white transition-colors">UPStart Pipeline</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-blue-500">Exclusives</h4>
          <ul className="space-y-4 text-slate-400 font-medium text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Upper Crest</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TLC Forum</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Zenith Awards</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Meraki Talent</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-blue-500">Company</h4>
          <ul className="space-y-4 text-slate-400 font-medium text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-blue-500">Legal</h4>
          <ul className="space-y-4 text-slate-400 font-medium text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Membership Rules</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
        <p>© 2026 3AI. All Rights Reserved.</p>
        <p>Powered by <a href="https://www.visionarybizz.com/" className="hover:text-white transition-colors">Visionary Services</a></p>
      </div>
    </footer>
  );
};

export default Footer;