import Image from "next/image";
import styles from "../styles/PizzaCard.module.css"


const HeatIcon = () => {
    return (
        <div className={styles.pizza_heat_icon}>
            <Image src='/pepper.png' alt='pepper' width={24} height={24} />
        </div>
    )
}

export const HeatLevel = (props: any) => {
    const peppers = (level: number) => {
        const count = (level > 5) ? 5 : level;
        const pepperArr = new Array(count);

        return pepperArr;
    }
    return (
        <>{
            Array.from(peppers(props.level), (el: any, index: number) => <HeatIcon key={index} />)
        }
        </>
    )
}
