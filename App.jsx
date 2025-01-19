import React, { useState } from "react";
import { GrGithub } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import Overview from "./Overview";
import Error from "./Error";
import Repository from "./Repository";


export default function App() {

    const [inputvalue, setinpuvalue] = useState()
    const [confirmvalue, setconfirmvalue] = useState()

    const [repoinfo, getrepoinfomation] = useState([])


    const [collectdata, setcollectdata] = useState({

        avatar_url: "",
        name: "",
        bio: "",
        location: "",
        followers: 0,
        following: 0,
        public_repos: 0,
        public_gists: 0,

    })


    const handlechange = (e) => {
        setinpuvalue(e.target.value)

    }


    async function getrepoinfo() {

        let url = `https://api.github.com/users/${inputvalue}/repos`;

        try {
            const response = await fetch(url);
            const data = await response.json();


            const repoinfo = data.map(data => {
                return {
                    "name": data.name,
                    "language": data.language,
                    "stargazers_count": data.stargazers_count,
                    "forks_count": data.forks_count,
                    "description": data.description
                }
            });

            //console.log(repoinfo);

            getrepoinfomation(repoinfo);
        }
        catch (error) {
            console.log("Error :", error);
        }
    }



    const handlekeypress = (e) => {
        if (e.key === 'Enter') {

            let url = `https://api.github.com/users/${inputvalue}`
            fetch(url)
                .then((Response) => Response.json())
                .then((Response) => {

                    console.log(Response);

                    if (Response.login) {
                        setconfirmvalue("success");
                    } else {
                        setconfirmvalue("error");
                    }

                    setcollectdata(
                        {
                            avatar_url: Response.avatar_url,
                            name: Response.name,
                            bio: Response.bio,
                            location: Response.location,
                            followers: Response.followers,
                            following: Response.following,
                            public_repos: Response.public_repos,
                            public_gists: Response.public_gists,
                        }
                    )


                })
                .catch((reject) => {
                    console.log("reject");
                    setconfirmvalue("error")

                })

            getrepoinfo()

        }

    }




    return (
        <div className="flex flex-col justify-center items-center mb-14">


            <div className="flex items-center mt-4 gap-2">
                <GrGithub size={45} />
                <span className="text-4xl font-bold"> Github UserName </span>
            </div>

            <input type="text" name="username" onChange={handlechange} onKeyDown={handlekeypress} placeholder="Enter your username" className="text-sm w-1/2 h-12 border mt-10 rounded-xl shadow-lg pl-14" />

            <span className="absolute left-1/4 top-24 opacity-40 pt-3 pl-2"><CiSearch size={32} /></span>


            {/*  conditional rendering */}

            {confirmvalue === "success" && (

                <Overview collectdata={collectdata} inputvalue={inputvalue} />
            )}
            {confirmvalue === "error" && (

                <Error />

            )}

            {
                repoinfo != 0 && confirmvalue != "error" && <h1 className="text-3xl mt-14 font-bold">Repositories</h1>
            }


            <div className="flex flex-row flex-wrap justify-center gap-x-16 gap-y-6 w-2/3">
                {
                    repoinfo != 0 && confirmvalue != "error" &&

                        (repoinfo && repoinfo.length > 0) ? (
                        repoinfo.map((repo, index) => (

                            <Repository
                                key={index}
                                name={repo.name}
                                language={repo.language}
                                stargazers_count={repo.stargazers_count}
                                forks_count={repo.forks_count}
                                description={repo.description}
                                inputvalue={inputvalue}
                            />

                        )
                        ))
                        : (
                            ''
                        )

                }
            </div>


        </div>
    )
}