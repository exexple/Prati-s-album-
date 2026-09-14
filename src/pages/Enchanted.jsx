import TrackPage from "../components/TrackPage";
import { tracks } from "../data/album";

const track = tracks.find((t) => t.id === "enchanted");

export default function Enchanted() {
  return <TrackPage track={track} />;
}
