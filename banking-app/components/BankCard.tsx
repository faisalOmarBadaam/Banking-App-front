import Link from "next/link";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className="relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-bank-gradient shadow-creditCard backdrop-blur-[6px];"
      >
        <div className="relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-700 bg-bank-gradient px-5 pb-4 pt-5;">
          <div className="">
            <h1 className="text-16 font-semibold text-white">{account.name}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {account.currentBalance}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white ">{userName}</h1>
              <h2 className="text-12 font-semibold text-white ">**/**</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1,1px] text-white"></p>
          </article>
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
