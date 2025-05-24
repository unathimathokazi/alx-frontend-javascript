// Define MajorCredits and MinorCredits using branding
interface MajorCredits {
  credits: number;
  readonly __brand: "major";
}

interface MinorCredits {
  credits: number;
  readonly __brand: "minor";
}

// sumMajorCredits adds two MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "major",
  };
}

// sumMinorCredits adds two MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "minor",
  };
}
