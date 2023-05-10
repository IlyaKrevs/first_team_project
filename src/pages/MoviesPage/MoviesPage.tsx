import { ButtonFilter, Filter, FilterDropdown, Wrapper } from 'components';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { useState } from 'react';

export const MoviesPage: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChangeFilter = (filter: number) => {
    setValue(filter);
  };

  const handleResetFilters = () => {
    setValue(0);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const expandedText = (
    <p>
      Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi – фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется как...
    </p>
  );

  return (
    <Wrapper>
      <div className={styles.descr}>
        <div className={styles.title}>Фильмы смотреть онлайн</div>
        <div className={styles.text}>
          {!isExpanded && expandedText}
          {isExpanded && (
            <><p>
              Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi – фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется как
              новыми фильмами, так и признанными шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных
              <Link to={ROUTE.BOEVIKI} className={styles.link}>
                боевиков
              </Link> или поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга, и вы будете пересматривать любимые фильмы онлайн снова и снова!
            </p><p>
                Выбор фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное, каким бы ни были его вкусы. Предпочитаете картины исключительно <Link to={ROUTE.FOREIGN} className={styles.link}>
                  зарубежного </Link> производства? У нас их предостаточно: это и золотая классика Голливуда, и душевные французские комедии, и темпераментные итальянские драмы, и шумные индийские музыкальные фильмы. А может, вы патриот и любите <Link to={ROUTE.RU} className={styles.link}>российские фильмы</Link>? Что ж, и таких фильмов у нас немало. Что вам больше по вкусу – добрая старая классика или <Link to={ROUTE.NEW} className={styles.link}>новинки кинопроката</Link>? Неважно, каким будет ваш ответ – у нас есть все, как картины эпохи зарождения кинематографа, так <Link to={ROUTE.YEAR2016} className={styles.link}>2016 года</Link> и <Link to={ROUTE.YEAR2015} className={styles.link}>фильмы 2015</Link>.
              </p><p>
                В нашем каталоге вы найдете любые жанры. Это и <Link to={ROUTE.LOVE} className={styles.link}>фильмы про любовь</Link>, и детективы, и боевики, и вестерны, и фантастика, и арт-хаус, и уморительные комедии, и <Link to={ROUTE.WAR} className={styles.link}>фильмы про войну</Link>, и ужасы, и триллеры, и документалистика... Кроме «полного метра» на сайте представлены также короткометражные фильмы, а также иностранные и <Link to={ROUTE.RU} className={styles.link}>русские сериалы</Link>.

                Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре, система рубрикации поможет вам без труда сориентироваться и найти, например, лучшие драмы или лучший анимационный фильм онлайн.

                Не упустите замечательную возможность смотреть фильмы онлайн, выбирая только то, что вам действительно интересно, и тогда, когда вам это удобно. Ведь это так просто и приятно!
              </p><p>
                Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре, система рубрикации поможет вам без труда сориентироваться и найти, например, лучшие <Link to={ROUTE.WAR} className={styles.link}>драмы</Link> или лучший анимационный фильм онлайн.
              </p><p>
                Не упустите замечательную возможность смотреть фильмы онлайн, выбирая только то, что вам действительно интересно, и тогда, когда вам это удобно. Ведь это так просто и приятно!
              </p></>
          )}
          {isExpanded ? (

            <button className={styles.btn} onClick={toggleText}>
              Свернуть</button>
          ) : (
            <button className={styles.btn} onClick={toggleText}>
              Развернуть
            </button>
          )}
        </div>
      </div>
      <Filter />
      <ButtonFilter value={value} onChangeFilter={handleChangeFilter} onResetFilters={handleResetFilters} />
      <FilterDropdown />
    </Wrapper>
  )
}
