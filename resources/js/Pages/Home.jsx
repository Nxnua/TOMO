import Banner from "../components/banner";
import SignUp from "../components/signup";
import Start from "../components/start";
export default function Home() {
  return (
    <div >
      <div className="flex tracking-tight relative bg-[#bcf5f7]">
        <Banner />
        <SignUp />
      </div>
    </div>
  );
}
