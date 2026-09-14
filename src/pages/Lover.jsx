import TrackPage from "../components/TrackPage";
import { tracks } from "../data/album";

const track = tracks.find((t) => t.id === "lover");

export default function Lover() {
  return <TrackPage track={track} />;
}
