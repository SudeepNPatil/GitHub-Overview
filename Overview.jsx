import React, { useState } from "react";

export default function Overview({ collectdata, inputvalue }) {

    return (
        <div className="flex flex-col items-center justify-center">

            <h1 className="text-4xl font-bold mt-16"> Overview Of <span className="text-blue-600">{inputvalue}</span></h1>

            <div className="flex flex-row justify-center gap-5 mt-3">
                <img src={collectdata.avatar_url} alt="" className="border w-40 h-40 bg-gray-100 mt-5 rounded-full" />

                <div className="flex flex-col mt-5">

                    <h2 className="text-2xl font-bold w-60 mt-5">{collectdata.name}</h2>

                    <h3 className="mt-1 w-60 ">{collectdata.location}</h3>

                    <h4 className="mt-1 w-60">{collectdata.bio}</h4>

                </div>

            </div>

            <button className="h-10 w-32 shadow-lg border bg-blue-50 rounded-xl mt-8">Follow</button>

            <div className="flex flex-row gap-20 mt-10">

                <div className="text-center">
                    <h2 className="font-bold text-xl mb-3">FOLLOWERS</h2>
                    <span className="text-4xl text-blue-600 font-bold">{collectdata.followers}</span>
                </div>

                <div className="text-center">
                    <h2 className="font-bold text-xl mb-3">FOLLOWING</h2>
                    <span className="text-4xl text-blue-600 font-bold">{collectdata.following}</span>
                </div>

                <div className="text-center">
                    <h2 className="font-bold text-xl mb-3">PUBLIC_REPO</h2>
                    <span className="text-4xl text-blue-600 font-bold">{collectdata.public_repos}</span>
                </div>

                <div className="text-center">
                    <h2 className="font-bold text-xl mb-3">PUBLIC_GITS</h2>
                    <span className="text-4xl text-blue-600 font-bold">{collectdata.public_gists}</span>
                </div>

            </div>


        </div>
    )
}