import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "พร้อม AI",
  description: "ค้นหาและเผยแพร่ตัวอย่างของพร้อม AI",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
            {/* <Nav/> */}
            {children}</main>
    </body>
  </html>
);

export default RootLayout;
