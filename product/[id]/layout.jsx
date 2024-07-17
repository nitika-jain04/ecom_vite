import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Product",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
