import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import Overview from "./Overview";

const Layout = () => {
  return (
    <div className="grow">
      <Navbar />
      <main className=" p-8 space-y-6">
        <aside className="flex justify-between items-center">
          <h1 className="text-text-dark text-xl font-medium">Overview</h1>
          <select className="p-2 bg-white border-2 rounded-md text-text font-normal">
            <option>This Month</option>
          </select>
        </aside>
        <Overview />
        <h1 className="text-text-dark text-xl font-medium">
          Transactions | This Month
        </h1>
        <aside className=" space-x-3">
          <span className="py-1.5 px-4 bg-[#e6e6e6] rounded-full text-sm font-medium text-[#808080]">
            Payouts {"(22)"}
          </span>
          <span className="py-1.5 px-4 bg-[#146eb4] rounded-full text-sm font-medium text-white">
            Refunds {"(6)"}
          </span>
        </aside>
        <Table />
      </main>
    </div>
  );
};

export default Layout;
