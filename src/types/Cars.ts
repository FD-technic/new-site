export type CarKey = "moving" | "montage" | "airport";

export type Car = {
    key: CarKey;
    label: string;
};

export const CARS: Car[] = [
    { key: "moving", label: "Moving service" },
    { key: "montage", label: "Montage service" },
    { key: "airport", label: "Airport transfer" },
];