export type ServiceKey = "-" | "moving" | "montage" | "airport";

export type Service = {
    key: ServiceKey;
    label: string;
};

export const SERVICES: Service[] = [
    { key: "-", label: "---" },
    { key: "moving", label: "Moving service" },
    { key: "montage", label: "Montage service" },
    { key: "airport", label: "Airport transfer" },
];