type OutputCardProps = {}

export default function OutputCard(props:OutputCardProps) {
    return (
        <div className={"output-card"}>
            <div>
                <p>Datum: 25.09.2024</p>
                <p>Kategorie: Sonstiges</p>
                <p>Wert:2.456 €</p>
            </div>
            <button>Edit</button>
            <button> Safe</button>
        </div>
    );
}
;