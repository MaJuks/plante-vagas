import Banner from "./banner";

import { useUser } from "../userContextCompany";

export default function SubHeader() {
  const { UserData } = useUser();
  console.log(UserData);
  return (
    <div className="bg-oliveGreen mt-20 py-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80">
      <Banner />
    </div>
  );
}
