import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaUser, FaSignOutAlt, FaUserMd, FaExternalLinkAlt,
  FaChevronDown, FaBars, FaTimes,
  FaUserNurse, FaInfoCircle, FaHandsHelping, FaEnvelope,
  FaCalendarAlt, FaHome
} from 'react-icons/fa';
import { HiOutlineLogin } from 'react-icons/hi';
import { AppContext } from '../context/AppContext.jsx';
import { assets } from "../assets/assets.js";

const navLinks = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/doctors", label: "Doctors", icon: FaUserNurse },
  { path: "/about", label: "About", icon: FaInfoCircle },
  { path: "/services", label: "Services", icon: FaHandsHelping },
  { path: "/contact", label: "Contact", icon: FaEnvelope }
];

const staffLoginUrl = "https://staff.labmate.example.com";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const { token, setToken, userData, setShowLogin } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  const userMenu = [
    { path: "/my-profile", label: "My Profile", icon: FaUser },
    { path: "/my-appointments", label: "My Appointments", icon: FaCalendarAlt },
    { label: "Logout", icon: FaSignOutAlt, action: logout, isLogout: true }
  ];

  const AuthButtons = () => (
    <div className="hidden md:flex items-center space-x-4">
      <a
        href={staffLoginUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-teal-600 font-medium transition-colors duration-300"
      >
        <FaUserMd className="text-lg"/>
        <span>Staff Login</span>
        <FaExternalLinkAlt className="text-xs opacity-70" />
      </a>
      <button
        onClick={() => setShowLogin(true)}
        className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
      >
        <HiOutlineLogin className="text-xl"/>
        <span>Login</span>
      </button>
    </div>
  );

  const NavItems = ({ mobile = false }) => (
    <>
      {navLinks.map(({ path, label, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          onClick={() => mobile && setShowMenu(false)}
          className={({ isActive }) =>
            `${mobile
              ? `py-3 px-4 rounded-lg flex items-center gap-3 ${isActive ? 'bg-teal-50 text-teal-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`
              : `flex items-center gap-2 font-medium transition-all duration-300 ${isActive ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`
            }`
          }
        >
          <Icon className={`${mobile ? "text-xl" : "hidden xl:block text-lg"}`} />
          
          <span className="relative">
            {label}
            {!mobile && (
               <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${window.location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            )}
          </span>
        </NavLink>
      ))}
    </>
  );

  const UserDropdown = () => (
    <div className="absolute top-full right-0 pt-4 z-30 animate-fade-in">
      <div className="min-w-56 bg-white rounded-xl shadow-2xl flex flex-col p-2 border border-gray-100 ring-1 ring-black ring-opacity-5">
        {userMenu.map(({ label, icon: Icon, path, action, isLogout }) => (
          <div
            key={label}
            onClick={() => {
              action ? action() : navigate(path);
              setShowDropdown(false);
            }}
            className={`cursor-pointer px-4 py-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
              isLogout 
                ? 'text-red-500 hover:bg-red-50' 
                : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
            }`}
          >
            <Icon className={`${isLogout ? 'text-red-500' : 'text-teal-600'} text-lg`} />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      
      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={assets.logo} alt="LabMate Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-teal-700 tracking-tight">LabMate</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItems />
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {token && userData ? (
            <div
              className="flex items-center gap-3 cursor-pointer relative py-1 px-2 rounded-full hover:bg-gray-50 transition-colors"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <img
                src={userData.image || assets.default_profile}
                alt="Profile"
                className="rounded-full w-9 h-9 object-cover border-2 border-teal-500 shadow-sm"
              />
              <div className="hidden lg:block text-sm text-left">
                  <p className="font-semibold text-gray-700 leading-tight">{userData.name || "User"}</p>
                  <p className="text-xs text-teal-600">Patient</p>
              </div>
              <FaChevronDown className={`text-gray-400 text-xs transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              
              {showDropdown && <UserDropdown />}
            </div>
          ) : (
            <AuthButtons />
          )}

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-teal-700 hover:bg-teal-50 rounded-lg transition-colors" onClick={() => setShowMenu(true)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {showMenu && <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity" onClick={() => setShowMenu(false)} />}

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-0 right-0 w-4/5 max-w-sm h-full z-50 bg-white transform transition-transform duration-300 shadow-2xl ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <div className="flex items-center gap-2" onClick={() => { navigate("/"); setShowMenu(false); }}>
            <img src={assets.logo} alt="LabMate Logo" className="h-8" />
            <span className="text-xl font-bold text-teal-700">LabMate</span>
          </div>
          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors" onClick={() => setShowMenu(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-5 flex-1">
            <ul className="flex flex-col space-y-2"><NavItems mobile /></ul>
          </div>

          <div className="p-5 border-t border-gray-100 bg-gray-50">
            {token && userData ? (
              <>
                <div className="flex items-center gap-3 mb-6 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                  <img src={userData.image || assets.default_profile} alt="Profile" className="rounded-full w-12 h-12 object-cover border-2 border-teal-100" />
                  <div>
                    <p className="font-bold text-gray-800">{userData.name || "User"}</p>
                    <p className="text-xs text-gray-500 font-medium">{userData.email}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {userMenu.map(({ label, icon: Icon, path, action, isLogout }) => (
                    <button
                      key={label}
                      onClick={() => { action ? action() : navigate(path); setShowMenu(false); }}
                      className={`w-full text-left py-3 px-4 rounded-lg flex items-center gap-3 font-medium transition-all ${
                        isLogout 
                        ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                        : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                      }`}
                    >
                      <Icon className={isLogout ? 'text-red-500' : 'text-teal-600'} />
                      {label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => { setShowLogin(true); setShowMenu(false); }}
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 active:bg-teal-700 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-teal-200"
                >
                  <HiOutlineLogin className="text-xl" /><span>Login / Sign Up</span>
                </button>
                <a
                  href={staffLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-teal-700 py-3 font-medium"
                >
                  <FaUserMd /><span>Staff Access</span><FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;