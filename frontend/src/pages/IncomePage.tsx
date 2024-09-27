import IncomeCard from "../cards/IncomeCard.tsx";

type IncomePageProps = {}

export default function IncomePage(props: IncomePageProps) {
    return (
        <div>
            <IncomeCard/>
            <IncomeCard/>
            <IncomeCard/>

        </div>
    );
}