function App() {

    return (
        <>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Einnahmen</li>
                    <li>Ausgaben</li>

                </ul>
            </div>
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
        </>
    )
}

export default App
