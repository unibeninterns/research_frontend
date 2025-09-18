import { Search } from "lucide-react";

const AdminSearchBar = () => {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        className="flex-1 outline-none text-sm"
      />
      <Search className="h-4 w-4" />
    </>
  );
};

export default AdminSearchBar;
