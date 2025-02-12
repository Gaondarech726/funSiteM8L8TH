import styled from "styled-components";
import { TourMap } from "../pages/feauters/Map";

export const P = styled.p`
  color: white;
  padding-bottom: 50px;
`;

export const H1 = styled.h1`
  color: white;
  padding-bottom: 50px;
`;

export const H2 = styled.h2`
  padding-bottom: 20px;
  color: white;
`;

export const Ul = styled.ul`
  color: white;
  padding-bottom: 50px;
`;

export const Li = styled.li`
  padding-bottom: 25px;
  color: white;

  list-style: none;
`;

export const Strong = styled.strong`
  color: white;
`;

const Home = () => {
  return (
    <main>
      <H1>Привіт! Ласкаво просимо на сторінку, присвячену гурту M8L8TH!</H1>

      <P>
        M8L8TH – російсько-український гурт, що виконує музику в жанрах NSBM,
        RAC, блек-метал та паган-метал.
        <br />
        Гурт був заснований у 2003 році в Твері, Росія, Олексієм Льовкіним.
        <br />
        Назва гурту, за словами засновника, розшифровується як "Молот Гітлера",
        де цифра 8 замінює літеру "О".
        <br />
        M8L8TH торкається тем націонал-соціалізму, націоналізму, язичництва,
        війни та скандинавської міфології.
      </P>

      <H2>Олексій Льовкін:</H2>
      <P>
        фронтмен, вокаліст та засновник M8L8TH. Народився 6 жовтня 1984 року в
        Твері.овкін є ключовою фігурою в історії гурту, його ідеологічним
        натхненником та автором текстів. У 2015 році він переїхав до України, де
        продовжив музичну діяльність з оновленим складом. Відомо, що Льовкін
        брав участь у бойових діях на сході України в складі Російського
        добровольчого корпусу. Він також відомий як лідер руху WotanJugend. У
        2023 році брав участь у боях в Бєлгородській області.
      </P>

      <H2>Музика:</H2>
      <Ul>
        <Li>
          <Strong>Nekrokrator (2023):</Strong> Повноформатний альбом з містичною
          історією про подорож полелого воїна до Вальгалли. Пісні альбому, такі
          як "Меча Осколки", "Асов Рок", "Моим Богам" та інші, передають
          атмосферу темряви, таємничості та могутності.
        </Li>
        <Li>
          <Strong>AzovStahl (2022):</Strong> Україномовний кавер на пісню "Шторм
          над Азовом", присвячений подвигу бійців полку "Азов".
        </Li>
        <Li>
          <Strong>By the White Wolf's Hammer (2021):</Strong> Сингл, що
          продовжує традиції паган-металу.
        </Li>
        <Li>
          <Strong>Scent of Blood/Rehearsal (2003):</Strong> Перший демо-запис
          гурту.
        </Li>
        <Li>
          <Strong>Чорним крилом (2004):</Strong> Дебютний альбом, на створення
          якого вплинули Burzum, Темнозорь та BlazeBirth.
        </Li>
        <Li>
          <Strong>Штурм (2006):</Strong> Концертний альбом.
        </Li>
        <Li>
          <Strong>Непохитна Віра (2008):</Strong>
        </Li>
        <Li>
          <Strong>Сага про Чорний марш (2013):</Strong>
        </Li>
        <Li>
          <Strong>Шторм над Азовом (2016):</Strong> Сингл.
        </Li>
        <Li>
          <Strong>L.A.H. (Luciferian Aesthetics of Herrschaft) (2017):</Strong>{" "}
          Сингл.
        </Li>
        <Li>
          <Strong>Удар милосердя / Coup de grâce (2018):</Strong> Міні-альбом,
          спільна робота з лідером французького гурту Peste Noire.
        </Li>
        <Li>
          <Strong>Reconquista (2018):</Strong> Повноформатний альбом.
        </Li>
        <Li>
          <Strong>Дід-Дуб-Сноп (2021):</Strong> Кавер на Темнозорь.
        </Li>
      </Ul>

      <H2>Склад гурту:</H2>
      <P>
        Інформація про поточний склад гурту обмежена. Відомо, що після переїзду
        до України Льовкін зібрав новий склад.
      </P>

      <TourMap></TourMap>
    </main>
  );
};
export default Home;
