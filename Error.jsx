import React from "react";
import { TbFaceIdError } from "react-icons/tb";

export default function () {
    return (
        <div className="flex flex-col justify-center items-center mt-24">

            <TbFaceIdError size={100} />

            <p className=" mt-10 text-3xl opacity-40">Username is Wrong ! Please Enter Again</p>


        </div>
    )
}