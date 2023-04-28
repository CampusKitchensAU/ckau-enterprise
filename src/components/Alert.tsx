import { type Dispatch, type SetStateAction, useEffect } from "react";
import { MdCheckCircle, MdClose, MdInfo } from "react-icons/md";
import { IoMdCloseCircle, IoMdWarning } from "react-icons/io";

type AlertType = "SUCCESS" | "ERROR" | "WARNING" | "INFO";

export type AlertProps = {
  type: AlertType;
  message: string;
  show: boolean;
  disappearTime?: number;
};

const Alert = ({
  data,
  setData,
}: {
  data: AlertProps;
  setData: Dispatch<SetStateAction<AlertProps>>;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ ...data, show: false });
    }, data.disappearTime || 5000);
    return () => clearTimeout(timer);
  }, [data, setData]);

  if (!data.show) return null;
  switch (data.type) {
    case "SUCCESS":
      return (
        <div className="fixed bottom-12 right-12 w-96 rounded-md bg-green-50 p-4 shadow transition-all">
          <div className="flex">
            <div className="flex-shrink-0">
              <MdCheckCircle
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                {data.message}
              </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                  onClick={() => setData({ ...data, show: false })}
                >
                  <span className="sr-only">Dismiss</span>
                  <MdClose className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    case "ERROR":
      return (
        <div className="fixed bottom-12 right-12 w-96 rounded-md bg-red-50 p-4 shadow transition-all">
          <div className="flex">
            <div className="flex-shrink-0">
              <IoMdCloseCircle
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{data.message}</p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                  onClick={() => setData({ ...data, show: false })}
                >
                  <span className="sr-only">Dismiss</span>
                  <MdClose className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    case "WARNING":
      return (
        <div className="fixed bottom-12 right-12 w-96 rounded-md bg-yellow-50 p-4 shadow transition-all">
          <div className="flex">
            <div className="flex-shrink-0">
              <IoMdWarning
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-yellow-800">
                {data.message}
              </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-yellow-50 p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50"
                  onClick={() => setData({ ...data, show: false })}
                >
                  <span className="sr-only">Dismiss</span>
                  <MdClose className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    case "INFO":
      return (
        <div className="fixed bottom-12 right-12 w-96 rounded-md bg-blue-50 p-4 shadow transition-all">
          <div className="flex">
            <div className="flex-shrink-0">
              <MdInfo className="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-blue-800">
                {data.message}
              </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-blue-50 p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50"
                  onClick={() => setData({ ...data, show: false })}
                >
                  <span className="sr-only">Dismiss</span>
                  <MdClose className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default Alert;
