import React, { useState, useEffect } from "react";
import NavBarAdmin from "../../components/admin/NavBarAdmin";
import "../../styles/admin/content.scss";

export default function Content() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/videos/`)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  const deleteVideos = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/videos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete video.");
      }

      setVideos(videos.filter((video) => video.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <NavBarAdmin />
      <main>
        <div className="videos">
          <h1>Videos Panel</h1>
          <div className="videos-card">
            {videos.map((video) => (
              <div key={video.id}>
                <h3>{video.title}</h3>
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg"
                    alt="Logo YouTube"
                    height="30"
                  />
                </a>{" "}
                <p>{video.description}</p>
                <br />
                <button type="button" onClick={() => deleteVideos(video.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
