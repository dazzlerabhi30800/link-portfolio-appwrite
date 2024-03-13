import Link from "next/link";
import { FaClipboard, FaTrash } from "react-icons/fa";
import { linkContext, useLinkContext } from "../../utils/Store";

export default function LinkComp({ data, category }: { data: link, category: string }) {
  const { title, link, id } = data;
  const { deleteDoc, setShowAlert, setAlertMessage } =
    useLinkContext() as linkContext;
  return (
    <div className="grid grid-cols-2 gap-3 justify-between p-5 text-lg md:text-xl border-2 border-cyan-500 rounded-lg text-wrap">
      <h2 className="font-semibold">{title}</h2>

      <div className="place-self-end flex items-center gap-2">
        <button
          onClick={() => {
            setShowAlert(true);
            setAlertMessage("link copied to clipboard");
            navigator.clipboard.writeText(link);
            setTimeout(() => {
              setShowAlert(false);
            }, 4000);
          }}
          className="p-3 bg-green-500 text-white text-xl rounded-md transition duration-200 shadow-md linear shadow-green-500/50 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          <FaClipboard />
        </button>
        <button
          onClick={() => deleteDoc(id, category)}
          className="p-3 bg-rose-500 text-white text-xl rounded-md transition duration-200 shadow-md linear shadow-rose-500/50 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          <FaTrash />
        </button>
      </div>
      <Link
        href={link}
        className="underline italic col-span-2 text-sm md:text-base text-indigo-300 place-self-start mt-3 hover:text-indigo-500"
        target="_blank"
      >
        {link}
      </Link>
    </div>
  );
}
