import type React from "react";
import "./Section.css";
import Container from "@layout/Container/Container";

type SectionProps = {
    children: React.ReactNode;
}
const Section = ({ children }: SectionProps) => {

    return (
        <section>
            <Container>
                {children}
            </Container>
        </section>
    );
};

export default Section;