import type { Metadata } from "next";
import { BugExercisePage } from "@/components/BugExercisePage";
import { evenNumber } from "@/lib/bugs/numberTheory/evenNumbers";

export const metadata: Metadata = {
  title: "Even Numbers",
  description:
    "Fix the even number helper so that every even number is highlighted.",
};

const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

export default function EvenNumbersPage() {
  return (
    <BugExercisePage
      title="Even Numbers"
      description="Every even number should be highlighted. Compare the page with the expected result, then fix the helper."
      filePath="src/lib/bugs/numberTheory/evenNumbers.ts"
      numbers={numbers}
      isMatch={evenNumber}
      matchLabel="Even number"
      noMatchLabel="Not an even number"
    />
  );
}
