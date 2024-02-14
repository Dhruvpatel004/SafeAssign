import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Url() {
  const url = "https://youtu.be/SXAYiX49bbc?si=WjeVWBtlliQy75zJ";
  const [previewData, setPreviewData] = useState("");

  const isYouTubeURL = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const extractYouTubeVideoId = (url) => {
    const videoIdRegex =
      /(?:\/embed\/|\/watch\?v=|\/(?:embed\/|v\/|watch\?.*v=|youtu\.be\/|embed\/|v=))([^&?#]+)/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : "";
  };

  const fetchData = async () => {
    try {
      if (isYouTubeURL(url)) {
        const videoId = extractYouTubeVideoId(url);
        const videoInfoResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyBiIxhFwkv6r3PMaNkrnxjvFXwLEKiHMC0&part=snippet`
        );
        const videoInfoData = await videoInfoResponse.json();
        const title = videoInfoData.items[0].snippet.title;
        const description = videoInfoData.items[0].snippet.description;
        const image = videoInfoData.items[0].snippet.thumbnails.default.url;

        setPreviewData({
          title,
          description,
          isYouTubeVideo: true,
          image,
        });
      } else {
 
        // console.log(response);
        setPreviewData({
          title,
          description,
          image
        });
      }
    //   setLoading(false);
    } catch (error) {
      console.error(error);
    //   setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div class="flex flex-col gap-1 w-full max-w-[380px]">
        <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <p class="text-sm font-normal pb-2.5 text-gray-900 dark:text-white">
            <Link
              to="https://github.com/themesberg/flowbite"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-700 dark:text-blue-500 underline hover:no-underline font-medium break-all"
            >
              {url}
            </Link>
          </p>
          <Link
            to="https://github.com/themesberg/flowbite"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500"
          >
            <img src={previewData.image} class="rounded-lg mb-2" />
            <span class="text-sm font-medium text-gray-900 dark:text-white mb-2">
              {previewData.title}
            </span>
            <br />
            <span class="text-xs text-gray-500 dark:text-gray-400 font-normal">
              {url}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Url;
