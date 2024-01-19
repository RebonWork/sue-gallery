import ProfileSidebarRoutes from "./ProfileSidebarRoutes";

const BigProfileSidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="flex flex-col w-full">
        <ProfileSidebarRoutes />
      </div>
    </div>
  );
};

export default BigProfileSidebar;
