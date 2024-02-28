"use client";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
// import Image from "next/image";
// import ChatIcon from "../app/assets/img/icons/chat.svg";
// import LogIcon from "../app/assets/img/icons/log.svg";
import apiHelper from "./common/apiHelper";

const ChatBotList = ({ tabActive }: any) => {
  const getProjectListApiUrl = "api/list_projects";

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await apiHelper({
        baseUrl: process.env.BACKEND_BASE_URL,
        subUrl: getProjectListApiUrl,
        value: { context_status: tabActive === "inprogress" ? 1 : 2 },
        apiType: "post",
      });
      setProjectList(res?.data?.projects);
    })();
  }, []);

  return (
    <div className="float-left w-full">
      <div className="grid grid-cols-3 gap-3">
        {projectList?.map((project: any) => (
          <Link
            href={`/configure/basic-info/?project_id=${project.id}`}
            key={project?.id}
            className="border-ab-gray-dark/60 float-left flex w-full flex-col border bg-white p-3 cursor-pointer"
          >
            <div className="float-left w-full">
              <p className="text-xl text-ab-black overflow-hidden text-ellipsis font-semibold">
                {project?.name}
              </p>
              <div className="text-ab-black/60 info-group mt-1.5 flex flex-wrap text-xs font-medium">
                <span>{project?.category}</span>
                <span> {dayjs(project?.created_at).format("DD MMM YYYY")}</span>
              </div>
            </div>
            <div className="float-left flex w-full items-center mt-2">
              <p className="py-1 text-sm text-ab-black font-medium">
                {project?.description}
              </p>
            </div>
            {/* <div className="border-ab-dark text-ab-black float-left mt-1 flex w-full flex-wrap items-center border-t pt-1 font-medium">
              <p className="mt-2 mr-4 flex items-center text-xs">
                <Image
                  className="mr-1"
                  src={ChatIcon}
                  width="16"
                  height="16"
                  alt="Chat"
                />
                Chat
              </p>
              <p className="mt-2 flex items-center text-xs">
                <Image
                  className="mr-1"
                  src={LogIcon}
                  width="12"
                  height="14"
                  alt="Log"
                />
                Training Logs
              </p>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatBotList;
