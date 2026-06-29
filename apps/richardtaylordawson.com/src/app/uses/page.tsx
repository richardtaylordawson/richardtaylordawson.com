import { permanentRedirect } from "next/navigation";

export default function UsesRedirectPage() {
  permanentRedirect("/tools");
}
