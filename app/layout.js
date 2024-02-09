import AppGuard from '@/guards/AppGuard';
import './globals.css'
import StyledComponentsRegistry from './registry'
import StoreProvider from './storeProvider';

export const metadata = {
  title: 'SupriseVault | Home',
  description: 'Welcome to SupriseVault send money as gift in a fun way',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <StoreProvider> 
              {children} 
          </StoreProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
