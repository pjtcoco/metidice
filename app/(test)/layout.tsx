export const metadata = {
  title: "Test",
  description: "Welcome to NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>This is the nested layout</h1>
      {children}
    </main>
  );
}
