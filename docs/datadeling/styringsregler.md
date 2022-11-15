---
slug: /datadeling/styringsregler
title: Styringsreglene til IntArk
---

IntArk inneholder noen overordnede føringer som vi kaller _styringsregler_.
Følger du styringsreglene, så følger du IntArk.

## Om styringsreglene

Formålet med styringsreglene for IntArk er å oppsummere de viktigste
implikasjonene og kravene fra formålet til
IntArk,
[integrasjonsprinsippene](/docs/datadeling/prinsippene) og
[referansearkitekturen for
datadeling](https://unit-norge.github.io/unit-ra/main/B%c3%b8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%c3%b8yere%20utdanning%20og%20forsking.html).
Styringsreglene er altså minimumskravene institusjoner som bruker IntArk må
oppfylle for å etterleve IntArk. Det forventes likevel at institusjoner som
bruker IntArk setter seg inn i alle relevante dokumenter på dette området.

Gevinstene med styringsreglene er mer kostnadseffektiv og endringsdyktig
datadeling hos hver institusjon, og sektoren som helhet, ved at alle aktører
følger de samme kjørereglene for datadeling.

Styringsreglene forvaltes av Sikt i henhold til sektorens
tjenestestyringsmodell, med involvering av institusjonene i sektoren. Det må
forventes at styringsreglene endres over tid basert på erfaringer fra bruk av
IntArk, utviklingen i teknologiplattformen for fellestjenesten, endringer i
nasjonale føringer for datadeling, utviklingen i beste praksis for
integrasjoner, endringer i markedet, osv.

Styringsreglene gjelder for datadeling mellom tjenester lokalt hos
institusjonene, mellom institusjoner i sektoren, og med andre aktører utenfor
sektoren. Styringsreglene er ikke gjeldende for hva du gjør internt i en
IT-tjeneste.

## Styringsregler for

### 1 Tilgjengeliggjøring av data

Data skal være lett å finne og ta i bruk, for å enkelt kunne gjenbrukes.
Sektoren har en [teknisk
datadelingsplattform](/docs/datadeling/teknisk-plattform/) som hjelper deg med
dette, men du må også overholde styringsreglene nedenfor for en enklere
datadeling for alle. Dette gjelder primært for datatilbydere.

<table>
    <thead>
        <tr>
            <th>Nr</th>
            <th>Styringsregel</th>
            <th>Begrunnelse</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1.1</th>
            <td>
                Kildedata skal tilgjengeliggjøres gjennom et API, hvis
                datakonsumenter har behov og hjemmel for dem.
            </td>
            <td>
                Skal vi bli bedre på digitalisering må data være lett
                tilgjengelig, både for interne og eksterne datakonsumenter.
            </td>
        </tr>
        <tr>
            <th>1.2</th>
            <td>
                Kildedata skal tilgjengeliggjøres gjennom API som følger <a
                href="/docs/datadeling/begreper/los-kobling">prinsippene for
                løse koblinger</a>, og være konsument-uavhengig.
            </td>
            <td>
                Verden endrer seg, og det må være enkelt å kunne bytte ut
                enkelttjenester og -systemer fortløpende. Løse koblinger
                reduserer lock-in til spesifikke leverandører eller tjenester.
                Dette følger <a
                href="https://www.digdir.no/datadeling/prinsipp-5-opplysningene-som-de-er/2086">DigDirs
                prinsipp 5 Opplysningene som de er</a>
            </td>
        </tr>
        <tr>
            <th>1.3</th>
            <td>
                API skal publiseres i <a
                href="/docs/datadeling/teknisk-plattform/oversikt">institusjonens
                API-katalog</a>.
            </td>
            <td>
                En samlet oversikt gjør det enklere for datakonsumenter å finne
                frem til institusjonens data, og for institusjonen gir det
                bedre oversikt over hvilke data som deles med hvem.
            </td>
        </tr>
        <tr>
            <th>1.4</th>
            <td>
                API og notifikasjoner skal være dokumenterte og ha publiserte
                kontaktpunkter. Dokumentasjonen skal være lesbar både for
                maskiner og mennesker, der <a
                href="/docs/datadeling/god-praksis/api-design">minimumskravet
                er bruk av OpenAPI (swagger)</a> for API, og for notifikasjoner
                <a
                href="/docs/datadeling/god-praksis/notifikasjonsdesign">CloudEvents
                og IntArks videre føringer</a>.
            </td>
            <td>
                Det må være enkelt for datakonsumenter og utviklere å ta i bruk
                et API.
            </td>
        </tr>
        <tr>
            <th>1.5</th>
            <td>
                API som tilbyr kildedata skal ha tilstrekkelig oppetid og
                responstid til å støtte forventet anvendelse og last.
                Institusjonen vurderer hva som er godt nok.
            </td>
            <td>
                Datakonsumenter må kunne stole på at data er tilgjengelige,
                skal de kunne brukes.
            </td>
        </tr>
        <tr>
            <th>1.6</th>
            <td>
                Like kildedata - på tvers av institusjoner - skal struktureres
                og tilgjengeliggjøres for konsumenter på lik måte, enten
                gjennom et felles API eller identiske API-er.
            </td>
            <td>
                Datakonsumenter må kunne hente tilsvarende data fra sektoren
                med minst mulig spesialtilpasninger per institusjon. Hvert
                avvik gir flere kostnader.
            </td>
        </tr>
        <tr>
            <th>1.7</th>
            <td>
                Det skal tilbys <a
                href="/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert/">notifikasjoner
                om endringer i kildedataene</a> hvis rask provisjonering gir
                bedre brukeropplevelse i de konsumerende tjenestene.  
            </td>
            <td>
                Sluttbrukere forventer at IT-tjenester bare fungerer,
                umiddelbart, og ønsker ikke å "vente til neste morgen". I
                tillegg er dette en mindre systemkrevende integrasjon for store
                datasett, sammenlignet med komplette overføringer av alle data.
            </td>
        </tr>
        <tr>
            <th>1.8</th>
            <td>
                API skal bare tilby data de er autoritative for.
            </td>
            <td>
                Å tilby data som andre er ansvarlige for gjør det vanskeligere
                for konsumenter å finne frem til riktig kilde, og vil risikere
                å bruke utdaterte data. Du bør heller referere eller henvise
                til autoritativt kildesystem.
            </td>
        </tr>
        <tr>
            <th>1.9</th>
            <td>
                Forretningslogikken til en integrasjon bør i utgangspunktet
                ligge hos konsumenten, eventuelt i mikrotjenesten mellom
                datatilbyder og konsument.
            </td>
            <td>
                IntArk synliggjør kostnaden med forretningslogikk, spesielt
                ulikhetene ved gjenbruk. Ved å plassere forretningslogikk i
                integrasjonen, unngår du at kompleksitet lekker inn til
                datatilbyders løsning. Dette følger også <a
                href="https://www.digdir.no/datadeling/prinsipp-5-opplysningene-som-de-er/2086">DigDirs
                prinsipp 5 Opplysningene som de er</a>.
            </td>
        </tr>
    </tbody>
</table>

### 2 Informasjonsforvaltning

Det holder ikke bare å gjøre data tilgjengelige for å oppnå gevinstene med god
datadeling. Du trenger også god datakvalitet for å oppnå gjenbruk, og at dette
forvaltes fortløpende.

For mer informasjon, se blant annet [Veileder for orden i eget
hus](https://data.norge.no/guide/veileder-orden-i-eget-hus/), [anbefalinger for
god datakvalitet](/docs/datadeling/god-praksis/datakvalitet), [sektorens
API-kataloger](/docs/datadeling/teknisk-plattform/oversikt), [Felles
datakatalog](https://data.norge.no/), og [anbefalte roller og ansvar i
IntArk (spesielt rollen «dataforvalter»)](/docs/datadeling/hva-er/roller/).

<table>
    <thead>
        <tr>
            <th>Nr</th>
            <th>Styringsregel</th>
            <th>Begrunnelse</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>2.1</th>
            <td>
                Kildedata skal beskrives semantisk iht. <a
                href="https://data.norge.no/specification/dcat-ap-no/">DCAT-AP-NO</a>
                og <a
                href="/docs/datadeling/god-praksis/datakvalitet/datasett">IntArks
                videre føringer</a> Beskrivelsen skal publiseres i
                institusjonens API-katalog. Bruk begreper og semantikk som er
                definert innen kildedataenes domene.
            </td>
            <td>
                En samlet oversikt over alle kildedata gjør det enklere for
                datakonsumenter å finne frem til riktige data, og institusjonen
                unngår duplisering av data. En sektoriell datakatalog er under
                planlegging, så beskrivelser av datasett vil på sikt flyttes.
            </td>
        </tr>
        <tr>
            <th>2.2</th>
            <td>
                Kildedata skal ha god datakvalitet, altså at de er korrekte,
                komplette, oppdaterte, og konsistente, og har evnen til å
                støtte de informasjonsformål de brukes til (<a
                href="https://data.norge.no/concepts/0321e3b5-984a-4406-a312-90c4edf37c52">se
                definisjon fra datakatalogen</a>).
            </td>
            <td>
                Data med dårlig kvalitet vil føre til mindre gjenbruk, og mer
                lokale avvik.
            </td>
        </tr>
        <tr>
            <th>2.3</th>
            <td>
                Kildedata skal rettes av tilbyder, i kildesystemet, og ikke i
                konsumerende tjeneste eller underveis i mellomvare. Feil i data
                skal meldes til tilbyder.
            </td>
            <td>
                Det er en mer effektiv ressursbruk å rette feil i kilden, enn
                at hver enkelt datakonsument skal gjøre samme rettingene. Hvis
                en konsument retter på kildedata, har du i praksis skapt et
                nytt, uoffisielt kildesystem.
                Det er tillatt å *endre* på kildedata for å støtte spesifikke
                bruksområder, for eksempel i «ytre API», men rettinger av feil
                skal fremdeles gjøres hos kilden.
            </td>
        </tr>
    </tbody>
</table>

### 3 Bruk av data

IntArk legger til rette for datakonsumenter, men det er også noen regler
disse konsumentene må følge.

<table>
    <thead>
        <tr>
            <th>Nr</th>
            <th>Styringsregel</th>
            <th>Begrunnelse</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>3.1</th>
            <td>
                Datakonsumenter skal hente data fra kildesystemet, og ikke
                gjennom andre tjenester. Unntaket er fellestjenester for
                sammenstilte data , og mellomvare som caching- og
                proxy-tjenester.
            </td>
            <td>
                Institusjonen har bedre oversikt og kontroll over egne data
                hvis alle henter data fra kilden, og ikke via andre
                konsumenter. For eksempel når det er viktig at data slettes. Et
                annet eksempel er at en konsument kan ha gjennomført egen
                datavask, og filtrert bort data som ikke er interessant for
                denne konsumenten.
            </td>
        </tr>
    </tbody>
</table>

### 4 IT-sikkerhet og tilgangsstyring

Institusjonene trenger å ha oversikt og kontroll over hvem som har tilgang til
deres data.

Se også de [tekniske retningslinjene](/docs/datadeling/teknisk-plattform/oversikt) for mer detaljer om sikring av tjenester og integrasjoner.

<table>
    <thead>
        <tr>
            <th>Nr</th>
            <th>Styringsregel</th>
            <th>Begrunnelse</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>4.1</th>
            <td>
                Tilganger til kildedata skal registreres og kontrolleres i
                institusjonens API manager
            </td>
            <td>
                Institusjonen har bedre oversikt og kontroll på hvem som har
                tilgang til hvilke av deres data, hvis alle tilganger er samlet
                ett sted. API manager gir verktøy for oversikt og innsikt.
            </td>
        </tr>
    </tbody>
</table>

### 5 Organisering

Institusjonene styrer selv hvordan de organiserer seg relatert til datadeling,
men de må oppfylle noen funksjonelle behov for å overholde IntArk. Vi
_anbefaler_ likevel at institusjonene tar i bruk de [anbefalte rollene fra
referansearkitekturen for deling av data i høyere utdanning og
forsking](https://unit-norge.github.io/unit-ra/main/B%C3%B8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%C3%B8yere%20utdanning%20og%20forsking.html#_roller_og_ansvar_for_informasjonsforvaltning).
Se også [IntArk sin anbefaling relatert til
rollene](/docs/datadeling/hva-er/roller/).

<table>
    <thead>
        <tr>
            <th>Nr</th>
            <th>Styringsregel</th>
            <th>Begrunnelse</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>5.1</th>
            <td>
                Deltakende institusjoner skal ha et kontaktpunkt, for bistand
                til institusjonens integrasjoner. Kontaktpunktet må også være
                tilgjengelig for aktører fra utenfor institusjonen.
            </td>
            <td>
                Det må være enkelt å integrere, og datatilbydere og konsumenter
                må kunne få hjelp om de trenger det. Ofte handler bistanden om
                å kunne henvise til riktig person eller rolle i organisasjonen.
            </td>
        </tr>
        <tr>
            <th>5.2</th>
            <td>
                Ansvaret for konkrete kildedata skal være tydelig definert.
                Alle kildedata må eies av noen ved institusjonen.  
            </td>
            <td>
                Vi trenger en ryddig håndtering av kildedata. Bruk gjerne
                referansearkitekturen sin <a
                href="/docs/datadeling/hva-er/roller/">anbefalte rolle:
                «dataforvalter»</a>.
            </td>
        </tr>
        <tr>
            <th>5.3</th>
            <td>
                Integrasjoner bør eies og finansieres av den som ønsker å
                integrere; altså den tjeneste som vil bedre sin kvalitet
                og/eller tilby rikere funksjonalitet.
            </td>
            <td>
                Dette følger <a
                href="https://www.digdir.no/digitalisering-og-samordning/prinsipp-5-opplysningene-som-de-er/2086">DigDirs
                føringer ved deling av data</a> der «Tilbyder deler
                opplysningene slik de forvalter dem». Et feilplassert eierskap
                vil kunne føre til feil prioriteringer av integrasjonen.
            </td>
        </tr>
    </tbody>
</table>

### 6 Annet

<table>
    <thead>
        <tr>
            <th>Nr</th>
            <th>Styringsregel</th>
            <th>Begrunnelse</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>6.1</th>
            <td>
                IT-tjenester som anskaffes eller utvikles skal følge IntArk,
                inkludert tjenester levert av eksterne leverandører. Hvis en
                tjeneste i utgangspunktet ikke følger IntArk må kostnadene
                for å gjøre den IntArk-kompatibel tas med i evalueringen.
            </td>
            <td>
                Alle kildedata trenger å enkelt kunne tilgjengeliggjøres, hvis
                vi skal oppnå gevinster ved deling og gjenbruk av data. Verden
                og behovene endrer seg, så selv om du ikke ser behovet for
                deling i dag, vil det fort bli et behov senere. Vi trenger ikke
                flere siloer og lock-in-situasjoner.
            </td>
        </tr>
        <tr>
            <th>6.2</th>
            <td>
                Integrasjoner skal bruke nasjonale og sektorielle
                felleskomponenter, der det finnes. Hvis felleskomponenten ikke
                dekker behovet, skal du ha dialog med eieren av denne
                komponenten før alternative løsninger vurderes.
            </td>
            <td>
                Det er mer effektiv bruk av ressurser å gjenbruke det som
                allerede er implementert. Vår sektor har enkelte behov som ikke
                nødvendigvis kan løses nasjonalt, men det er hensiktsmessig å i
                alle fall gi fellestjenesten en sjanse før du eventuelt finner
                opp nye hjul selv.
            </td>
        </tr>
        <tr>
            <th>6.3</th>
            <td>
                Unntak fra arkitekturen må besluttes basert på
                kost/nytte-vurderinger i et livsløpsperspektiv. Beslutningen må
                være sporbar. Unntaket må ivareta IntArks formål og kan ikke
                bryte med kravet om å tilgjengeliggjøre kildedata, jf.
                styringsregel nr. 1.1. Unntak bør meldes tilbake til Sikt, for
                å gi lærdom for videreutvikling av arkitekturen.
            </td>
            <td>
                Hensikten med IntArk er å gjøre det enklere å integrere i
                sektoren, men sektoren er veldig heterogen, og verden er ikke
                perfekt. I enkeltsituasjoner vil det være mer hensiktsmessig å
                godta et unntak, typisk i prioriteringen av kostnader, men det
                er viktig da å tenke på kostnadene i et større perspektiv –
                hvilke ulemper vil det gi for institusjonen senere?
            </td>
        </tr>
    </tbody>
</table>
