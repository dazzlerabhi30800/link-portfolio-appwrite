import { linkContext, useLinkContext } from "../../utils/Store";

export default function Alert() {
  const { alertMessage, showAlert } = useLinkContext() as linkContext;
  return (
    <div
      className={`p-5 rounded-md bg-transparent text-white text-lg md:text-xl font-semibold border-2 border-sky-400 absolute right-5 top-5 transition linear duration-300 ${showAlert ? "translate-x-0" : "translate-x-[300px]"}`}
    >
      {alertMessage.length > 1 ? alertMessage : "Your request completed"}
    </div>
  );
}
