import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen bg-lightPink relative font-workSans ">
      <div className="absolute w-full top-0 left-0 right-0 max-h-[232px] sm:max-h-[320px] overflow-hidden">
        <img
          className="w-full h-full hidden sm:block"
          src="/images/background-pattern-desktop.svg"
          alt=""
        />
        <img
          className="w-full h-full block sm:hidden"
          src="/images/background-pattern-mobile.svg"
          alt=""
        />
      </div>
      {children}
    </main>
  );
};

export default Layout;
