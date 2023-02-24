import Image from "next/image";
import styles from "../styles/PizzaCard.module.css"


const HeatIcon = () => {
    return (
    <>
        <Image src='/img/pepper.png' alt='pepper' width={24} height={24} />
    </>
    )
}

export const HeatLevel = (props: any) => {
    const peppers = (level: number) => {
        const count = (level > 5) ? 5 : level;
        const pepperArr = new Array(count);

        return pepperArr;
    }
    return (
        <div className={styles.pizza_heat}>{
            Array.from(peppers(props.level), (el: any, index: number) => <HeatIcon key={index} />)
        }
        </div>
    )
}
