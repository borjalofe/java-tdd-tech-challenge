export type ExerciseType = "exercise" | "reading" | "link";

export type Exercise = {
  id: string;
  title: string;
  type: ExerciseType;
  url?: string;
};

export type Day = {
  id: string;
  title: string;
  exercises: Exercise[];
};
