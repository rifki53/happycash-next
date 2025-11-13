// components/testimonials/ModalVideo.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import secondaryIllustration from "@/public/images/icon/secondary-illustration.svg";

// Definisikan tipe untuk props
interface ModalVideoProps {
  thumb: StaticImageData | string;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  // State untuk mengontrol visibilitas modal
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // Ref untuk elemen video
  const videoRef = useRef<HTMLVideoElement>(null);

  // Efek untuk memutar video saat modal terbuka
  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [modalOpen]);

  return (
    <div className="relative">
      {/* Ilustrasi sekunder */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={secondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
          loading="lazy"
        />
      </div>

      {/* Thumbnail Video */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring focus-visible:ring-indigo-200"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
      >
        <figure className="relative overflow-hidden rounded-2xl bg-green-200">
          <Image
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
            loading="lazy"
          />
        </figure>
      </button>
      {/* Akhir: Thumbnail Video */}

      <Transition show={modalOpen} as="div">
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Backdrop Modal */}
          <Transition.Child
            as="div"
            className="fixed inset-0 z-[99999] bg-black/70"
            aria-hidden="true"
          />
          {/* Akhir: Backdrop Modal */}

          {/* Dialog Modal */}
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
          {/* Akhir: Dialog Modal */}
        </Dialog>
      </Transition>
    </div>
  );
}
