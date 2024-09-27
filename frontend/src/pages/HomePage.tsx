
export default function HomePage() {
    return (
        <div>
            <div className={"total-income"}>
                <p className={"p-text"}> Einnahmen Gesamt: </p>
                <p className={"p-value"}> + 3.456 €</p>
            </div>
            <div className={"total-output"}>
                <p className={"p-text"}> Ausgaben Gesamt: </p>
                <p className={"p-value"}> - 2.456 €</p>

            </div>
            <div className={"total-summary"}>
                <p className={"p-text"}> Aktueller Zwischenstand: </p>
                <p className={"p-value"}> + 1.000 €</p>
            </div>
        </div>
    );
}
