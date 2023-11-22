import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    return redirect("/notes");
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Quill logo" width={120} height={120} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Quill
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent note-taking app with AI integration, built with OpenAI,
        PineCone, Next.js, Shadcn UI, Clerk, and more.
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
