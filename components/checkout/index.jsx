import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
import Confirm from "./Confirm";
import Overview from "./Overview";

const Details = () => {
  const { bookObj } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    if (!bookObj) {
      return router.back();
    }
  }, [bookObj, router]);

  return (
    <div className="pt-16">
      <div className="w-10/12 mx-auto mt-10 flex justify-between gap-5 flex-wrap md:flex-nowrap flex-col-reverse md:flex-row">
        <div className="space-y-5 md:w-8/12 w-full">
          <Confirm />
        </div>
        <div className="md:w-4/12 w-full">
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default Details;
