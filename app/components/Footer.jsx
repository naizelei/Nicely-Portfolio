import React from "react";

const Footer = () => {
  // Static profile data
  const profile = {
    name: "Nicely Eleccion",
    bio: "Passionate developer creating amazing digital experiences.",
    email: "nicely.eleccion@gmail.com",
    phone: "+63 32 263 7247",
    location: "Cebu, Philippines"
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8 xl:px-[8%]">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              {profile.name}
            </h3>
            <p className="text-gray-400">
              {profile.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#top" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#work" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              {profile.email && (
                <div>
                  <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
                    {profile.email}
                  </a>
                </div>
              )}
              {profile.phone && (
                <div>
                  <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">
                    {profile.phone}
                  </a>
                </div>
              )}
              {profile.location && (
                <div>{profile.location}</div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 