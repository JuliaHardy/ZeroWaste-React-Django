# Zero-Waste-App
#### Cele projektu:

Celem “projektu” napisanie aplikacji webowej umożliwiającej użytkownikom zainteresowanym coraz bardziej popularną filozofią “Zero Waste” organizowanie różnego rodzaju eventów umożliwiających integrowanie się oraz popularyzację takiego stylu życia we własnej okolicy.

#### Zakres/Cechy/Funkcje aplikacji:
- Zakładanie i walidacja konta przy pomocy konta gmail/facebook
- Możliwość organizacji różnego rodzaju eventów spotkań (szkolenia, wspólne akcje edukacyjne, akcje sprzątania okolicy).
- Możliwość oznaczania sklepów w których można dostać produkty Zero Waste
- Konkursy na najbardziej przyjazną środowisku okolicę/dzielnicę/osiedle na podstawie aktywności użytkowników.
- Dodawanie wyzwań dla innych użytkowników i zbieranie punktów za proekologiczne zachowanie.
- Możliwość korzystania z aplikacji zarówno na przeglądarkach mobilnych jak i desktopowych.

#### Opis technologii:

Projekt zostanie oparty na bazie danych Postgres znajdującej się na serwerze. Główną technologią wykorzystaną podczas jego realizacji będzie Python/Django wspomagane HTML-em oraz CSS-em jak i JavaSrcipt/React-em.

### wymagania:
- yarn https://yarnpkg.com/en/docs/getting-started (yarn/ yarn install)
- python 3
- requirements.txt
### Obecna funkcjonalność aplikacji
- [x] logowanie/rejsetracja użytkowników
- [x] dodawanie eventow przez zalogowanego użytkownika + mozliwość usunięcia eventu
- [x] mozliwosc przegladania wszystki eventów stworzonych przez wszystkich użytkowników + sortowanie po dacie (najblizsze eventy pierwsze po sortowaniu) + filtrowanie eventów po nazwie organizatora
- [x] po zalogonaniu użytkownikowi pojawia się dodatkowa zakładka "My Profile" gdzie widoczne sa tylko eventy stworzone przez użytkownika
