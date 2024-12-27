import classes from './Avatar.module.css';

export function Avatar({ name }: { name: string }) {
    const imageSrc = `https://cataas.com/cat?${name}`;

    return (
        <div className={classes.container}>
            <img alt="Cat" src={imageSrc} className={classes.image} />
            <div className={classes.caption}>{name}</div>
        </div>
    );
}
