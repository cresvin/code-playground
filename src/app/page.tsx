import { Navbar } from "@/components/navbar";
import { Panels } from "@/components/panels";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh">
      <Navbar />
      <Panels />
    </div>
  );
}
