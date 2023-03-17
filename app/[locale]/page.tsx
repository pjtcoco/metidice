"use client";

import BlogCard from "@/components/cards/BlogCard";
import DesktopCard from "@/components/cards/DesktopCard";
import IsometricBrain3DIcon from "@/components/icons/IsometricBrain3DIcon";
import IntLink from "@/utils/IntLink";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Index() {
  // const t = useTranslations("Index");
  const path = usePathname();
  console.log("path: ", path);
  console.log(path.slice(3 - path.length));

  // console.log(path.slice(3 - path.length) + "dashboard");
  return (
    <>
      <IntLink href="/about">About Us</IntLink>
      <br />
      <br />
      <IntLink href="/blog">Blog</IntLink>
      <br />
      <br />

      <IntLink href="/contacts">Contacts</IntLink>
      <br />
      <br />

      <IntLink href="/faqs">FAQS</IntLink>
      <br />
      <br />

      <IntLink href="/services">Services</IntLink>
      <br />
      <br />

      <IntLink href="/solutions">Solutions</IntLink>
      <br />
      <br />

      <IntLink href="/teams">Teams</IntLink>
      <br />
      <br />

      <Link href="/en">English</Link>
      <br />
      <br />

      <Link href="/fr">French</Link>
      <br />
      <br />

      <Link href="/de">German</Link>
      <br />
      <br />

      {/* <h1>{t("title")}</h1> */}
      <DesktopCard title="Machine Learning" icon={<IsometricBrain3DIcon />} variant="variant3">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.
      </DesktopCard>
      <BlogCard date="22 June 2022" hasArrow title="Staffing software: key capabilities and top products" type="variant1">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...
      </BlogCard>
    </>
  );
}
