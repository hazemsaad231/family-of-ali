import { useState, useEffect } from 'react';
import logo from "../../assets/img/logo.png";
import { HashLink} from 'react-router-hash-link';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            
            // تحديث القسم النشط بناءً على موقع التمرير
            const sections = ['home', 'history','personalities', 'achievements'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setIsMobileMenuOpen(false)
           
        }
    


    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled 
                ? 'bg-cream/95 backdrop-blur-md shadow-lg py-2' 
                : 'bg-transparent py-4 '
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2 w-1/2">
                                              
                        <button 
                            className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={() => handleNavClick('home')}
                        >  
                                <HashLink smooth to="/#home" >
                           الرئيسية 
                                </HashLink>
                            
                        </button>
                       
                        <button 
                            className={`nav-btn ${activeSection === 'history' ? 'active' : ''}`}
                            onClick={() => handleNavClick('history')}
                        >
                            <a href="#history">النظرة التاريخية</a>
                        </button>


                        <button 
                            className={`nav-btn ${activeSection === 'personalities' ? 'active' : ''}`}
                            onClick={() => handleNavClick('personalities')}
                        >
                            <a href="#personalities">الشخصيات</a>
                            
                        </button>
                        <button 
                            className={`nav-btn ${activeSection === 'achievements' ? 'active' : ''}`}
                            onClick={() => handleNavClick('achievements')}
                        >
                            <a href="#achievements"> الإنجازات</a>
                           
                        </button>
                    </div>


                    {/* Logo */}
                    <div className="flex items-center">
                        <img 
                            src={logo} 
                            alt="شعار أسرة محمد علي" 
                            className="w-16 md:w-20 h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer" 
                            onClick={() => handleNavClick('home')}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden text-primary-color p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className={`lg:hidden transition-all duration-300 z-50 bg-cream/95 backdrop-blur-md shadow-lg`}
                >
                    <div className="flex flex-col gap-4 py-4">
                        <button 
                            className={`nav-btn text-center ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={() => handleNavClick('home')}
                        >
                             <HashLink smooth to="/#home">
                           الرئيسية 
                            </HashLink>
                            
                        </button>
                        <button 
                            className={`nav-btn text-center ${activeSection === 'history' ? 'active' : ''}`}
                            onClick={() => handleNavClick('history')}
                        >
                             <a href="#history">
                            النظرة التاريخية

                            </a>
                        </button>
                        <button 
                            className={`nav-btn text-center ${activeSection === 'personalities' ? 'active' : ''}`}
                            onClick={() => handleNavClick('personalities')}
                        >
                             <a href="#personalities">
                                  الشخصيات
                            </a>
                        </button>
                        <button 
                            className={`nav-btn text-center ${activeSection === 'achievements' ? 'active' : ''}`}
                            onClick={() => handleNavClick('achievements')}
                        >
                             <a href="#achievements"> الإنجازات</a>
                        </button>
                    </div>
                </div>
                )}
                
            </div>
        </nav>
    )
}

export default Navbar