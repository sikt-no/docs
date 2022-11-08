# Hvordan sette opp maskinporten med egen nøkkel i gravitee

I maskinportan har man nå mulighet til å [laste opp egne public
keys,](https://samarbeid.digdir.no/id-porten/ny-funksjonalitet-i-min-profil/1042)
slik at man kna bruke egne nøkler mot integrasjoner

_Det kan være ukjente problemer rundt det å benytte seg av egne nøkkler istedenfor virksomhets sertifikat._

## Generer nøkkel-par og JWKs av public-key

Lag nøkkel med

```
ssh-keygen -t rsa -b 4096 -m PEM -f min-egen-rs256.key
```

da får man nøkkelpar, men public-key er i \"ssh-format\" og vi vil
gjerne ha i pem-format også

```
openssl rsa -in min-egen-rs256.key -pubout -outform PEM -out min-egen-rs256.key.pub.pem
```

I selvbetjeningsportalen til maskniporten må man laste de opp i
jwks-format (JWK = Java Web Key) og er en egen, base64-formatert
presentasjon av public key. Det finnes svjv ikke standard cli-vertøy som
fikser det, men det finnes verktøy på nett og flere kodesnutter om gjør
det. Verktøyene trenger kun public-key, så burde være uproblemtask å
bruke whatever. Har selv brukt [pem_to_jwks.py](https://github.com/jpf/okta-jwks-to-pem.git)
da skriptet er lettlest og bruker kjent bibliotek. Det ligger en PR der som konverter skriptet til
python 3 hvis man ønsker versjon av skriptet som er kompatibel med python3 istedenfor python2.

```
python2 pem_to_jwks.py --kid min-egen-key min-egen-rs256.key.pub.pem
```

Det man legger til i parameteret \--kid må man huske/notere, det brukes
til å referere til nøkkelen.

## I gravitee

Generate JWT-policy må være litt annerledes. Det fungerer ikke med
passord på private nøkkelen om man bruke PEM-format (pkcs12-format og
private nøkler bør testes)

Key ID må fylles ut, samme verdi som når man genererte JWKs

Certifitate chain: Velg Do not add

\"Key resolver\" og \"Private key / Secret key / key store path\" må
stemme overens, dvs om det er en pem-fil må det velges \"is provided
inline\" som key resolver og private nøkkel limes inn i feltet for det.

## I Digdirs selvbetjeningsportal for maskinporten

I integrasjonen, velg endre og klikk på JWTs

Lim inn JWKs (outpyt fra pem_to_jwks.py) Er det flere nøkler osm skal
godtas legg til som en JSON-array, dvs. med hake-parantes først og sist
og hver JWK-object kommaseparert
