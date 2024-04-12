import Header from "@/components/Global/Header/Header";

export default function LayoutClient({ children }) {
  return (
    <main className="to-custom-background-700">
      <Header />
      <div>{children}</div>
    </main>
  );
}
