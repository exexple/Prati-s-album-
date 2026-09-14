import PageHeader from "../components/PageHeader";
import PhotoFrame from "../components/PhotoFrame";
import PageTransition from "../components/PageTransition";
import { sideB } from "../data/album";
import { themes } from "../data/themes";

const theme = themes.sideB;

export default function SideB() {
  return (
    <PageTransition
      className={`min-h-screen ${theme.bg} ${theme.text} px-5 pt-32 pb-32 flex flex-col items-center text-center`}
    >
      <PageHeader heading={sideB.heading} />

      <div className="mt-10">
        <PhotoFrame image={sideB.image} />
      </div>

      <div className="mt-10 space-y-3 font-serif text-xl sm:text-2xl leading-relaxed max-w-sm">
        {sideB.copy.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <p className="mt-8 font-serif italic text-lg opacity-70">{sideB.dedication}</p>

      <div className="mt-16 space-y-1 font-sans text-xs tracking-widest2 uppercase opacity-40">
        {sideB.closing.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </PageTransition>
  );
}
