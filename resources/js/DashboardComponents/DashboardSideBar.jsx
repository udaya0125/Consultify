// DashboardSideBar.jsx
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
  Home, Users, UserCog, UserCircle, GraduationCap, Library,
  Bookmark, School, BookOpenCheck, CalendarDays, ListChecks,
  BookText, Bell, NotebookPen, CalendarCheck,
  ClipboardEdit, MailWarning, BookKey,  ChevronRight,
  LogOut, Settings, GraduationCap as GraduationCapIcon,
  CircleUserRound
} from 'lucide-react';

const DashboardSideBar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: Home, href: '/analytics', badge: null },
    {
      id: 'students', label: 'Students', icon: Users, isDropdown: true, badge: '1,247',
      children: [
        { label: 'All Students', icon: UserCog, href: '/students/all' },
        { label: 'Profiles', icon: UserCircle, href: '/students/profiles' },
        { label: 'Admissions', icon: Users, href: '/students/admissions' },
        { label: 'Alumni', icon: GraduationCap, href: '/students/alumni' }
      ]
    },
    {
      id: 'academics', label: 'Academics', icon: BookText, isDropdown: true,
      children: [
        { label: 'Classes', icon: School, href: '/academics/classes' },
        { label: 'Subjects', icon: BookOpenCheck, href: '/academics/subjects' },
        { label: 'Curriculum', icon: BookKey, href: '/academics/curriculum' },
        { label: 'Assignments', icon: NotebookPen, href: '/academics/assignments' },
        { label: 'Exams', icon: ClipboardEdit, href: '/academics/exams' }
      ]
    },
    // {
    //   id: 'management', label: 'Management', icon: Bookmark, isDropdown: true,
    //   children: [
    //     { label: 'Schedule', icon: CalendarDays, href: '/management/schedule' },
    //     { label: 'Attendance', icon: ListChecks, href: '/management/attendance' },
    //     { label: 'Events', icon: CalendarCheck, href: '/management/events' },
    //     { label: 'Notices', icon: Bell, href: '/management/notices', badge: '3' },
    //   ]
    // },
    // { id: 'teachers', label: 'Teachers', icon: GraduationCapIcon, href: '/teachers', badge: '84' },
    {
      id: 'library', label: 'Library', icon: Library, isDropdown: true,
      children: [
        { label: 'Blog', icon: CircleUserRound, href: '/library/blog' },
        { label: 'Teacher', icon: ListChecks, href: '/library/Teacher' },
        { label: 'OurTeam', icon: CalendarCheck, href: '/library/ourteam' },
        { label: 'Notices', icon: Bell, href: '/library/notices' },
      ]
    },
    { id: 'Chat', label: 'Chat', icon: MailWarning, href: '/chatbot', badge: '12' },
    { id: 'reports', label: 'Reports', icon: ClipboardEdit, href: '/reports' }
  ];

  return (
    <div className="h-screen w-80 bg-slate-50 fixed text-slate-800 flex flex-col shadow-xl lg:w-[18%]">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-600">Consultify</h1>
            <p className="text-xs text-slate-500 mt-1">Management Portal</p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.isDropdown ? (
                <div>
                  <div
                    className={`flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 cursor-pointer ${
                      window.location.pathname.startsWith(`/${item.id}`) ? 'bg-slate-200' : ''
                    }`}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-blue-100 mr-3">
                        <item.icon size={18} className="text-blue-600" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="ml-2 px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight
                      size={16}
                      className={`text-slate-500 transition-transform ${openDropdowns[item.id] ? 'rotate-90' : ''}`}
                    />
                  </div>
                  {openDropdowns[item.id] && (
                    <ul className="ml-4 mt-2 space-y-1 border-l-2 border-slate-200 pl-4">
                      {item.children.map((child, idx) => (
                        <li key={idx}>
                          <Link
                            href={child.href}
                            className={`flex items-center p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded text-sm ${
                              window.location.pathname === child.href ? 'font-semibold text-blue-600 bg-blue-50' : ''
                            }`}
                          >
                            <child.icon size={16} className="mr-3 text-slate-500" />
                            {child.label}
                            {child.badge && (
                              <span className="ml-auto px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg hover:bg-slate-100 transition-all ${
                    window.location.pathname === item.href ? 'bg-slate-200 font-semibold text-blue-600' : ''
                  }`}
                >
                  <div className="p-2 rounded-lg bg-blue-100 mr-3">
                    <item.icon size={18} className="text-blue-600" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        <div className="space-y-2">
          <Link
            href="/settings"
            className={`flex items-center p-3 rounded-lg hover:bg-slate-100 ${
              window.location.pathname === '/settings' ? 'bg-slate-200 font-semibold text-blue-600' : ''
            }`}
          >
            <div className="p-2 rounded-lg bg-emerald-100 mr-3">
              <Settings size={18} className="text-emerald-600" />
            </div>
            <span className="font-medium">Settings</span>
          </Link>
          <button className="flex items-center w-full p-3 rounded-lg hover:bg-red-50 text-red-600 transition-all">
            <div className="p-2 rounded-lg bg-red-100 mr-3">
              <LogOut size={18} className="text-red-600" />
            </div>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;