import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "components/nav/navbar";
import { useState, useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [theme, setTheme] = useState("light");

  const pullTheme = (theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={theme === "dark" ? "bg-slate-600" : ""}>
      <SessionProvider session={session}>
        <Navbar
          className={theme === "dark" ? "bg-slate-600" : ""}
          theme={pullTheme}
        />
        <Component {...pageProps} theme={theme} />
      </SessionProvider>
    </div>
  );
}
