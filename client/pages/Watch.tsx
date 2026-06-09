import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VIDEOS } from "@/data/videos";

export default function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const video = VIDEOS.find(v => v.id === id);

    // Redirect to home — video will open in popup via openVideoModal event
    navigate("/", { replace: true });

    // After redirect, trigger the modal
    setTimeout(() => {
      if (!isAuthenticated) {
        window.dispatchEvent(new CustomEvent("openAuthModal", { detail: { videoId: id } }));
      } else if (video) {
        window.dispatchEvent(new CustomEvent("openVideoModal", { detail: { videoId: id } }));
      }
    }, 100);
  }, []);

  return null;
}
