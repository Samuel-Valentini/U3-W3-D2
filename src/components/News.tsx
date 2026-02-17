import { useEffect, useState } from "react";
import type { Spaceflight } from "../types";

const url: string = "https://api.spaceflightnewsapi.net/v4/articles";

const News = () => {
    const [data, setData] = useState<null | Spaceflight>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("error in first .then");
                }
            })
            .then((result) => {
                setData(result);
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="">
            <h1 className="text-center">Space News</h1>
            {data?.results.map((result) => {
                return (
                    <div
                        key={result.id}
                        className="container p-1 border border-1 border-info my-1 mx-auto">
                        <h2>{result.title}</h2>
                        <div className="d-flex align-items-center gap-3">
                            <div>
                                <img
                                    src={result.image_url}
                                    alt={result.title}
                                    style={{ height: "50px" }}
                                />{" "}
                            </div>
                            <div className="" style={{ textAlign: "justify" }}>
                                <span>{result.summary}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default News;
