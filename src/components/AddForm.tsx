import { Dispatch, FormEvent, SetStateAction } from "react";
import { linkContext, useLinkContext } from "../../utils/Store";

type addForm = {
  show: Dispatch<SetStateAction<boolean>>;
  category: string;
};
export default function AddForm({ show, category }: addForm) {
  const { addDocs } = useLinkContext() as linkContext;
  const handleSubmit = async (event: Event | FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(
      document.querySelector("form") as HTMLFormElement
    );
    let title = formData.get("title")?.toString();
    let link = formData.get("link")?.toString();
    if (!title || !link || !category) return;
    addDocs(title, link, category);
    show(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 p-5 rounded-md shadow-md w-[95%] max-w-[350px] bg-neutral-900"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="md:text-lg">
          Title
        </label>
        <input
          type="text"
          className="border border-sky-400 rounded-md py-2 px-4 bg-transparent text-white focus:outline-none focus:border-rose-400"
          name="title"
          placeholder="Title"
          id="title"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="link" className="md:text-lg">
          Link URL
        </label>
        <input
          type="text"
          className="border border-sky-400 rounded-md py-2 px-4 bg-transparent text-white focus:outline-none focus:border-rose-400"
          name="link"
          placeholder="Link"
          id="link"
        />
      </div>
      <button
        type="submit"
        className="py-2 px-6 shadow-lg bg-rose-500 transition ease-in-out duration-300 hover:bg-rose-700"
      >
        Submit
      </button>
    </form>
  );
}
