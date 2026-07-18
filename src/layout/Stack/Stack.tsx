import type React from "react";

type StackProps = {
    children: React.ReactNode;
    direction?: "row" | "column";
    gap?: "sm" | "md" | "lg";
    wrap?: boolean;
    align?: React.CSSProperties["alignItems"];
    justify?: React.CSSProperties["justifyContent"];
}

const Stack = ({ 
    children,
    direction = "row",
    gap = "md",
    wrap = false,
    align = "stretch",
    justify = "flex-start"
    }: StackProps) => {

    return (

        <div
            className={`stack-${direction} gap-${gap}`}
            style={{
                flexWrap: wrap ? "wrap" : "nowrap",
                alignItems: align,
                justifyContent: justify,
            }}
        >
            {children}
        </div>
    );
};

export default Stack;