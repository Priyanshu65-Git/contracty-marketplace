import Link from "next/link";
import { auth } from "@/app/auth";

const HomepageCTA = async () => {
  const session = await auth();
  return (
    <section className="bg-[#1E293B] py-24 px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-5">
        <h2 className="text-4xl font-bold text-white text-center">
          Ready to start your project?
        </h2>

        <Link
          href="/contractors"
          className="flex items-center justify-center w-65.5 h-12 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-base font-semibold rounded-lg transition-colors"
        >
          Explore Trusted Contractors →
        </Link>

        {!session && (
          <p className="text-[#94A3B8] text-sm align-middle">
            <Link
              href="/signup"
              className="underline hover:text-white transition-colors"
            >
              sign up as a contractor
            </Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default HomepageCTA;
