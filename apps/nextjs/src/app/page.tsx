import { Suspense } from "react";
import { cookies } from "next/headers";
import Link from "next/link";
// import { auth } from "@askthem/auth";
import type { Session } from "@supabase/auth-helpers-nextjs";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";

// replace w from STripe example
// import { SignIn, SignOut } from "~/components/auth";
import * as posts from "./posts";

export default async function HomePage() {
  const supabase = createServerComponentClient({ cookies });
  // const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 px-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-pink-400">T3</span> Turbo
        </h1>
        <AuthShowcase session={session} />

        <posts.CreatePostForm />
        <Suspense fallback={<span>Loading...</span>}>
          <posts.PostList />
        </Suspense>
      </div>
    </main>
  );
}

function AuthShowcase({ session }: { session: Session | null }) {
  // const supabase = useSupabaseClient();
  // const user = useUser();
  // const { data: secretMessage } = api.auth.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: !!user },
  // );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {!session && (
        <Link
          className="flex items-center gap-1 rounded-lg bg-white/10 px-10 py-3 font-semibold text-zinc-200 no-underline transition hover:bg-white/20"
          href="/signin"
        >
          Sign In
        </Link>
      )}
      {session && (
        <>
          <p className="text-center text-2xl text-zinc-200">
            {session && <span>Logged in as {session?.user.email}</span>}
            {/* {secretMessage && <span> - {secretMessage}</span>} */}
          </p>
          <button
            className="rounded-lg bg-white/10 px-10 py-3 font-semibold text-zinc-200 no-underline transition hover:bg-white/20"
            onClick={() => void supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}

// from next-auth setup
// async function AuthShowcase() {
//   const session = await auth();

//   if (!session) {
//     return (
//       <SignIn
//         provider="discord"
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//       >
//         Sign in with Discord
//       </SignIn>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {session && <span>Logged in as {session.user.name}</span>}
//       </p>

//       <SignOut className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">
//         Sign out
//       </SignOut>
//     </div>
//   );
// }
