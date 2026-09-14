import TrackPage from "../components/TrackPage";
import { tracks } from "../data/album";

const track = tracks.find((t) => t.id === "daylight");

export default function Daylight() {
  return <TrackPage track={track} />;
}
