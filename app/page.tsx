import Image from "next/image";
import MyCombobox from "@/components/ComboBox";
import ReactSelect from "@/components/ReactSelect";

export default function Home() {
  return (
    <main className="bg-stone-100 h-screen">
      <section className="container max-w-3xl h-screen w-screen flex items-center justify-center mx-auto px-6 py-4 max-h-[75vh]">
        <div className="grid grid-cols-2 gap-10">
          <MyCombobox />
          <ReactSelect />
        </div>
      </section>
    </main>
  );
}
