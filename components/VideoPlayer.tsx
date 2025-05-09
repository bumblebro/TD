"use client";

import { forwardRef, useImperativeHandle } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
  title: string;
  thumbnail?: string;
}

export interface VideoPlayerRef {
  stop: () => void;
}

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ src, title, thumbnail }, ref) => {
    useImperativeHandle(ref, () => ({
      stop: () => {
        // ReactPlayer handles stopping internally
      },
    }));

    // Create a proxy URL for the video source
    const proxyUrl = `/api/proxy?url=${encodeURIComponent(src)}`;

    return (
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-black rounded-lg">
        <ReactPlayer
          url={proxyUrl}
          width="100%"
          height="100%"
          controls={true}
          light={thumbnail}
          playing={false}
          pip={true}
          stopOnUnmount={true}
          config={{
            file: {
              attributes: {
                title: title,
                playsInline: true,
              },
            },
          }}
          style={{ aspectRatio: "16/9" }}
          className="react-player"
        />
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
