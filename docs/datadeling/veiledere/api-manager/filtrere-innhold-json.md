---
description:
  "Om responsen fra et API inneholder informasjon som er beskyttelsesverdig\
  \ og som ikke alle konsumenter trenger kan man legge p\xE5 en enkel policy som fjerner\
  \ felt fra responsen.\n\n\nOm der er et eget-utviklet API er det bedre \xE5 endre\
  \ i APIet. Og selv om man ikke kan endre p\xE5 et API: er det\_ behov for st\xF8\
  rre endringer i responsen til et API er det oftest bedre \xE5 gj\xF8re dette utenfor\
  \ API manageren, feks. ved \xE5 ha en liten mikrotjeneste mellom API manager og\
  \ backend-APIet.\n\n\nMen mindre endringer, f.eks. for \xE5 fjerne enkelte felt,\
  \ er policy-en\_ JSON to JSON transformation en rask og enkel m\xE5te \xE5 filtere\
  \ bort innhold man vil beskytte"
title: Filtrere bort innhold i responsen fra et API
---

# Filtrere bort innhold i responsen fra et API

Om responsen fra et API inneholder informasjon som er beskyttelsesverdig og som ikke alle konsumenter trenger kan man legge på en enkel policy som fjerner felt fra responsen.

Om det er et eget-utviklet API er det bedre å endre i selve API-et. Og selv om man ikke kan endre på et API: er det behov for større endringer i responsen til et API er det bedre å gjøre dette utenfor API manageren, feks. ved å ha en liten mikrotjeneste mellom API manager og backend-API-et.

Med mindre endringer, f.eks. for å fjerne enkelte felt, egner policyen JSON to JSON transformation seg godt. Dette er en rask og enkel måte å filtere bort innhold man vil beskytte.

## Introduksjon

Her konfigureres policyen JSON to JSON transformation. Hvis filtreringen skal gjelde alle som benytter APIet, [legg på policy som beskrevet her.](/docs/datadeling/veiledere/api-manager/legge-pa-enkel-policy)

Om filtreringen skal gjelde en enkel plan, slik at man kan ha en plan som gir all informasjon i svaret og en annen plan som kun gir åpen informasjon i svar, legg til policyen på siste side i veiviseren, punkt 4 "Policies", for å opprette/endre plan.

I nedtrekksmenyen hvor det står "Select policy", velg JSON to JSON transformation og trykk "ADD".

![Legge policy på plan i gravitee](/datadeling/img/image-20210126164247-1.png)

![json to json policy](/datadeling/img/image-20210126175724-2.png)

For Scope, velg "RESPONSE".

I feltet for JOLT spesification spesifiserer du hva som skal endres i JSON filen.

Denne policyen benytter [open source-prosjektet JOLT](https://github.com/bazaarvoice/jolt)

Dette kan [testes på denne web-siden](http://jolt-demo.appspot.com) om det er ønskelig.

### Eksempel 1: Respons fra et API med ett objekt

```Text
{
  "ansatt": {
    "id": "00102099",
    "brukerident": null,
    "dfoBrukerident": null,
    "eksternIdent": null,
    "fornavn": "Kjell-Arne",
    "etternavn": "Testesen",
    "fnr": "29078729585",
    "annenId": [
      null
    ],
    "fdato": "1987-07-29"
  }
}
```

For å fjerne nøkkelel "fnr" og tilknyttet verdi konfigurer vi policyen slik:

```Text
[
  {
    "operation": "remove",
    "spec": {
      "ansatt": {
        "fnr": ""
      }
    }
  }
]
```

Kaller man API-et etter at denne policyen er lagt på, får man i stedet denne responsen:

```Text
{
  "ansatt": {
    "id": "00102099",
    "brukerident": null,
    "dfoBrukerident": null,
    "eksternIdent": null,
    "fornavn": "Kjell-Arne",
    "etternavn": "Testesen",
    "annenId": [
      null
    ],
    "fdato": "1987-07-29"
  }
}
```

### Eksempel 2: Respons fra et API med flere objekt

Mange API-er gir enkeltsvar tilbake som et enkelt objekt, men kall som finner flere objekter gir tilbake en liste med objekter:

```Text
{
  "ansatt": [
    {
      "id": "00102099",
      "brukerident": null,
      "dfoBrukerident": null,
      "eksternIdent": null,
      "fornavn": "Kjell-Arne",
      "etternavn": "Testesen",
      "annenId": [
         null
      ],
      "fdato": "1987-07-29"
    },
    {
      "id": "00100982",
      "brukerident": null,
      "fornavn": "Martin",
      "etternavn": "Martinsen",
      "fnr": "23456789",
      "fdato": "1973-11-06"
    }
  ]
}
```

For å filtrere bort "fnr" fra denne kan man benytte følgende spesifisering:

```Text
[
  {
    "operation": "remove",
    "spec": {
      "ansatt": {
        "*": {
          "fnr": ""
        },
        "fnr": ""
      }
    }
  }
]
```

Denne spesifiseringen vil fungere både på det første og andre eksemplet.

### Eksempel 3: respons fra et API gitt en spesifikk verdi

Noen ganger vil man kun returnere svar ut i fra et API dersom det i svaret forekommer en spesifikk verdi. Gitt at API-et gir følgende respons:

```Text
{
  "id": "5001234",
  "navn": "Ola Nordmann",
  "info": "Informasjon som noen ganger er unntatt offentligheten",
  "unntattOff": "False"
}

```

Og vi vil returnere denne responsen, men kun dersom feltet "unntattOff" ikke har verdien "True".

Følgende JOLT-spesifikasjon vil kun tillate svar der hvor verdien i "unntattOff" er "False":

```Text
[
  {
    "operation": "shift",
    "spec": {
      "unntattOff": {
        "False": {
          "@2": ""
        }
      }
    }
  }
]
```

Om responsen fra API-et er som følger:

```Text
{
  "id": "5001234",
  "navn": "Ola Nordmann",
  "info": "Dette er hemmelig",
  "unntattOff": "True"
}
```

Da vil svaret fra Gravitee med denne policyen på planen/API-et være:

```Text
null
```

Merk at slik som vi har konfigurert JOLT-spesifikasjonen så tar vi med svaret kun hvis "unntattOff" er "False". Om det har verdien "Nei" eller er tomt vil det ikke bli tatt med. Det er også mulig å erstatte innholdet med en tom verdi om "unntattOff" er "True", og returnere svar om det har en hvilken som helst annen verdi, eller ingen verdi, men da risikerer man å returnere svar som ikke skulle vært med om "unntattOff" ved en feil eller en kodeendring er tomt, får verdien "Ja" eller har endret stor/liten bokstav til TRUE eller true.

Merk at spesifikasjonen ikke vil returnere svar om nøkkelen "unntattOff" mangler helt.

### Eksempel 4: Svar med default-verdi

```Text
[
  {
    "operation": "shift",
    "spec": {
      "unntattOff": {
        "true": {
          "": ""
        },
        "*": { "@2": "" }
      }
    }
  }
]
```

Om en nøkkel kun er med hvis den har en verdi vil ikke dette eksempelet returnere noe svar. Feks. om "unntattOff" kun er med i svaret om det har verdien "true" eller om det kun er med om noen eksplisitt har valgt "true" eller "false". I disse tilfellene vil ingen av konfigurasjonene i dette eksempelet fungere. Det man kan gjøre i en slik situasjon er å sette en default-verdi først, og deretter shift-operasjonen:

```Text
[
  {
    "operation": "default",
    "spec": {
      "unntattOff": "false"
    }
  },
  {
    "operation": "shift",
    "spec": {
      "unntattOff": {
        "true": {
          "": ""
        },
        "*": { "@2": "" }
      }
    }
  }
]
```

Merk at nøkkel/verdien som blir lagt til vil bli med i svaret som går til mottakeren.

Disse eksemplene vil, i likhet med eksempel 1, ikke fungere om man får svar med flere objekter i en liste. For slike tilfeller kan man heller bruke:

```Text
[
  {
    "operation": "shift",
    "spec": {
      "unntattOff": {
        "false": {
          "@2": ""
        }
      },
      "*": {
        "unntattOff": {
          "false": {
            "@2": ""
          }
        }
      }
    }
  }
]
```

For å sette inn default-verdier i et array må det spesifiseres at det er et array ved å legge på [] i slutten av navnet.

```Text
{
  "ressurser":
 [
  {
   "id": "5001234",
   "navn": "Kari Nordmann",
   "info": "Informasjon  er unntatt offentligheten",
   "unntattOff": "True"
  },
  {
   "id": "5001235",
   "navn": "Ola Nordmann",
   "info": "Informasjon som ikke er unntatt offentligheten"
  }
 ]
}
```

Bruk

```Text
[
    {
    "operation": "default",
    "spec": {
      "ressurser[]":{
        "*":{
          "unntattOff": "false"
        }
      }
    }
  },
  {
    "operation": "shift",
    "spec": {
      "ressurser":{
        "*": {
          "unntattOff": {
            "false": {
              "@2": "ressurser"
            }
          }
        }
      }
    }
  }
]
```
