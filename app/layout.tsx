import type { Metadata } from 'next';
import '../globals.css';
import StarsCanvas from '@/components/StarBackground';
import NavBar3 from '@/components/Navbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export const metadata: Metadata = {
  title: 'Delano Igbinoba - Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  return (
    <html lang="en">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden`">
        <AppRouterCacheProvider>
          <StarsCanvas />
          <NavBar3 />

          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
