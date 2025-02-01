import { Menu } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "150px",
                height: "25px",
              }}
            />
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-8">
              {[
                "Services",
                "Portfolio",
                "Case Studies",
                "Reviews",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="text-gray-300 hover:text-white hover:bg-blue-500/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
