import { footerInfo } from "@/utils/footerInfo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto py-6">
        <div className="grid grid-cols-4 gap-6">
          {footerInfo.map((data) => (
            <div key={data.id} className="text-center">
              <h3 className="font-bold pb-1 mb-1 border-b rounded-full">
                {data.name}
              </h3>

              <div className="flex flex-col text-sm">
                {data.items.map((item) => (
                  <Link
                    href={item.toLowerCase().split(" ").join("-")}
                    key={Math.random()}
                    className="mt-1 transition-all duration-300 hover:text-rose-500"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-2 border-t text-sm">
        <p className="text-center">
          &copy; {new Date().getFullYear()} All Rights Reserved By&nbsp;
          <span className="text-rose-500">Nadim, Rafi, Tanvin</span>
        </p>
      </div>
    </footer>
  );
}
