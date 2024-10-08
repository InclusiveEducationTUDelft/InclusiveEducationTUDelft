import styles from "./InclusiveButton.module.css";

interface InclusiveButtonProps {
    alignSelf?: string;
    href?: string;
}

function InclusiveButton(props: InclusiveButtonProps) {
    return <>
        <button className={styles.inclusiveButton} style={{
            alignSelf: !props.alignSelf ? "flexEnd" : props.alignSelf,
        }}><a
            className={styles.inclusiveTag}
            href={!props.href ? "" : props.href}
        >Read More
            </a>
        </button >
    </>
}

export default InclusiveButton;