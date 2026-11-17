import type { Metadata } from "next";
import { BugExercisePage } from "@/components/BugExercisePage";
import { primeNumber } from "@/lib/bugs/numberTheory/primeNumbers";

export const metadata: Metadata = {
  title: "Prime Numbers",
  description:
    "Fix the prime number helper so that only actual prime numbers are highlighted.",
};

const numbers = Array.from({ length: 101 }, (_, index) => index);

export default function PrimeNumbersPage() {
  return (
    <BugExercisePage
      title="Prime Numbers"
      description="Prime numbers should be highlighted. Some values are slipping through — find the edge case."
      filePath="src/lib/bugs/numberTheory/primeNumbers.ts"
      numbers={numbers}
      isMatch={primeNumber}
      matchLabel="Prime number"
      noMatchLabel="Not a prime number"
    />
  );
}
