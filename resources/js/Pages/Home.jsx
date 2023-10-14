import Banner from "../components/banner";
import Start from "../components/start";
export default function Home() {
  return (
    <div>
      <div className="flex relative">
        <Banner />
        <Start />
      </div>
    </div>
  );
}
