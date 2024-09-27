import {Category} from "../types/Category.ts";

type IncomeCardProps = {
    category: Category;
}
export default function IncomeCard(props: IncomeCardProps) {
    return (
        <div className={"income-card"}>
            <div>
                <p>Datum: 31.08.2024</p>
                <p>Kategorie: Gehalt</p>
                <p>Wert:  3.456 €</p>
            </div>
            <button>Edit</button>
            <button> Safe</button>
        </div>
    );
}
