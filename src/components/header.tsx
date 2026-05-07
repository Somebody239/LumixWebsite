"use client";

import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import ThemeToggle from './theme-toggle';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem as MenuItem,
} from './ui/navigation-menu';

const useScroll = ({ threshold = 50 } = {}) => {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    scrollDirection: null as 'up' | 'down' | null,
    lastScrollY: 0,
  });

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const currentScrollY = window.scrollY;
    setScrollState(prev => {
      let direction = prev.scrollDirection;
      if (typeof prev.lastScrollY === 'number') {
        if (currentScrollY > prev.lastScrollY && currentScrollY > 100) {
          direction = 'down';
        } else if (currentScrollY < prev.lastScrollY && currentScrollY > 100) {
          direction = 'up';
        }
      }
      return {
        lastScrollY: currentScrollY,
        isScrolled: currentScrollY > threshold,
        scrollDirection: direction,
      };
    });
  }, [threshold]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    isScrolled: scrollState.isScrolled,
    scrollDirection: scrollState.scrollDirection,
  };
};

const Header: React.FC = () => {
  const pathname = usePathname();
  const { isScrolled, scrollDirection } = useScroll({ threshold: 50 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 w-full
    glass-header transition-all duration-300 ease-in-out
    ${isScrolled
      ? 'bg-white/95 dark:bg-neutral-950/95 shadow-sm backdrop-blur-md py-2'
      : 'bg-transparent py-4'}
    ${scrollDirection === 'down' && isScrolled
      ? '-translate-y-full'
      : 'translate-y-0'}
  `;

  const navLinks = [
    { href: '/', label: 'Home', active: pathname === '/' },
    { href: '/services', label: 'Services', active: pathname.startsWith('/services') },
    { href: '/about', label: 'About', active: pathname === '/about' },
    { href: '/pricing', label: 'Pricing', active: pathname === '/pricing' },
    { href: '/contact', label: 'Contact', active: pathname === '/contact' },
  ];

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <>
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group" onClick={closeMobileMenu}>
            <span className="text-xl font-bold tracking-tight">Lumix Design</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {navLinks.map(link => (
                <MenuItem key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      text-sm font-medium transition-colors animated-underline
                      ${link.active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
                    `}
                    aria-current={link.active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </MenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Theme Toggle and CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="outline" className="border-foreground/20 hover:bg-foreground hover:text-background transition-all">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <div className="md:hidden fixed inset-0 z-[9999]">
        <div
          className="absolute inset-0 bg-black/10 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        <div className="relative z-10 w-full">
          <div className="glass-header bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <nav>
                <ul className="space-y-4">
                  {navLinks.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`
                          block text-lg font-medium transition-all duration-200 hover:translate-x-1
                          ${link.active ? 'text-foreground' : 'text-muted-foreground'}
                        `}
                        onClick={closeMobileMenu}
                        aria-current={link.active ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 pt-4 border-t border-border">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default memo(Header);
