import { FormEvent } from "react";
import { linkContext, useLinkContext } from "../../utils/Store";
import { FaTimes } from "react-icons/fa";

type addForm = {
  category: string;
};
export default function AddForm({ category }: addForm) {
  const { addDocs, setAdd, changeId, formData, setFormData, completeEdit } =
    useLinkContext() as linkContext;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.title || !formData.link || !category) return;
    return changeId
      ? completeEdit(category)
      : addDocs(formData.title, formData.link, category);
  };

  // console.log(formData.title);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 p-5 rounded-md shadow-md w-[95%] max-w-[350px] bg-neutral-900"
    >
      <button
        type="button"
        onClick={() => setAdd(false)}
        className="text-lg text-gray-400 hover:text-cyan-500 md:text-xl self-end"
      >
        <FaTimes />
      </button>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="md:text-lg">
          Title
        </label>
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
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
        {changeId ? "Update" : "Submit"}
      </button>
    </form>
  );
}
