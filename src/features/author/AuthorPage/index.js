import StyledHeader from "../../../common/Header/styled";
import Section from "../../../common/Section";
import StyledContainer from "../../../common/StyledContainer";
import GlobalStyles from "../../../globalStyles";
import { Wrapper } from "./styled";

const Author = () => (
    <StyledContainer>
        <GlobalStyles />
        <StyledHeader>O autorze</StyledHeader>
        <Section
            title="Weronika Łopato-Jędrasik"
            body={
                <Wrapper>
                    <p>
                        Mam na imię Weronika. Jestem mamą siedmiomiesięcznej córeczki. Podczas
                        urlopu macierzyńskiego postanowiłam, że przyszedł czas na zmiany.
                        Po wyświetleniu się postu na instagramie zapisałam się na kurs programisty
                        w YouCode. Podjęłam to wyzwanie, bo nigdy nie jest za późno na zmiany.
                        Marzenia trzeba spęłniać!
                    </p>
                    <p>
                        Skończyłam studia licencjackie na kierunku
                        kosmetologia na Collegium Medicum w Bydgoszczy. Póżniej
                        przeniosłam sie na studia magisterskie na Uniwersytecie Ekonomicznym
                        w Poznaniu. Tam studiowałam Towaroznawstwo.
                        Wyspecjalizowałam się w Designie i komercjalizacji produktu.
                        Po studiach pracowałam jako specjalista ds. sprzedaży w firmie zajmującej się
                        sprzedażą opraw okularowych.
                        Jednak stwierdziłam, że to nie dla mnie. Mam nadzieję, że niedługo
                        będę mogła napisać o sobie programista.
                    </p>
                    <p>
                        Od 12 lat moją pasją jest jeździectwo. Na codzień trenuje w stajni pod
                        Bydgoszczą. Startuje w konkurencji skoków
                        przez przeszkody na poziomie ogólnopolskim.
                        Jest to <strong>bardzo trudny i wymagający sport</strong>,
                        ale dający ogromną satysfakcję. Jak to powiedział W. Churchill Żadna godzina życia nie została
                        zmarnowana, gdy spędziło się ją w siodle.
                    </p>
                </Wrapper>
            }
        />
    </StyledContainer>
);

export default Author;