import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="no-scrollbar hidden flex-col xl:flex">
      <div className="sticky top-8">
        <section className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-form">
          <div className="h-30 w-full bg-gradient-mesh bg-cover bg-no-repeat" />
          <div className="relative flex px-6 max-xl:justify-center py-4 gap-4">
            <div className="flex-center absolute -top-8 left-4 size-18 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile "></div>
            <div className="flex flex-col gap-1 mt-8">
              <h1 className="text-24 font-semibold text-gray-900">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-14 font-medium text-gray-500">{user.email}</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-between gap-8 px-6 py-8">
          <div className="flex w-full justify-between">
            <h2 className="text-18 font-semibold text-gray-900">My Banks</h2>
            <Link href={"/"} className="flex gap-2">
              <Image src="/icons/plus.svg" alt="plus" width={20} height={20} />
              <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
            </Link>
          </div>
          {banks.length > 0 ? (
            <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
              <div className="relative z-10">bank card 1</div>
              {banks[1] && (
                <div className="absolute top-0 left-0 z-0">bank card 2</div>
              )}
            </div>
          ) : (
            <p className="text-14 font-medium text-gray-500">
              No banks added yet.
            </p>
          )}
        </section>
      </div>
    </aside>
  );
};

export default RightSidebar;
