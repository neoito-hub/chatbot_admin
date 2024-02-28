"use client";
import React, { useState } from "react";
import Link from "next/link";
import ChatBotList from "./ChatBotList";

const ProjectListing = () => {
  const [tabActive, setTabActive] = useState("inprogress");
  return (
    <div className="float-left mt-6 w-full">
      <div className="md-h-scroll-primary float-left flex w-full overflow-x-auto">
        <div className="border-ab-gray-dark float-left flex w-full space-x-3 border-b">
          <div
            onClick={() => setTabActive("inprogress")}
            className={`text-sm relative -bottom-px flex cursor-pointer items-center justify-center border-b-2 px-3 py-2.5 font-medium ${
              tabActive === "inprogress"
                ? "text-primary border-primary"
                : "text-ab-black hover:text-primary border-transparent"
            }`}
          >
            <p className="whitespace-nowrap">Projects In progress</p>
          </div>
          <div
            onClick={() => setTabActive("completed")}
            className={`text-sm relative -bottom-px flex cursor-pointer items-center justify-center border-b-2 px-3 py-2.5 font-medium ${
              tabActive === "completed"
                ? "text-primary border-primary"
                : "text-ab-black hover:text-primary border-transparent"
            }`}
          >
            <p className="whitespace-nowrap">Completed Projects</p>
          </div>
        </div>
      </div>
      <div className="bg-ab-black-medium float-left mt-5 flex w-full justify-between space-x-3">
        <div className="float-left flex-grow overflow-hidden">
          <input
            type="text"
            className="search-input-white border-ab-gray-dark text-ab-black h-9 w-full rounded-md border !bg-[length:14px_auto] px-2 pl-8 text-sm focus:outline-none"
            placeholder="Search Space"
          />
        </div>
        <Link
          href={"/configure/basic-info"}
          className="btn-primary text-ab-sm disabled:bg-ab-disabled inline-flex flex-shrink-0 items-center rounded px-5 py-2.5 font-bold leading-tight text-white transition-all"
        >
          <svg
            className="mr-2.5"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00033 0.666748V11.3334M0.666992 6.00008H11.3337"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          New Project
        </Link>
      </div>
      <div className="float-left w-full overflow-x-hidden py-3 mt-2">
        {tabActive === "inprogress" && <ChatBotList tabActive={tabActive} />}
        {tabActive === "completed" && <ChatBotList tabActive={tabActive} />}
      </div>
    </div>
  );
};

export default ProjectListing;
