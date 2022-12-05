import { header } from "./components/header/header";
import { shopping } from "./components/shopping/shopping";
import { slider } from "./components/slider/slider";

export function createAppComponent() {
  root.append(header, slider, shopping);
}
