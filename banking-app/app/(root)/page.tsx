import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "g" };
  return (
    <section className="flex w-full flex-col gap-8">
      <div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
        <header className="flex flex-col justify-between gap-6">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Explore the dashboard to manage your finances effectively."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={2500}
          />
        </header>

        <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
      </div>
    </section>
  );
};

export default Home;
