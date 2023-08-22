import "../assets/sass/global.scss";
import "../assets/sass/pages/home.scss";
import "../assets/sass/pages/about-us.scss";
import "../assets/sass/components/ui.scss";
import "../assets/sass/components/footer.scss";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import { fraunces } from "../ultils/fonts";

export const metadata = {
  title: "Coffeeroasters",
  description: "Demo project showcasing a coffee subscription site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.className} container`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
