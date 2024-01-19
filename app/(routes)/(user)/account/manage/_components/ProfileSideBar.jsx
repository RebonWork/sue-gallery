import ProfileNavbarRoutes from "./ProfileSidebarRoutes";
import ProfileMobileSidebar from "./ProfileMobileSidebar";
import BigProfileSidebar from "./BigProfileSidebar";

const ProfileSideBar = () => {
  return (
    <div className="h-full">
      <div className=" md:hidden h-[80px] w-full inset-x-0 fixed z-50 ">
        <ProfileMobileSidebar />
      </div>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
        <BigProfileSidebar />
      </div>
    </div>
  );
};

export default ProfileSideBar;
