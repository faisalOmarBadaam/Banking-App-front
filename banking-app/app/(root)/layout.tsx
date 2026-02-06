import MobileNavBar from "@/components/MobileNavBar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col bg-gray-25">
        <div className="flex h-16 items-center justify-between bg-white px-5 shadow-creditCard sm:px-8 md:hidden">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Logo" />
          <MobileNavBar />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
