import type { Day } from "@/types/challenge";

export const navigationData: Day[] = [
  {
    id: "session-1",
    title: "Session 1 (~1h)",
    exercises: [
      { id: "exercise-00", title: "0 · Read & scope the brief", type: "reading" },
      { id: "exercise-01", title: "1 · Create GearKind", type: "exercise" },
    ],
  },
  {
    id: "session-2",
    title: "Session 2 (~1h)",
    exercises: [
      { id: "exercise-02", title: "2 · List GearKinds", type: "exercise" },
      { id: "exercise-03", title: "3 · Update GearKind", type: "exercise" },
    ],
  },
  {
    id: "session-3",
    title: "Session 3 (~1h)",
    exercises: [
      { id: "exercise-04", title: "4 · Delete GearKind (FK guard)", type: "exercise" },
    ],
  },
  {
    id: "session-4",
    title: "Session 4 (~1h)",
    exercises: [
      { id: "exercise-05", title: "5 · Create Brand", type: "exercise" },
      { id: "exercise-06", title: "6 · List Brands (paged)", type: "exercise" },
    ],
  },
  {
    id: "session-5",
    title: "Session 5 (~1h)",
    exercises: [
      { id: "exercise-07", title: "7 · Update Brand", type: "exercise" },
      { id: "exercise-08", title: "8 · Delete Brand (FK guard)", type: "exercise" },
    ],
  },
  {
    id: "session-6",
    title: "Session 6 (~1h)",
    exercises: [
      { id: "exercise-09", title: "9 · Create Kit", type: "exercise" },
      { id: "exercise-10", title: "10 · List Kits", type: "exercise" },
    ],
  },
  {
    id: "session-7",
    title: "Session 7 (~1h)",
    exercises: [
      { id: "exercise-11", title: "11 · Filter Kits by title", type: "exercise" },
      { id: "exercise-12", title: "12 · Filter Kits by GearKind", type: "exercise" },
    ],
  },
  {
    id: "session-8",
    title: "Session 8 (~1h)",
    exercises: [
      { id: "exercise-13", title: "13 · Update Kit", type: "exercise" },
      { id: "exercise-14", title: "14 · Kit no-delete policy", type: "exercise" },
    ],
  },
  {
    id: "session-9",
    title: "Session 9 (~1h)",
    exercises: [
      { id: "exercise-15", title: "15 · Create Borrower", type: "exercise" },
      { id: "exercise-16", title: "16 · List Borrowers (admin)", type: "exercise" },
    ],
  },
  {
    id: "session-10",
    title: "Session 10 (~1h)",
    exercises: [
      { id: "exercise-17", title: "17 · Update Borrower", type: "exercise" },
      { id: "exercise-18", title: "18 · Delete Borrower (guard)", type: "exercise" },
    ],
  },
  {
    id: "session-11",
    title: "Session 11 (~1h)",
    exercises: [
      { id: "exercise-19", title: "19 · Unique borrower names", type: "exercise" },
    ],
  },
  {
    id: "session-12",
    title: "Session 12 (~1h)",
    exercises: [
      { id: "exercise-20", title: "20 · Checkout end >= start", type: "exercise" },
    ],
  },
  {
    id: "session-13",
    title: "Session 13 (~1h)",
    exercises: [
      { id: "exercise-21", title: "21 · Max 14 days", type: "exercise" },
    ],
  },
  {
    id: "session-14",
    title: "Session 14 (~1h)",
    exercises: [
      { id: "exercise-22", title: "22 · Kit overlap rule", type: "exercise" },
    ],
  },
  {
    id: "session-15",
    title: "Session 15 (~1h)",
    exercises: [
      { id: "exercise-23", title: "23 · Borrower max 2 kits", type: "exercise" },
    ],
  },
  {
    id: "session-16",
    title: "Session 16 (~1h)",
    exercises: [
      { id: "exercise-24", title: "24 · Parse ≠ apply", type: "exercise" },
      { id: "exercise-25", title: "25 · Extract pure domain", type: "exercise" },
    ],
  },
  {
    id: "session-17",
    title: "Session 17 (~1h)",
    exercises: [
      { id: "exercise-26", title: "26 · Inventory vs Checkout", type: "exercise" },
      { id: "exercise-27", title: "27 · Result failures", type: "exercise" },
    ],
  },
  {
    id: "session-18",
    title: "Session 18 (~1h)",
    exercises: [
      { id: "exercise-28", title: "28 · List checkouts display", type: "exercise" },
    ],
  },
  {
    id: "session-19",
    title: "Session 19 (~1h)",
    exercises: [
      { id: "exercise-29", title: "29 · Filter checkouts by kit", type: "exercise" },
      { id: "exercise-30", title: "30 · Filter by borrower", type: "exercise" },
      { id: "exercise-31", title: "31 · Filter by date", type: "exercise" },
    ],
  },
  {
    id: "session-20",
    title: "Session 20 (~1h)",
    exercises: [
      { id: "exercise-32", title: "32 · Paginate checkouts", type: "exercise" },
      { id: "exercise-33", title: "33 · Day view", type: "exercise" },
    ],
  },
  {
    id: "session-21",
    title: "Session 21 (~1h)",
    exercises: [
      { id: "exercise-34", title: "34 · REST linkable resources", type: "exercise" },
      { id: "exercise-35", title: "35 · REST profile + create checkout", type: "exercise" },
    ],
  },
  {
    id: "session-22",
    title: "Session 22 (~1h)",
    exercises: [
      { id: "exercise-36", title: "36 · Domain trade-offs", type: "exercise" },
    ],
  },
  {
    id: "session-23",
    title: "Session 23 (~1h)",
    exercises: [
      { id: "exercise-37", title: "37 · Surefire vs Failsafe", type: "exercise" },
    ],
  },
  {
    id: "session-24",
    title: "Session 24 (~1h)",
    exercises: [
      { id: "exercise-38", title: "38 · Profiles + evidence", type: "exercise" },
    ],
  },
  {
    id: "session-25",
    title: "Session 25 (~1h)",
    exercises: [
      { id: "exercise-39", title: "39 · CI jobs per suite", type: "exercise" },
    ],
  },
  {
    id: "session-26",
    title: "Session 26 (~1h)",
    exercises: [
      { id: "exercise-40", title: "40 · Unit tests", type: "exercise" },
    ],
  },
  {
    id: "session-27",
    title: "Session 27 (~1h)",
    exercises: [
      { id: "exercise-41", title: "41 · Integration + JPA", type: "exercise" },
    ],
  },
  {
    id: "session-28",
    title: "Session 28 (~1h)",
    exercises: [
      { id: "exercise-42", title: "42 · Functional tests", type: "exercise" },
    ],
  },
  {
    id: "session-29",
    title: "Session 29 (~1h)",
    exercises: [
      { id: "exercise-43", title: "43 · E2E tests", type: "exercise" },
    ],
  },
  {
    id: "session-30",
    title: "Session 30 (~1h)",
    exercises: [
      { id: "exercise-44", title: "44 · SAST", type: "exercise" },
    ],
  },
  {
    id: "session-31",
    title: "Session 31 (~1h)",
    exercises: [
      { id: "exercise-45", title: "45 · DAST", type: "exercise" },
    ],
  },
  {
    id: "session-32",
    title: "Session 32 (~1h)",
    exercises: [
      { id: "exercise-46", title: "46 · a11y fixes", type: "exercise" },
    ],
  },
  {
    id: "session-33",
    title: "Session 33 (~1h)",
    exercises: [
      { id: "exercise-47", title: "47 · Threat modeling", type: "exercise" },
    ],
  },
  {
    id: "session-34",
    title: "Session 34 (~1h)",
    exercises: [
      { id: "exercise-48", title: "48 · OWASP mapping", type: "exercise" },
    ],
  },
  {
    id: "session-35",
    title: "Session 35 (~1h)",
    exercises: [
      { id: "exercise-49", title: "49 · Authn JWT", type: "exercise" },
    ],
  },
  {
    id: "session-36",
    title: "Session 36 (~1h)",
    exercises: [
      { id: "exercise-50", title: "50 · JWT → Spring Session", type: "exercise" },
    ],
  },
  {
    id: "session-37",
    title: "Session 37 (~1h)",
    exercises: [
      { id: "exercise-51", title: "51 · Authorization", type: "exercise" },
    ],
  },
  {
    id: "session-38",
    title: "Session 38 (~1h)",
    exercises: [
      { id: "exercise-52", title: "52 · Need-to-know DTOs", type: "exercise" },
    ],
  },
  {
    id: "session-39",
    title: "Session 39 (~1h)",
    exercises: [
      { id: "exercise-53", title: "53 · Secrets", type: "exercise" },
    ],
  },
  {
    id: "session-40",
    title: "Session 40 (~1h)",
    exercises: [
      { id: "exercise-54", title: "54 · Session hijacking", type: "exercise" },
    ],
  },
  {
    id: "session-41",
    title: "Session 41 (~1h)",
    exercises: [
      { id: "exercise-55", title: "55 · Reject mass assignment", type: "exercise" },
    ],
  },
  {
    id: "session-42",
    title: "Session 42 (~1h)",
    exercises: [
      { id: "exercise-56", title: "56 · Least-privilege responses", type: "exercise" },
    ],
  },
  {
    id: "session-43",
    title: "Session 43 (~1h)",
    exercises: [
      { id: "exercise-57", title: "57 · Spring HATEOAS", type: "exercise" },
    ],
  },
  {
    id: "session-44",
    title: "Session 44 (~1h)",
    exercises: [
      { id: "exercise-58", title: "58 · Affordances", type: "exercise" },
    ],
  },
  {
    id: "session-45",
    title: "Session 45 (~1h)",
    exercises: [
      { id: "exercise-59", title: "59 · Siren", type: "exercise" },
    ],
  },
];
