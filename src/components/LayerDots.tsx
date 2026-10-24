import { LAYERS, type Layer } from "../data";

const ORDER: Layer[] = ["ui", "api", "data"];

const COLOR: Record<Layer, string> = {
  ui: "bg-ui",
  api: "bg-api",
  data: "bg-data",
};

// A small three-segment strip showing which layers of the stack a project covers.
export default function LayerDots({ layers }: { layers: Layer[] }) {
  const label = ORDER.filter((l) => layers.includes(l))
    .map((l) => LAYERS[l].name)
    .join(", ");
  return (
    <div className="flex items-center gap-2" aria-label={`Covers: ${label}`}>
      <div className="flex gap-0.5" aria-hidden="true">
        {ORDER.map((l) => (
          <span
            key={l}
            className={`h-2 w-6 rounded-sm ${
              layers.includes(l) ? COLOR[l] : "bg-line"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-muted">{label}</span>
    </div>
  );
}

export { COLOR as LAYER_BG };
