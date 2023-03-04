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
  title: "Ensome | Solutions",
  description: "our proposed solutions to common digital problems",
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
    messages = (await import(`public/messages/solutions/${locale}.json`)).default;
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
