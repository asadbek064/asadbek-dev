'use client';

import React, { useEffect, useRef } from 'react';

export default function Comments({ slug }: { slug: string }) {
  const commentsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!commentsRef.current || commentsRef.current.querySelector('.giscus')) {
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // configs for Giscus settings
    script.setAttribute('data-repo', 'toothdecay-1/comments'); 
    script.setAttribute('data-repo-id', 'R_kgDOOUjlqg');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOOUjlqs4Coz_T');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    
    commentsRef.current.appendChild(script);
  }, []);
  
  return (
    <div className="mt-10 pt-10 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <div ref={commentsRef} />
    </div>
  );
}