import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@/app/components/atoms/Button";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="grid justify-center content-center space-y-[60px]">
      <div></div>
      <div className="text-center grid place-items-center space-y-6">
        <div className="text-center space-y-6">
          <h3 className="capitalize">solar potential profiling</h3>
          <p>
            View solar potential across geographic areas just by specifying
            local government areas, town or city for the 36 states in Nigeria.
            We have got you covered
          </p>
          <Button className="border border-[#151515E5] p-[8px_16px] rounded-md">
            <span>Explore</span> <ArrowRightAltIcon />
          </Button>
        </div>
        <div className="my-6">
          <Image
            src="/images/map_picture.png"
            alt="solar map"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
