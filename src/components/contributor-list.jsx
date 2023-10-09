import React, { useEffect, useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import LinkedInIcon from "../assets/linkedin.svg";
import GitHubIcon from "../assets/github.svg";
import { useTranslation } from "react-i18next";

export default function ContributorList(props) {
  const { t } = useTranslation();
  const color = props.color;
  const [showDetails, setShowDetails] = useState(
    props.contributors.map(() => false)
  );

  function getInitials(name) {
    const titles = ["Prof.", "Dr.", "Dr.-Ing."];

    const names = name
      .split(" ")
      .filter((n) => !titles.includes(n))
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    return names;
  }

  function getColorClasses(color) {
    switch (color) {
      case "blue":
        return {
          border: "border-blue7",
          text: "text-blue9",
          bg: "bg-blue5",
        };
      case "green":
        return {
          border: "border-green7",
          text: "text-green9",
          bg: "bg-green5",
        };
      case "red":
        return {
          border: "border-red7",
          text: "text-red9",
          bg: "bg-red5",
        };
      default:
        return {
          border: "border-violet7",
          text: "text-violet9",
          bg: "bg-violet5",
        };
    }
  }

  const colorClasses = getColorClasses(color);

  function toggleDetails(index) {
    const updatedShowDetails = [...showDetails];
    updatedShowDetails[index] = !updatedShowDetails[index];
    setShowDetails(updatedShowDetails);
  }

  return (
    <>
      <h2 className="font-bold">{props.title}</h2>
      {props.contributors.map((contributor, index) => (
        <div key={index}>
          <div className="flex flex-row items-center justify-between gap-5 my-5 ">
            <div className="flex flex-row items-center gap-5">
              <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                <Avatar.Fallback className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-gray5 text-[15px] font-medium">
                  {getInitials(contributor.name)}
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="flex flex-col items-start">
                <p className="font-bold">{contributor.name}</p>
                <p
                  className={`mt-1 px-2 border rounded-full ${colorClasses.border} ${colorClasses.text} ${colorClasses.bg} text-[12px]`}
                >
                  {contributor.role}
                </p>
              </div>
            </div>
            <button
              className="bg-blue4 text-blue11 hover:bg-blue5 focus:shadow-blue7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              onClick={() => toggleDetails(index)}
            >
              {showDetails[index] ? "Hide Details" : "Details"}
            </button>
          </div>
          {showDetails[index] && (
            <div>
              <p>
                <strong>{t('authorspage.contact')}</strong> {contributor.email}
              </p>
              <p>
                <strong>{t('authorspage.work')}</strong>
              </p>
              <p>{contributor.description}</p>
              <div className="flex gap-2 mt-2">
              {contributor.github && (
                <a href={contributor.github}>
                  <img src={GitHubIcon} className="w-5 h-5" />
                </a>
              )}
              {contributor.linkedIn && (
                <a href={contributor.linkedIn}>
                  <img src={LinkedInIcon} className="w-5 h-5" />
                </a>
              )}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
