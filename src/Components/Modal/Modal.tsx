import { Link, generatePath } from 'react-router-dom';
import { Portal, TabsModal } from '..';
import { Wrapper } from '../Wrapper/Wrapper';
import { ROUTE } from '../../router';
import styles from './styles.module.css';
import { TargetPortal } from '../../config';
import { getMovie, useAppSelector } from '../../store';

interface ModalProps {
    closeModal: () => void;
}

export const Modal = ({ closeModal }: ModalProps) => {
    const movie = useAppSelector(getMovie);
    const handleGoBack = () => {
        closeModal(); 
    }

    const handleWatchClick = () => {
        closeModal(); 
    }

    return (
        <Portal target={TargetPortal.MODAL}>
            <div className={styles.modal}>
                <Link key={movie?.id} className={styles.close} onClick={handleGoBack} to={''}>
                    <div className={styles.back}>
                        &#8249; К фильму
                    </div>
                </Link>
                <Wrapper>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <h1 className={styles.title}>
                                {movie?.nameRU}
                            </h1>
                            <TabsModal />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.movie}>
                                <Link to={generatePath(`${ROUTE.HOME + ROUTE.WATCH}`, { id: movie?.id })}>
                                    <img className={styles.photo} src={`http://localhost:12120/api/films/images/${movie?.imageName}`} />
                                    <div className={styles.name}>{movie?.nameRU}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </Portal>
    );
}