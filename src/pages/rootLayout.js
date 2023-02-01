import { Outlet } from "react-router-dom";
import Menu from "../components/navbar/navbar"
import Footer from "../components/footer/footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  )
}