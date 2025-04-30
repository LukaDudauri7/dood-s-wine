import React from "react";
import "./SocialBar.css";

const socialLinks = [
  { label: "Facebook", icon: "fa-facebook-f", className: "facebook" },
  { label: "Instagram", icon: "fa-instagram", className: "instagram" },
  { label: "WhatsApp", icon: "fa-whatsapp", className: "whatsapp" },
  { label: "TikTok", icon: "fa-tiktok", className: "tiktok" },
];

const SocialBar = () => {
  return (
    <div className="social-bar">
      {socialLinks.map(({ label, icon, className }) => (
        <a key={label} href="#" className={`social-link ${className}`}>
          <i className={`fa-brands ${icon}`} />
          <span className="label">{label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
