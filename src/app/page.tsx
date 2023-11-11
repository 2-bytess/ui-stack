import Card from "@/components/Card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen space-y-5 w-full">
      <div className="flex justify-center items-center flex-wrap">
        <Card projects={projects} />
      </div>
    </main>
  );
}
