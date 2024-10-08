import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row sm:gap-10">
      <div className="sm:w-full sm:max-w-[18rem]">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <Sidebar />
      </div>
      <div className="flex w-full flex-col p-4">
        <div className="w-fit">
          <label
            htmlFor="sidebar-mobile-fixed"
            className="btn-primary btn sm:hidden"
          >
            Open Sidebar
          </label>
        </div>
        <div className="my-4 grid grid-cols-2 gap-4">
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>

          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
