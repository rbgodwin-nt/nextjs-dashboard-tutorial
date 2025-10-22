'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { useTheme } from '@/app/contexts/theme-context';
import { useState, useRef, useEffect } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsThemeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themes = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'halloween', label: 'Halloween', icon: '🎃' },
  ];

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-nav-item p-3 text-sm font-medium text-nav-text hover:bg-nav-item-hover hover:text-nav-text-active transition-colors md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-nav-item-active text-nav-text-active shadow-lg': pathname === link.href,
              },
            )}          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      
      {/* Theme Selector */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
          className={clsx(
            'flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-nav-item p-3 text-sm font-medium text-nav-text hover:bg-nav-item-hover hover:text-nav-text-active transition-colors md:flex-none md:justify-start md:p-2 md:px-3',
          )}
        >
          <SwatchIcon className="w-6" />
          <p className="hidden md:block">Theme</p>
        </button>

        {/* Theme Dropdown */}
        {isThemeDropdownOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-full md:w-48 rounded-md border border-border-strong bg-surface shadow-lg z-50">
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                type="button"
                onClick={() => {
                  setTheme(themeOption.value as 'light' | 'halloween');
                  setIsThemeDropdownOpen(false);
                }}
                className={clsx(
                  'w-full text-left px-4 py-3 text-sm hover:bg-surface-secondary transition-colors flex items-center gap-3',
                  theme === themeOption.value
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-text-primary'
                )}
              >
                <span className="text-lg">{themeOption.icon}</span>
                <span>{themeOption.label}</span>
                {theme === themeOption.value && (
                  <span className="ml-auto text-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
