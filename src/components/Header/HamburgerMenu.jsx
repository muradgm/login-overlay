import { useState } from "react";
import LoginOverlay from "../Login/LoginOverlay";

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36px"
    height="36px"
    viewBox="0 0 512 512"
  >
    <path
      fill="#000"
      d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
    />
  </svg>
)

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false)

  return (
    <div className="HamburgerMenu" onClick={() => setOpen(!open)}>
      <Hamburger />
      <LoginOverlay open={open} setOpen={setOpen} />
    </div>
  );
}