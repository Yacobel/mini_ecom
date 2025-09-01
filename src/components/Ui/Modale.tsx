import { Dialog, Transition } from "@headlessui/react";
import { Fragment, type ReactNode } from "react";
import { colors, formInputsList } from "../../data";

interface Ipropse {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  title?: string;
}

function Modal({ isOpen, closeModal, children, title }: Ipropse) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg  font-bold leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  )}

                  <div className="mt-2 flex flex-col">
                    {formInputsList.map((el) => {
                      return (
                        <>
                          <label
                            className="block my-2 text-gray-500"
                            htmlFor={el.name}
                          >
                            {el.label}
                          </label>
                          <input
                            className="border-2 border-blue-700 p-2 rounded-md focus:border-blue-950"
                            type={el.type}
                            name={el.name}
                            id={el.name}
                          />
                        </>
                      );
                    })}
                  </div>
                  <div className="mt-2  flex space-x-1">
                    {colors.map((el) => {
                      return (
                        <div
                          key={el}
                          className={`w-6 h-6 rounded-full`}
                          style={{ backgroundColor: el }}
                        ></div>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex gap-5">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
