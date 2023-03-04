// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <h1>This is the main layout</h1>

//         {children}

//         <footer>Footer</footer>
//       </body>
//     </html>
//   );
// }

import { NextIntlClientProvider } from "next-intl/client";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Ensome | Contacts",
  description: "contact page to ge to the ensome team",
};
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "fr" }];
}

type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function LocaleLayout({ children, params: { locale } }: LayoutProps) {
  let messages;
  try {
    messages = (await import(`public/messages/contacts/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
