"use client";

import IntLink from "@/utils/IntLink";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const metadata = {
  title: "Login",
  description: "This is the website's login page.",
};

const Login = () => {
  // const t = useTranslations("dash");
  // const path1 = usePathname();
  // console.log("path: ", path1);
  // console.log(path1.slice(3 - path1.length));
  // // console.log(path.slice(3 - path.length) + "dashboard");

  return (
    <main>
      login
      {/* <h1>{t("title")}</h1>
      <IntLink href="/">Go Home</IntLink>
      <IntLink href="/dashboard">Dashboard</IntLink> */}
    </main>
  );
};

export default Login;
