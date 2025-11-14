// components/user-story/testimonials/modal-video.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlay } from "react-icons/fa";

interface ModalVideoProps {
  thumb: StaticImageData | string;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [modalOpen]);

  return (
    <div className="relative h-full w-full">
      <button
        // PERUBAHAN: Hapus rounded-2xl dari button
        className="group relative flex h-full w-full items-center justify-center focus:outline-none"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
      >
        {/* PERUBAHAN: Hapus rounded-2xl dari Image */}
        <Image
          className="h-full w-full object-cover"
          src={thumb}
          width={768}
          height={432}
          alt={thumbAlt}
          loading="lazy"
        />

        <div className="pointer-events-none absolute bottom-5 left-5">
          <div
            className="flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-gray-900 shadow-lg transition-transform duration-300 group-hover:scale-110"
          >
            <FaPlay size={12} />
            <span className="text-sm font-semibold">Play</span>
          </div>
        </div>
      </button>

      {/* Modal Video (tidak ada perubahan) */}
      <Transition show={modalOpen} as="div">
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          <Transition.Child
            as="div"
            className="fixed inset-0 z-[99999] bg-black/70"
            aria-hidden="true"
          />
          <Transition.Child
            as="div"
            className="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-6 sm:px-6"
          >
            <div className="mx-auto flex h-full max-w-6xl w-full items-center">
              <Dialog.Panel className="aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
