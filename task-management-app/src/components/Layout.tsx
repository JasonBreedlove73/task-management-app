import type { ReactNode } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      {/* Header */}
      <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </header>

      {/* Page content */}
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
