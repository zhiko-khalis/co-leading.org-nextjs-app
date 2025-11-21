
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="mb-4">
                <div className="h-16 flex items-center mb-2">
                <img
                src="/leadlogo.PNG"
                alt="Co-Lead Logo"
                className="h-12 w-auto"
              />
                </div>
                <p className="text-sm text-gray-400">co-Leading.org</p>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                An independent, non-profit, and civil society organization committed to developing 
                leadership skills, fostering entrepreneurship, and promoting collaboration.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#focus-areas" className="hover:text-orange-400 transition-colors">Focus Areas</a></li>
                <li><a href="#objectives" className="hover:text-orange-400 transition-colors">Objectives</a></li>
                <li><a href="#programs" className="hover:text-orange-400 transition-colors">Programs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Volunteer</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Partner With Us</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Donate</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Co-Lead Organization. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
