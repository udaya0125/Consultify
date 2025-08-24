import React, { useState } from 'react';
import { Search, Bell, MessageSquare, User, Settings, CreditCard, LogOut, Menu, X, ChevronDown } from 'lucide-react';

const DashboardNavbar = ({ isDarkMode, toggleTheme }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const [unreadMessages, setUnreadMessages] = useState(2);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowMessages(false);
    setShowProfile(false);
    if (!showNotifications && unreadCount > 0) setUnreadCount(0);
  };

  const toggleMessages = () => {
    setShowMessages(!showMessages);
    setShowNotifications(false);
    setShowProfile(false);
    if (!showMessages && unreadMessages > 0) setUnreadMessages(0);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setShowNotifications(false);
    setShowMessages(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogout = () => {
    alert('Logged out');
  };

  const notifications = [
    { id: 1, title: "New user registered", message: "Welcome Sarah Johnson", time: "2 min ago", unread: true },
    { id: 2, title: "System update", message: "Version 2.3 ready", time: "1 hour ago", unread: true },
    { id: 3, title: "Backup completed", message: "Daily backup success", time: "3 hours ago", unread: false },
  ];

  const messages = [
    { id: 1, sender: "John Smith", message: "About the project timeline...", time: "2 min ago", avatar: "JS", unread: true },
    { id: 2, sender: "Team Lead", message: "Meeting at 10 AM", time: "1 hour ago", avatar: "TL", unread: true },
    { id: 3, sender: "Sarah Wilson", message: "Great work!", time: "2 hours ago", avatar: "SW", unread: false },
  ];

  return (
    <nav className="  w-full px-4 md:px-6 lg:px-12 py-6 bg-white shadow-md md:w-[82%] fixed top-0 right-0 z-20 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-medium text-gray-900">
            Welcome Back, Ali Husni 👋
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Anything"
              className="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm placeholder-gray-500"
            />
          </div>

          {/* Messages */}
          <div className="relative">
            <button 
              onClick={toggleMessages}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            {showMessages && (
              <div className="absolute right-0 mt-3 w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Messages</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${msg.unread ? 'bg-blue-50' : ''}`}>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {msg.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{msg.sender}</p>
                          <p className="text-xs text-gray-600 truncate">{msg.message}</p>
                          <p className="text-xs text-blue-500 mt-1">{msg.time}</p>
                        </div>
                        {msg.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={toggleNotifications}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5" />
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${n.unread ? 'bg-blue-50' : ''}`}>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{n.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{n.message}</p>
                          <p className="text-xs text-blue-500 mt-1">{n.time}</p>
                        </div>
                        {n.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button 
              onClick={toggleProfile}
              className="flex items-center space-x-2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                alt="Ali Husni" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left flex gap-1">
                <p className="text-sm font-medium text-gray-900">Ali Husni</p>
                <span><ChevronDown/></span>
              </div>
            </button>
            {showProfile && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" 
                      alt="Ali Husni" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Ali Husni</p>
                      <p className="text-xs text-gray-600">ali.husni@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <User className="w-4 h-4" /> <span>Your Profile</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <Settings className="w-4 h-4" /> <span>Settings</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <CreditCard className="w-4 h-4" /> <span>Billing</span>
                  </a>
                </div>
                <div className="p-3 border-t border-gray-100">
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center space-x-2 w-full text-sm font-medium text-red-600 hover:bg-red-50 py-2 px-3 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" /> <span>Sign out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Button - Hidden on desktop, shown on mobile */}
      <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 bg-white">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Anything"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none text-sm placeholder-gray-500"
              />
            </div>
            <div className="flex items-center justify-around pt-4">
              <button onClick={toggleMessages} className="flex flex-col items-center space-y-1 p-3 rounded-lg hover:bg-gray-50">
                <MessageSquare className="w-6 h-6 text-gray-600" />
                <span className="text-xs text-gray-600">Messages</span>
              </button>
              <button onClick={toggleNotifications} className="flex flex-col items-center space-y-1 p-3 rounded-lg hover:bg-gray-50">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="text-xs text-gray-600">Notifications</span>
              </button>
              <button onClick={toggleProfile} className="flex flex-col items-center space-y-1 p-3 rounded-lg hover:bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" 
                  alt="Ali Husni" 
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-xs text-gray-600">Profile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;