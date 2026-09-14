import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { albumMeta } from "../data/album";

export default function Cover() {
  return (
    <PageTransition className="min-h-screen bg-ivory text-ink flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-serif text-5xl sm:text-6xl">{albumMeta.title}</h1>
      <p className="mt-5 font-sans text-sm max-w-xs opacity-60 leading-relaxed">
        {albumMeta.subtitle}
      </p>
      <Link
        to="/lover"
        className="mt-14 font-sans text-xs tracking-widest2 uppercase border-b border-ink/30 pb-1 hover:border-ink/70 focus-visible:border-ink/70 transition-colors"
      >
        press play.
      </Link>
    </PageTransition>
  );
}
