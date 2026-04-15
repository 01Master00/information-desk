import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import RoomGroups from "./components/RoomGroups";
import Tooltip from "./components/Tooltip";

type HoverState = {
  visible: boolean;
  content: string;
  top: number;
  left: number;
};

function App() {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  const [hover, setHover] = useState<HoverState>({
    visible: false,
    content: "",
    top: 0,
    left: 0,
  });

  const showTooltip = (label: string, x: number, y: number) => {
    setHover({
      visible: true,
      content: label,
      top: y - 6,
      left: x,
    });
  };

  const moveTooltip = (x: number, y: number) => {
    setHover((prev) => ({
      ...prev,
      top: y - 6,
      left: x,
    }));
  };

  const hideTooltip = () => {
    setHover((prev) => ({ ...prev, visible: false }));
  };

  const getOpacity = (
    label: string,
    selfCategory: string,
    baseOpacity: number = 1,
  ) => {
    const normalizedFilter = filter.trim().toLowerCase();
    const matchesFilter =
      normalizedFilter.length === 0 ||
      label.toLowerCase().includes(normalizedFilter);
    const matchesCategory = !category || category === selfCategory;

    return matchesFilter && matchesCategory ? baseOpacity : 0.4;
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e293b_0%,_#0f172a_42%,_#020617_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(148,163,184,0.08)_0%,rgba(2,6,23,0)_55%,rgba(15,23,42,0.24)_100%)]" />
      <div className="relative flex h-full items-center justify-center p-4 md:p-6">
        <section className="relative h-[min(94vh,980px)] w-[min(96vw,1520px)] overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-950/80 shadow-[0_30px_120px_rgba(15,23,42,0.7)]">
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-slate-700/80 bg-slate-950/80 px-4 py-3 text-[11px] uppercase tracking-[0.35em] text-slate-300 md:px-6">
            <span>Petrik Lajos - információs pult</span>
            <span className="hidden text-sky-300 md:inline">
              3D szinttérkép
            </span>
          </div>

          <div className="flex h-full w-full">
            <Canvas
              className="h-full w-full"
              camera={{ position: [0, 0, 34], fov: 20, near: 0.1, far: 120 }}
            >
              <color attach="background" args={["#0f172a"]} />
              <fog attach="fog" args={["#0f172a", 30, 80]} />
              <ambientLight intensity={1.45} />
              <directionalLight position={[8, 12, 14]} intensity={1.25} />
              <directionalLight position={[-10, -4, 12]} intensity={0.5} />
              <pointLight
                position={[0, 0, 28]}
                intensity={1.8}
                color="#93c5fd"
              />

              <RoomGroups
                getOpacity={getOpacity}
                onHoverStart={showTooltip}
                onHoverMove={moveTooltip}
                onHoverEnd={hideTooltip}
              />
            </Canvas>
            <div className="flex flex-col h-full w-full max-w-96 text-white mt-20 p-5">
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/45 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    Keresés
                  </p>
                  <button
                    type="button"
                    onClick={() => setFilter("")}
                    disabled={!filter}
                    className="rounded-full border border-slate-500/70 px-3 py-1 text-xs text-slate-200 transition-all duration-200 hover:border-sky-400 hover:text-sky-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Törlés
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="peer h-10 w-full rounded border border-slate-500/70 bg-transparent pl-[25px] pr-3 transition-all duration-300 focus:outline-1 focus:outline-sky-400 focus:outline-offset-0"
                  />
                  <label
                    className={`absolute ${filter ? "top-[-12px] text-sky-300 text-sm" : "top-[7px]"} left-[10px] z-20 bg-[#0A1022] px-2.5 text-white transition-all duration-300 pointer-events-none peer-focus:-top-[12px] peer-focus:text-sm peer-focus:text-sky-300`}
                  >
                    Keress egy teremre
                  </label>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-700/70 bg-slate-900/45 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    Kategória
                  </p>
                  <button
                    type="button"
                    onClick={() => setCategory("")}
                    disabled={!category}
                    className="rounded-full border border-slate-500/70 px-3 py-1 text-xs text-slate-200 transition-all duration-200 hover:border-sky-400 hover:text-sky-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Törlés
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="Informatika"
                      checked={category === "Informatika"}
                      onChange={(e) => setCategory(e.target.value)}
                      className="peer sr-only"
                    />
                    <span className="inline-flex items-center rounded-full border border-slate-500/70 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-slate-300 peer-checked:border-sky-400 peer-checked:bg-sky-500/20 peer-checked:text-sky-100 peer-checked:shadow-[0_0_0_1px_rgba(56,189,248,0.35)]">
                      Informatika
                    </span>
                  </label>

                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="Biológia"
                      checked={category === "Biológia"}
                      onChange={(e) => setCategory(e.target.value)}
                      className="peer sr-only"
                    />
                    <span className="inline-flex items-center rounded-full border border-slate-500/70 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-slate-300 peer-checked:border-sky-400 peer-checked:bg-sky-500/20 peer-checked:text-sky-100 peer-checked:shadow-[0_0_0_1px_rgba(56,189,248,0.35)]">
                      Biológia
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-4 py-4 text-xs text-slate-300 md:px-6">
            <div className="rounded-full border border-slate-600/70 bg-slate-950/70 px-3 py-1.5 backdrop-blur-sm">
              Szűrők használatával jobban látható a terem amit keresel!
            </div>
            <div className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-sky-200 backdrop-blur-sm">
              Készítette: Kovács Zsombor
            </div>
          </div>
        </section>
      </div>
      <Tooltip
        visible={hover.visible}
        content={hover.content}
        top={hover.top}
        left={hover.left}
      />
    </main>
  );
}

export default App;
