# Scanning av lokalt nett

Lokalscan er ei teneste for å få betre oversikt i eige nett. Dette kan bidra til
å oppdaga skugge-IT, sårbare eller kompromitterte tenester. Det blir dermed
lettare å kvalitetssikre oversikta over informasjonsverdiar, sjå no-tilstanden
på tenestene og førebyggje hendingar.

Tenesta baserer seg på dagens sensorinfrastruktur og kan scanne frå valfritt
VLAN. Vi kombinerer dette med ulike metodar for informasjonsinnhenting og
kartlegging for å gje best mogleg dekning i nettverket.

Det ferdige produktet vil tilby funksjon som minner om Shodan eller liknande
tenester. Dette vil skje gjennom portalen til eduCSC.

Ta kontakt via kontakt@sikt.no for å sjå om du er ein aktuell pilotkunde.

## Etablering

Tenesta fordrar at du allereie har ein eller fleire sensorar.

For å setje i gang treng vi:

- Ei liste over nett som skal scannast (prefiks)
  - Om ikkje kan vi ta utgangspunkt i prefiks som er delegert til dykk av
    Forskningsnettet.
- IP-adresse og gateway (for både IPv4 og IPv6) til scanning
  - Dette inkluderer detaljar om nettmaske/CIDR.
  - RFC1918 fungerer fint for IPv4, så framt dette blir ruta riktig til alle
    nett som skal scannast av sensoren.
  - IP-adressa *bør* opnast for i ulike brannmurar mot nett som skal scannast
  - Vi kan også tagge eit spesifikt VLAN om dette er ynskjeleg, typisk ved bruk
    av 802.1Q-trunk.
- Adresse (URL) og API-token til NAV-instansen dykkar.
  - Sjå
    [NAV-dokumentasjonen](https://nav.readthedocs.io/en/latest/howto/using_the_api.html?highlight=token#the-nav-api)
    for korleis de opprettar token.

Det kjem etter kvart meir funksjonalitet i eduCSC-portalen for å sjå rapportar
og dashboard over funn frå lokalscan. Verksemda di må derfor vera innslusa i
portalen for at de skal få tilgang til denne. Sjå
[portal-dokumentasjonen](/docs/educsc/trusseletterretning/educsc-portal) for meir
info om korleis de kjem i gang.
