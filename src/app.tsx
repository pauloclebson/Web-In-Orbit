import { Plus } from "lucide-react";

import logo from "./assets/logo-in-orbi.svg";
import letsStart from "./assets/lets-start-illustration.svg";
import { Button } from "./components/ui/button";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo" />
      <img src={letsStart} alt="logo 2" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <Button>
        <Plus className="size-4" />
        Cadastrar meta
      </Button>
    </div>
  );
}
