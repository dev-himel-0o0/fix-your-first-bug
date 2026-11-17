import { cn } from "@/lib/cn";

type NumberGridProps = {
  numbers: number[];
  isMatch: (value: number) => boolean;
  matchLabel: string;
  noMatchLabel: string;
};

export function NumberGrid({
  numbers,
  isMatch,
  matchLabel,
  noMatchLabel,
}: NumberGridProps) {
  return (
    <div className="flex flex-wrap gap-2" data-testid="number-grid">
      {numbers.map((number) => {
        const matches = isMatch(number);

        return (
          <div
            key={number}
            title={matches ? matchLabel : noMatchLabel}
            data-testid="number-cell"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl text-sm font-medium ring-1 transition-colors sm:h-12 sm:w-12",
              matches
                ? "bg-slate-900 text-white shadow-sm ring-slate-900"
                : "bg-white text-slate-400 ring-slate-200",
            )}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}
