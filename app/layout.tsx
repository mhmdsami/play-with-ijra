export const metadata = {
  title: "play with ijra",
  description: "A sandbox repo for agent-driven changes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
