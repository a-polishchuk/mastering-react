import Particles from 'react-tsparticles';
import classes from './Background.module.css';

export function Background() {
    return (
        <div className={classes.container}>
            <Particles
                id="tsparticles"
                options={{
                    fullScreen: false,
                    background: {
                        color: {
                            value: 'transparent',
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#000000',
                        },
                        links: {
                            color: '#000000',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 0.5,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}
