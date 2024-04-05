'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blogs',
  },
  '/me': {
    name: 'me',
  }
};


export default function Navbar() {

  let pathname = usePathname() || '/';

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    let preferedMode = (window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkTheme(preferedMode);
  });

  return (
    <div className="" >
      <div className="flex md:justify-end justify-start">
        
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-4 md:px-0 pb-0 fade  scroll-pr-6"
            id="nav"
          >
            <div className="flex flex-row space-x-0  mb-2 mt-2 [font-size:var(--step-1)]">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-medium ': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </div>
  );
}
