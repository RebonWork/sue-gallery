import Sidebar from "@/components/Dashboard/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
