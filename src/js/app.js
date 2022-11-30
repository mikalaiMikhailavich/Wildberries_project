import { header } from "./components/header/header";
import { shopping } from "./components/shopping/shopping";

export function createAppComponent() {
  root.append(header, shopping);
}
