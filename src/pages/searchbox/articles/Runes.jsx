import styled from "styled-components";
import { BackLink } from "./../../../components/BackLink";
export const P = styled.p`
  color: white;
`;

export const H1 = styled.h1`
  color: white;
  padding-bottom: 50px;
`;
export const H2 = styled.h2`
  color: white;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ImgRune = styled.img`
  padding-top: 50px;
`;
export const Fehu = styled.img`
  height: 240px;
  width: 300px;
  border-bottom: 5px solid #bd1e2c;
  margin-bottom: 50px;
`;

export const Ansyz = styled.img`
  height: 200px;
  width: 357px;
  border-bottom: 5px solid #bd1e2c;
  margin-bottom: 50px;
`;

const RunesImg = "../src/img/runes/Runes.jpg";
const FehuImg = "../src/img/runes/Fehu.jpg";
const AllImg = "../src/img/runes/Ansyz.jpeg";

const Runes = () => {
  const backLinkHref = location.state?.from ?? "/state";
  return (
    <main>
      <BackLink to={backLinkHref}>Повернутись назад</BackLink>

      <H1>Колін Клірі - Руни і сучасність</H1>
      <P>
        Перед вами переклад есе Коліна Клірі - правого північно-американського
        публіциста, володаря докторського ступеня, чия перша книжка «Взиваючи до
        богів» («Summoing the Gods») встигла не лише здобути схвалення Алена де
        Бенуа, Стефана Флаверса та інших помітних діячів неоязичницького руху, а
        й також стала причиною нападок активістів антифашистського руху на
        видавця цієї книжки. Колін Клірі (Collin Cleary) - загадковий теолог
        неоязичництва, своїм гранично ясним поданням матеріалу підштовхує читача
        до самостійних роздумів, не намагаючись приміряти личину абсолютного
        гуру. У матеріалі, що публікується, автор торкається теми рун, яку
        багаторазово обговорювали, проте з притаманною йому оригінальністю
        представляє їхню інтерпретацію в новому світлі. Він пропонує поглянути
        на стародавні символи нашої раси очима предків, використовуючи при цьому
        інструментарій класичної європейської філософії. Автор відтворює контури
        колишнього, що будь-якої миті можуть наповнитися енергією, яка пробуджує
      </P>
      <ImgRune src={RunesImg} alt="runes" />
      <H2>Вступ: руни та філософія</H2>

      <P>
        Кілька років тому я написав есе «Філософські нотатки про руни» (його
        включено до моєї книги «Взиваючи до богів»). Як випливає з назви, есе
        являє собою спробу дати філософську інтерпретацію кожної з рун. По суті,
        я взяв інтерпретації значення рун Едреда Торссона з книжок «Футарк» і
        «Рунелор» і додав до них свої коментарі, спираючись на європейську
        філософську традицію. Основним моїм джерелом була німецька філософія,
        розташував же я руни у квазі-гегельянській системі. У цій статті я
        збираюся розглянути зв'язок рун і філософських ідей на поглибленому або
        метарівні. Розглянуті мною відносини троїчні: міф, руни і філософія.
        Перед собою я ставлю мету прийти до більш адекватного розуміння суті
        рун. Почнемо з того, що зараховувати руни до сфери «філософії» буде
        надзвичайно помилково. Тут мене знову ж таки спрямовують ідеї Гегеля.
        Він об'єднував філософію з мистецтвом і релігією, вважаючи їх трьома
        вищими проявами того, що він називав людським Духом. Їх об'єднує те, що
        всі вони є різними підходами до розуміння природи буття і місця людини в
        ньому. Хоча в його очах філософія мала фундаментальні відмінності з
        двома іншими. Мистецтво, як і релігія, висловлюють істину за допомогою
        образів: міфів, оповідань, поезії, музики та різних візуальних образів.
        Філософія ж прагне до передачі істини в концептуальній формі. Вона
        уникає використання образів і символів. Якщо міркувати з точки зору
        Гегеля, руни не являють собою філософську систему. Але якщо це так, як
        же нам класифікувати їх? І чи піддаються вони класифікації взагалі?
        По-перше, руни можна розуміти винятково в германському (скандинавському)
        релігійному і філософському контексті. По-друге, вони походять від того,
        що називають міфопоетичним мисленням (надалі ми ще повернемося до
        цього). Тобто, вони змушують нас розмірковувати про світобудову і людину
        з погляду образів і символів, а не абстрактних концепцій. Вкрай
        заманливо виглядає можливість зарахувати руни до царства «міфу». Але це
        явно не так. Міфи - це історії. І існують історії (міфи) про руни, крім
        того, деякі руни пов'язані з фігурами або елементами германського міфу,
        самі ж руни міфами не є. Правду кажучи, руни не можна зарахувати ні до
        сфери філософії, ні до сфери міфу, однак, як я продемонструю пізніше,
        вони виявляють елементи обох. Простіше кажучи, руни дуже близькі до
        того, що у філософії називають «категоріальна онтологія»: артикуляція
        природи реальності за допомогою низки різноманітних фундаментальних
        ідей. Зрозуміло, питання тут викликає термін «ідеї», тому що має на
        увазі «концепції», адже руни - це не абстрактні концепції, а
        різноманітні образи і символи. Тут я маю на увазі назви рун (або те, що
        вони називають), а не їхній зовнішній вигляд. Давайте розглянемо деякі
        конкретні приклади.
      </P>
      <H2>Значення худоби</H2>
      <Fehu src={FehuImg} alt="Fehu" />
      <P>
        Феху, як ми знаємо, означає «худоба» або «рухоме майно», «добробут». Але
        руна не означає цього в прямому, буквальному сенсі. У «Рунелорі» Едред
        пише про Феху: «У космології це істинна зовнішня сила первинного
        космічного полум'я - експансивна сила, що протиставлена скороченню й
        затвердінню в льоду». Спираючись на це, у моєму есе «Філософські нотатки
        про руни» я призначив поняття (концепт) «Експансивної Сили» Феху. Але
        насправді Феху не рівнозначна поняттю Експансивної Сили. Феху - це
        худоба. Концептуальна інтерпретації руни і формул у вигляді
        «Експансивної сили» є інтерпретація значення Феху, тобто значення
        худоби. Але вони не є самою руною або її еквівалентом. Фраза, яку я
        щойно використав, «значення худоби», має дивний і навіть трохи комічний
        вигляд. Проте, це зачіпка, яка полегшить наше розуміння цієї руни. Якщо
        ми поглянемо на переклад назв рун, нас вразить той факт, що вони
        стосуються об'єктів або явищ повсякденного життя, «життєвого простору»,
        якщо хочете, стародавніх германських народів. Потрібно дивитися на
        переклади назв рун, а не на їхні оригінальні назви в давньонорвезькій,
        давньоанглійській, протогерманській чи якійсь іншій мові, що мають
        дивний, далекий від нашого світу і загадковий вигляд. Отже, погляньмо на
        ці дивні імена, що вони означали для наших предків: Худоба, Бик, Шип,
        Віз, Смолоскип, Дарунок, Радість, Привітання, Потреба, Лід, Урожай, Тис,
        Лось, Сонце, Береза, Кінь, День тощо. У кожному випадку якісь знайомі
        людині характеристики оточуючого її світу або життєвого досвіду були
        виділені і наділені значенням, що виходить за рамки очевидного. Краще
        навіть так: у кожному випадку було взято знайомий об'єкт як ключ,
        індикатор або символ чогось фундаментальнішого, якогось глобального
        принципу, феномена або сили. Інакше кажучи, у руні Феху наші пращури
        дійсно бачили «значення худоби». Худоба стала для них символом чогось
        більшого, ніж просто корови. Худоба тут не просто худоба, а символ
        Експансивної сили (використовуючи філософське формулювання). Проте, на
        ділі все ще складніше. Було б точніше сказати, що худобу обрано як
        зразок Експансивної Сили. Худоба не просто символізує її, як орел
        символізує Америку, худобу було обрано як щось, що просякнуте цією
        силою, і, таким чином, уособлює її. Інакше кажучи, один із проявів
        Експансивної Сили (худоба), береться для демонстрації всього феномена.
        Таким чином, руни є прикладами того, що італійський філософ Джамбаттіста
        Віко називав «образними універсаліями», які він протиставляв
        «інтелектуальним універсаліям». Прикладом образної універсалії буде
        вихваляння бардом відважного воїна. Бард скаже «Він подібний до
        Зігурда». У цьому випадку, одна людина, Зігурд, береться як уособлення
        відваги. З іншого боку, інтелектуальною універсалією буде «хоробрість»,
        абстрактне поняття відокремлене від особистостей сміливців. Замість «Він
        подібний до Зігурда» бард має сказати «Ця людина стала прикладом
        хоробрості». (Але тоді, зрозуміло, бард уже не буде бардом, він буде
        філософом). Цілком очевидно, що руни якраз і є системою цих образних
        універсалій, у якій певні об'єкти життя наших предків беруть як образи
        різних фундаментальних аспектів буття. Склад розуму, що мислить
        категоріями образних універсалій часто називають «міфопоетичним». Гадаю,
        досить очевидно, як образні універсалії формують основу для міфу і
        поезії. Міфопоетичний склад розуму чужий більшості з нас, адже ми звикли
        мати справу з гранично зрозумілими абстрактними універсаліями. Однак,
        для розуміння міфопоетичного мислення, не достатньо просто сказати, що
        це робота образних універсалій. Міфопоетичне мислення саме по собі
        можливе завдяки чомусь більш фундаментальному: радикально іншому
        світогляду. Це означає розглядати наш світ як набір символів. Іншими
        словами, міфопоетичний розум читає світ, подібно до того, як ми зазвичай
        читаємо оповідання або вірш, шукаючи символічні значення, зашифровані в
        ньому автором. Міфопоетичний розум наших предків дивився на світ як на
        текст, який потрібно інтерпретувати. Для нас буде неймовірно важко
        повернути той спосіб мислення. Ми мусимо зрозуміти, що наші пращури
        буквально бачили худобу, привітання та березу як щось більше, ніж
        худобу, привітання чи березу. Натомість бачили справжні, матеріальні
        нитки, що ведуть до космічних сил і метафізичних принципів, ключі до
        сенсу життя. Повернемося до питання про ставлення рун до філософії та
        міфу. Як уже говорилося раніше, руни мають властивості обох. Тепер
        постараємося висловити цю думку конкретніше. Руни функціонують дуже
        схоже на категоріальну онтологію, надаючи нам фундаментальні категорії,
        в рамках яких має розумітися реальність. Але на відміну від
        категоріальних онтологій філософії (як у Платона, Арістотеля, Канта,
        Гегеля і Гуссерля) руни не є гранично зрозумілими, абстрактними
        універсаліями, це образні універсалії породжені міфопоетичним розумом.
        До речі, те ж саме ми можемо бачити в категоріях індійської системи
        Санкх'я і кабалістичному сефіроті, які так само є міфопоетичними
        категоріальними онтологіями. Ми так само зустрічаємо це в «споконвічних
        смислах» ранньо-модернового німецького містика Якоба Беме, якого Гегель
        називав першим німецьким філософом. Таким чином, стає очевидно, що руни
        посідають, у якомусь сенсі, проміжне положення між філософією і міфом.
        Чи означає це, що філософія і поява інтелектуальних універсалій стали
        прогресом щодо рун? Я повернуся до цього питання після того, як ми
        розглянемо інші приклади.
      </P>
      <H2>Ансуз, Тейваз, Інгваз</H2>

      <Ansyz src={AllImg} alt="Ansyz, Teivaz, Ingvaz" />
      <P>
        Почнемо з однієї цікавої особливості рун: вони не є «закритою системою».
        Це наочно видно з того факту, що футарк змінюється з плином часу, він
        стискається і розширюється, якісь руни додають, якісь виключають. Я не
        прихильник точки зору, що в основі лежать лінгвістичні причини; я
        схиляюся до того, що вони ідеологічні або філософські. Молодший футарк,
        як нам відомо, складається з 16 рун, на 8 менше, ніж у старшому. Чи була
        система впорядкована таким чином заради зручності, чи це відображення
        метафізичних роздумів? У мене є причини схилятися до другого варіанту.
        Ідеалом як у міфопоетичному мисленні, так і у філософії (і в науці, якщо
        на те пішло) є пояснення навколишнього світу в якомога меншій кількості
        термінів або «універсалій», саме тому деякі елементи почали розглядатися
        як частини інших або ж просто зайві. Варто зазначити, що в старшому
        футарку є три руни, які не зовсім вписуються в наданий мною аналіз:
        Ансуз, Тейваз, Інгваз. (Усі вони є в англо-фрізському футорку, але в
        молодшому футарку Інгваз уже немає). Раніше я стверджував, що руни
        співвідносяться з проявами світу, що оточував наших предків,
        безпосередньо пережиті ними явища або спостережувані, як-от: різні
        тварини, дерева, природні феномени, людські емоції й бажання тощо. Але
        Ансуз, Інгваз і Тейваз знову ж таки не вписуються в цю картину. Ансуз
        символізує Одіна, Тейваз Тюра, а Інгваз бога Інгві (Фрейр). Поки що
        залишимо осторонь Ансуз і зосередимося на тому, що Тюр небесний бог, а
        Інгві - земний бог. Таким чином, імена богів відсилають нас до землі та
        неба. Чому ж ці предмети позначені іменами богів? Небо і земля посідали
        у світі наших предків особливе місце, інші ж явища, що стали пізніше
        рунами, відбувалися або на землі, або на небесах. Сонце і град,
        наприклад, з'являються на небі, тоді як худоба блукає землею, віз
        котиться по ній, а береза і тис на ній ростуть. Радість, подарунок,
        потреба, людські явища, тому так само пов'язані із землею. Таким чином,
        небо і земля є місцями на і в яких інші явища з'являються або
        функціонують. Небеса і земля не уявляються нам подібно до об'єктів у
        небі або на землі. У прямому сенсі, хоча небо і земля помітні, вони не є
        об'єктами, тому що ми ніколи не бачимо їхніх меж, з нашого погляду ми не
        в змозі побачити ні межу землі, ні межу неба. Усередині неба і землі
        існують різні об'єкти, але самі вони не є об'єктами всередині якоїсь
        більшої системи. Цей факт дає небу і землі особливий вид
        фундаментальності: вони є контекстом або горизонтами для всього іншого.
        Тому небо і земля наділялися нашими предками особливою нумінозною
        важливістю. Таким чином, Інгваз і Тейваз все-таки пов'язані зі світом
        наших предків, із небом і землею, але взятими в їхніх нумінозних або
        божественних аспектах. Ця нумінозність була очевидна, але не очам;
        відчувалася, але не руками; чулася, але не вухами. Це було (або є)
        реальним аспектом неба і землі, особливістю, що нині прихована від
        нашого сучасного світу. А що ж Ансуз? На думку Едреда, Ансуз
        символізував «верховне божество предків», що однозначно відсилає нас до
        Одіна. Отже, і ця руна має стосунок до навколишнього наших предків
        світу. Як згадувалося раніше, міфопоетичний розум читає природу немов
        книгу. Давайте зосередимося на підтексті цього висловлювання. Сприйняття
        світу як набір символів; відмова від поняття «випадковість» (саме цей
        умонастрій стоїть за прикметами і знаменнями); розгледіти в усьому
        свідомий намір. Якщо є книга, наповнена сенсом, значить, є й автор.
        Повинен бути Всеотець. Бачити Всеотця за лаштунками нашого світу, який
        впливає на перебіг подій і посилає нам знаки, - це не усвідомлений вибір
        або вигадка. Особисто я вважаю, що це фундаментальна особливість
        міфопоетичного розуму. Розум, що читає світ подібно до книжки, який
        заперечує випадковості, має бачити розумний задум у роботі світу; одне
        слідує за іншим. Таким чином, ми можемо сказати, що в деякому сенсі всі
        інші руни «мають на увазі» Ансуз. Для розуму, який сприймає світ
        символічно і осягає руни, присутність їхнього автора, Одіна, відчутна.
        Повторимо, нумізність неба і землі відчувалася, але не одним із п'яти
        почуттів. Так само і присутність Одіна, автора всього, відчувається так
        само гостро як видимі або чутні нами об'єкти. Але лише для тих, хто
        володів міфопоетичним мисленням. Інші ж можуть розуміти це в
        абстрактному сенсі. Я ще повернуся до цього твердження. Зрозуміло, той
        розумний задум, що бачать міфопоетичні уми, зовсім не тотожний тому, що
        бачили філософи епохи Просвітництва. Адже наші пращури не хотіли
        ігнорувати очевидне, щоб побачити Всесвіт як заводний механізм і
        найкращий зі світів. Вони були налаштовані на дивне, моторошне, абсурдне
        і жахливе буття. Так само і їхній Всеотець, автор природи, не був
        добродушним годинникарем, але грізним і непередбачуваним богом, богом
        дикого полювання, бойової несамовитості, призвідником війн, який знищує
        старе і вводить нове за допомогою боротьби.
      </P>
      <H2>Висновок: руни чи філософія</H2>
      <P>
        Тепер повернімося до питання, поставленого раніше: якщо руни займають
        проміжну позицію між міфом і філософією, чи є філософія якимось
        просуванням за межі рун? Гегель, найімовірніше, прийняв би позицію, що
        визначає філософію як прогрес відносно рун (мушу зауважити, насправді
        Гегель ніколи нічого не говорив про руни). Найімовірніше, він би сказав,
        що філософія стоїть на вищому рівні, ніж руни, тому що філософська думка
        (у широкому сенсі) необхідна для інтерпретації значення рун. Зрештою,
        руни не пояснюють собі самі. Нам доводиться давати їм філософську,
        концептуальну інтерпретацію (як це зробив Едред, коли пояснював
        езотеричне значення рун у «Рунелорі» та інших своїх роботах). Але Гегель
        би так само сказав: якщо філософська думка відкриває для нас значення
        рун, то чи не є вони філософією вищого порядку? Щоб узагальнити
        вищесказане, Гегель би міг стверджувати, що філософія стоїть на вищому
        рівні за міфопоетичне мислення, тому що вона необхідна для інтерпретації
        міфів, символів, образів, а також відкриває їхнє внутрішнє значення. Це
        дуже потужний аргумент, який не можна ігнорувати. Однак, існує очевидна
        відповідь на нього. Якщо філософія та інтелектуальні універсалії
        необхідні для інтерпретації продуктів міфопоетичного мислення, це не
        означає, що ми зробили крок уперед, це означає, що дана форма мислення
        була загублена для нас (і ця втрата зовсім не означає «прогрес», як я
        зараз продемонструю). Для володарів міфопоетичного мислення, значення
        символів і асоціацій розуміли без залучення філософського,
        концептуального мислення. Ми філософськи інтерпретуємо руни лише тому,
        що їхнє значення для нас більш не очевидне, як це було для наших
        предків. Дозвольте мені провести паралель. Уявіть, що я англійський
        професор. Я цитую строфу перед першокурсниками: «Зривайте троянди
        скоріше, /Підвладне все старінню, /Квіти, що нині всіх миліше, /Назавтра
        стануть тінню». Хтось відповість мені: «Я не зрозумів». Я ж призначу
        цьому студенту домашнє завдання: у понеділок пояснити сенс строфи. Після
        довгих роздумів, він прийде в понеділок і відповість: «Це означає, що
        потрібно жити сьогоднішнім днем, адже всі ми одного разу помремо». Я
        поставлю йому найвищий бал, але сумніваюся, що автор чотиривірша, Роберт
        Геррік, погодився б, що студент просунувся на наступний щабель
        розуміння. Геррік, безсумнівно, засмутився б, адже для розуміння
        знадобився аналіз, але ж більш сприйнятливі уми часів Герріка розуміли
        його нальоту, не витрачаючи на розуміння весь вечір, теоретизуючи і
        відвідуючи Вікіпедію. Так само і нашим предкам філософія б не допомогла
        поглибити своє розуміння навколишньої дійсності. Ні, вони чудово все
        розуміли і без філософії. Система рунічних знаків розкривала природу
        світу, роблячи застосування концептуальної інтерпретації цієї системи
        безглуздим. Ми повинні визнати той факт, що всі філософські
        інтерпретації лише навпомацки шукають вираження значення рун. Додам,
        образні універсалії стоять на вищому рівні, ніж інтелектуальні
        універсалії, адже вони містять у собі глибини, які не можуть бути
        вичерпані концептуальною інтерпретацією. Залишається незрозумілим одне:
        як ми позбулися міфопоетичного мислення? Як образні універсалії були
        заміщені інтелектуальними? Почнемо з того, що Гегель має рацію, вважаючи
        філософію абстрактною, бо вона прагне відокремлення від чуттєвого
        сприйняття. У русі до інтелектуальних універсалій, чуттєве відкидається.
        Чуттєвий зміст міфопоетичної думки бере свій початок у зануренні людини
        в певне середовище, у специфічному природному середовищі або екосистемі,
        а також у розвиненому людьми життєвому укладі. Розумно припустити, що
        зрушення від образних універсалій до інтелектуальних, від міфопоетичної
        до абстрактної думки, так чи інакше пов'язано з відривом народу від його
        середовища проживання. Це могло статися з багатьох причин. Наприклад,
        унаслідок міграції або через зростання кількості міст, у яких жителі
        відрізані від прямої конфронтації з природою, а також піддаються впливу
        іммігрантів із чужих культур, тобто космополітизму. Глобальні культурні
        зрушення так само можуть сприяти цьому процесу, наприклад, розвиток
        демократії в стародавніх Афінах і наступне за цим поступове розмиття
        Традиції через згубний вплив індивідуалізму, релятивізму і гедонізму.
        Усе це нагадує сьогоднішню ситуацію. Ми не володіємо міфопоетичним
        мисленням, а світ наших пращурів, з якого й виникли руни, нам не
        належить. Тому, хоч ми й можемо припустити, що філософська інтерпретація
        рун погана заміна мисленню наших пращурів, нам нічого більше не
        залишається. Ми більше не відчуваємо нумінозності землі й неба. Береза і
        тис для нас просто дерева. Це означає, що хоча ми і прагнемо відродити
        традиції наших предків, ми не здатні розуміти їх так, як розуміли вони,
        просто тому, що ми не живемо в тому ж світі. Ця прірва між нами і нашими
        предками, їхніми шляхами, болісна для нас, але поки що не ясно як її
        подолати. Для нас язичництво, у прямому сенсі, залишиться ідеєю, до якої
        ми прагнемо. (Хоча поспішу зауважити, що сьогодні називати себе
        язичником настільки ж виправдано, наскільки й християнином, адже вони
        теж прагнуть жити в тому світі, що був загублений). Зрештою, хто-небудь
        обов'язково додумається запропонувати винайти свій звід рун, прив'язаних
        до нашого світу. Однак, я не зможу прийняти його. Я не можу прийняти
        футарк із рунами «facebook», «omg», «amazon», «redbox», «kmart». І я
        впевнений, багато хто зі мною погодиться. Чому? Тому що всі ми
        переконані, що наше суспільство і наш спосіб життя убогий; що немає
        нічого природного і здорового в тому, що відбувається в нашому світі.
        Отже, наша єдина альтернатива це спроба реконструкції та відтворення
        традиції наших предків. Але єдиний шлях справді і в повному обсязі
        повернути її буде реставрація їхнього світу, повернення до природного
        середовища існування, в якому вони жили, і до їхнього способу життя.
        Навколо нас все ще вистачає диких місць, але буде недостатньо просто
        придбати шматок землі і заснувати німецьке поселення. Люди повинні
        залишатися в невіданні щодо сучасного світу, вони не повинні пам'ятати
        сучасних ідей, винаходів, поп-культури; вони не повинні пам'ятати навіть
        сучасної історії. Вони мають бачити світ навколо себе свіжим і
        незамутненим поглядом. Якщо подібні умови вдасться створити, я
        переконаний, що старий спосіб життя, сам собою відновиться серед наших
        людей, за допомогою їхньої взаємодії з навколишнім середовищем. Земля і
        небо сприйматимуться в нуменозному аспекті. Береза і тис знову стануть
        чимось більшим, ніж просто види дерев. І присутність Одіна в глибині
        темних лісів знову відчується. Зрозуміло, подібна ситуація може мати
        місце лише після повного руйнування сучасного світу і пам'яті про нього.
        Загалом, сподівайтеся на Рагнарок.
      </P>
    </main>
  );
};

export default Runes;
