"use client";

import IntLink from "@/utils/IntLink";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Index() {
  const t = useTranslations("Index");
  const path = usePathname();
  console.log("path: ",path)
  console.log(path.slice(3 - path.length));

  // console.log(path.slice(3 - path.length) + "dashboard");
  return (
    <>
      <IntLink href='/de'>
        Switch to German
      </IntLink>
      <Link href='/de'>German 
</Link>
      <h1>{t("title")}</h1>
    </>
  );
}
