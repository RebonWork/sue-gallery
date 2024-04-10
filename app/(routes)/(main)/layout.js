import Header from "@/components/Global/Header/Header";

export default function LayoutClient({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
