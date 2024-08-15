import Image from "next/image";
import joinImg from "./assets/join.png";
import Homepage from "./homepage/homepage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Homepage />
    </main>
  );
}
