import React from "react";
import { CustomFooter } from "../components/CustomFooter";
import { Alert } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const Message = () => {
  const location = useLocation();

  const { type, text } = location.state;
  return (
    <>
      <section className="w-full flex flex-col items-center px-[10%]">
        <div className="w-full grid grid-cols-1 py-20 gap-2">
          <Alert color={type ? type : null}>{text}</Alert>
          <Link className="text-center" to={"/"}>
            Go To Home
          </Link>
          {/* <Link className="text-center" to={"/login"}>
            login
          </Link> */}
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export { Message };
