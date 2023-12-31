import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata={
  title: "Eroon Prompts",
  description:'Discover & Share Prompts',
  icon: '/favicon.ico',
};

const RootLayout = ({children, session}) => {
  return (
    <html lang='en'>
      <body>
      <Provider>
        <div className='main'>
          <div className='gradient'>
          </div>
        </div>
        <main className='app'>
          <Nav/>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;