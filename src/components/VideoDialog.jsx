/* eslint-disable react/prop-types */
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";

const VideoDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/73 duration-300 ease-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
        <DialogPanel
          transition
          className="w-full max-w-[90%] md:max-w-2xl lg:max-w-[1000px] aspect-video bg-black rounded-lg shadow-lg overflow-hidden"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/m4hLILodY1o"
            title="YouTube Video"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
            className="rounded-lg "
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default VideoDialog;
