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
  '/about': {
    name: 'about',
  }, 
  '/project': {
    name: 'project',
  }, 
};

function Logo({isDarkTheme} : { isDarkTheme: boolean }) {
  return (
    <Link aria-label="Asadbek Karimov" href="/">
      {isDarkTheme ? (
        <svg width="50" height="28" viewBox="0 0 350 386.44" className="css-1j8o68f"><defs id="SvgjsDefs1101"></defs><g id="SvgjsG1102"  transform="matrix(26.840488913098042,0,0,26.840488913098042,11.273005791450164,-150.36809266320262)" fill="#ffffff"><path d="M-0.42 20 l0 -0.3 l0.4 0 c0.62 0 0.96 -0.3 1.3 -1.18 l4.52 -11.8 l0.54 0 l5.3 12.98 l0.98 0 l0 0.3 l-4.94 0 l0 -0.3 l1.4 0 l-1.78 -4.34 l-4.5 0 l-1.2 3.16 c-0.28 0.72 0.16 1.18 1.08 1.18 l0.6 0 l0 0.3 l-3.7 0 z M2.92 15.059999999999999 l4.26 0 l-2.2 -5.38 z"></path></g></svg>
      ) : (
        <svg width="50" height="28" viewBox="0 0 50 386.44" className="css-1j8o68f"><defs id="SvgjsDefs1143"></defs><g id="SvgjsG1144"  transform="matrix(26.840488913098042,0,0,26.840488913098042,11.273005791450164,-150.36809266320262)" fill="#111111"><path d="M-0.42 20 l0 -0.3 l0.4 0 c0.62 0 0.96 -0.3 1.3 -1.18 l4.52 -11.8 l0.54 0 l5.3 12.98 l0.98 0 l0 0.3 l-4.94 0 l0 -0.3 l1.4 0 l-1.78 -4.34 l-4.5 0 l-1.2 3.16 c-0.28 0.72 0.16 1.18 1.08 1.18 l0.6 0 l0 0.3 l-3.7 0 z M2.92 15.059999999999999 l4.26 0 l-2.2 -5.38 z"></path></g></svg>
      )}
    </Link>
  );
}

export default function Navbar() {

  let pathname = usePathname() || '/';

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    let preferedMode = (window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkTheme(preferedMode);
  });

  return (
    <div className="font-serif" >
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
                        'text-neutral-500 ': !isActive,
                        'font-bold': isActive,
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
                            stiffness: 350,
                            damping: 30,
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
