import Main from "@/components/Main";
import Offers from "@/components/Offers";
import Packages from "@/components/Packages";
import SectionTwo from "@/components/SectionTwo";



export default function Home() {
  return (
    <div className="overflow-hidden">
    <Main />
    <SectionTwo />
    <Offers />
    <Packages />
    </div>
  );
}
