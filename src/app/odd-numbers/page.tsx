import type { Metadata } from "next";
import { BugExercisePage } from "@/components/BugExercisePage";
import { oddNumber } from "@/lib/bugs/numberTheory/oddNumbers";

export const metadata: Metadata = {
  title: "Odd Numbers",
  description:
    "Fix the odd number helper so that every odd number is highlighted.",
};

const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

export default function OddNumbersPage() {
  return (
    <BugExercisePage
      title="Odd Numbers"
      description="Every odd number should be highlighted. Compare the page with the expected result, then fix the helper."
      filePath="src/lib/bugs/numberTheory/oddNumbers.ts"
      numbers={numbers}
      isMatch={oddNumber}
      matchLabel="Odd number"
      noMatchLabel="Not an odd number"
    />
  );
}
