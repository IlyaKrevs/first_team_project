import React from 'react';
import styles from './personPage.module.css';
import PersonHeader from "../../components/PersonHeader/PersonHeader"
import Filmography from '../../components/Filmography/Filmography';
import Back from '../../components/UI/Back/Back';

const PersonPage = () => {

    const movieExample = {
        id: 1,
        name: "Аватар",
        enName: "Avatar",
        rating: 8.0,
        general: true,
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        enProfession: "en en en en"
    }
    return (
        <section className={styles.personPage}>
            <div className='container'>
                <div className={styles.back}>
                    <Back>Назад</Back>
                </div>
                <div className={styles.container}>
                    <PersonHeader
                        name="Джейми Фокс"
                        avatar="https://thumbs.dfs.ivi.ru/storage38/contents/8/e/24e1139aa5f577b53513c3baaebecd.jpg/120x144/?q=85"
                        enName="Имя (EN)"
                    />
                    <div className={styles.filmography}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                Полная фильмография
                                <span className={styles.fullFilm}>1 фильм</span>
                            </div>

                        </div>
                        <div className={styles.filmographyList}>
                            <div className={styles.filmographyContent}>

                                <Filmography
                                    key="1"
                                    movie={movieExample}
                                />
                                <Filmography
                                    key="1"
                                    movie={movieExample}
                                />
                                <Filmography
                                    key="1"
                                    movie={movieExample}
                                />
                                <Filmography
                                    key="1"
                                    movie={movieExample}
                                />
                                <Filmography
                                    key="1"
                                    movie={movieExample}
                                />

                                <button
                                    className={styles.btn}
                                >
                                    Еще 1 фильм
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonPage;