import React from "react";
import { CiStar } from "react-icons/ci";
import { GoRepoForked } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";

export default function Repository({ name, language, description, forks_count, stargazers_count }) {
    return (
        <div className="flex flex-row justify-center items-center mt-4">

            <div className="flex flex-row mt-10 overflow-hidden">

                <div className="rounded-2xl w-[370] h-auto bg-green-50">
                    <div className="flex flex-row gap-5">
                        <RiGitRepositoryLine size={25} className="ml-5 mt-6 opacity-70" /> <span className="mt-5 font-semibold text-lg text-blue-600">{name}</span>
                    </div>
                    <div className="flex flex-row mt-6 justify-start">
                        <h4 className="font-semibold ml-6">{language}</h4>
                        <CiStar size={25} className="opacity-60 ml-7" /> <span className="ml-2 font-semibold mt-0.5">{stargazers_count}</span>
                        <GoRepoForked size={25} className="opacity-60 ml-7" />  <span className="ml-2 font-semibold mt-0.5">{forks_count}</span>
                    </div>
                    <p className="mt-6 ml-5 w-72 mb-6">{description}</p>
                </div>

            </div>

        </div>

    )
}