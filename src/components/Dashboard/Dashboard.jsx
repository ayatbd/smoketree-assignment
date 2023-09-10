import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-white">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-indigo-500">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div>
            <ul className="menu p-4 w-[15rem] h-full text-base-content">
              <li>
                <NavLink
                  to="/dashboard/selectedclass"
                  className="font-bold text-white"
                >
                  Name
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/selectedclass"
                  className="font-bold text-white"
                >
                  Address
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
