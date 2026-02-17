import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { SingleArticle } from "../types";

const NewsDetail = () => {
    const [artData, setArtData] = useState<null | SingleArticle>(null);
    const params = useParams();
    console.log(params);
    console.log(params.id);

    const url = "https://api.spaceflightnewsapi.net/v4/articles/" + params.id;

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
                setArtData(result);
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div>
                <h2>{artData?.title}</h2>
                <div className="d-flex align-items-center gap-3">
                    <div>
                        <img
                            src={artData?.image_url}
                            alt={artData?.title}
                            style={{ height: "200px" }}
                        />{" "}
                    </div>
                    <div className="" style={{ textAlign: "justify" }}>
                        <span>{artData?.summary}</span>
                        {artData && " Read at: "}
                        <a href={artData?.url} target="_blank">
                            {artData?.news_site}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NewsDetail;
