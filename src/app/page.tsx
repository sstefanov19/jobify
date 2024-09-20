import JobleeFeatures from "~/components/JobleeFeatures";
import Welcome from "~/components/Welcome";


export default function HomePage() {
  return (
    <main className="flex h-[150vh] flex-col items-center justify-center bg-gradient-to-b from-slate-600 to-slate-800 text-white">
        <div className="h-[100vh] w-full">
        <Welcome />
        </div>
        <div className="h-[50vh] w-full">
        <JobleeFeatures />
        </div>
    </main>
  );
}
