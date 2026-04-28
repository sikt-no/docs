# Datakilder og datamodeller

Datakilder i Tableau er det vi kaller datamodeller i Analyseplattformen. Noen av disse tilgjengeliggjør vi begge steder, mens andre løfter vi kun til Tableau i første omgang. 

For å ikke skape for mye rot i Tableau, har vi valgt å legge rapporter og datakilder til test i en egen mappe. Har du lyst til å bidra inn på testing send en e-post til tonje.bakke@sikt.no , så fikser vi tilgang! 

## Hvordan teste en datakilde? 

### Se på rådata først
Når du åpner en datakilde i Tableau Desktop, vil du se en tabell nederst på skjermen (*Data Source*-fanen). Her kan du bla gjennom dataene og sjekke at det ser fornuftig ut – riktige navn, datoer, tall osv.

### Tell opp rader
Dra et felt (f.eks. "Navn" eller "ID") inn i arket og velg å telle antall. Da ser du raskt om det er omtrent så mange rader som du forventer. Hvis du vet at det skal være 500 studenter og Tableau viser 50 000, er noe galt.

### Sjekk datoperioden
Dra datofeltet inn og sjekk at du ser data for riktig tidsperiode. Mangler det måneder? Er det data langt frem i tid som ikke burde være der?

### Se etter tomme verdier
Sorter en kolonne og se om det dukker opp blanke/tomme celler der det ikke burde være det – for eksempel studenter uten studieprogram.

### Sammenlign med noe du vet er riktig
Den beste måten å validere data på er å sammenligne med noe du allerede vet svaret på. For eksempel: vet du at det var 200 søkere i fjor? Sjekk at Tableau viser det samme tallet for samme periode.

Kort sagt handler det om å bruke sunn fornuft og sjekke at tallene "lukter riktig" før du stoler på dem fullt ut.


## Status for overføring til AP og Tableau
| Datakilder | Site | Tilgjengelig i AP | Satt opp i Tableau |
|---|---|---|---|
| Studieprogram | STAR | Fullført | Ja |
| UTV_Utveksling | STAR | Fullført | Ja, med avvik |
| TILSATTDATA | STAR | Fullført | Ja, med avvik |
| Søkerlister | STAR | Avventer | Ja |
| GSTM_Studentmobilitet | STAR | Fullført | Ja, med avvik |
| EMK_Emnekombinasjoner | STAR | Avventer | Ja |
| PHD_RAPPORTERINGSKONTROLL | STAR | Avventer | Ja |
| Finans_doktorgrader | STAR | Fullført | Ja |
| Finans_utveksling | STAR | Fullført | Ja, med avvik |
| Finans_studiepoengproduksjon | STAR | Fullført | Ja |
| SOST_POENGGRENSE | STAR | Fullført | Ja |
| FAK_UNDERVISNINGSMELDING | STAR | Fullført | Ja |
| VPL_Vurderingsprotokoll_logg_klage | STAR | Fullført | Ja |
| GSTHK_Gjennomstromming_student_hovedprogram_og_kvalifikasjoner | STAR | Fullført | Ja, med avvik |
| AKKUMULERT_DBH_DRGRAD_AVLAGT_V (FSDM) | STAR | Avventer | Ja |
| AKKUMULERT_DBH_GJENNOMSTR_STUDPROG_V | STAR | Avventer | Ja |
| AKKUMULERT_DBH_STUD_OPPNADD_KVAL | STAR | Avventer | Til test |
| GSAPKA_Gjennomstromming_studieprogram_kvalifikasjoner_aggregert | STAR | Fullført | Ja, med avvik |
| Finans_kandidater | STAR | Fullført | Ja |
| SOST | STAR | Fullført | Ja, med avvik |
| SPS_Studieprogramstudent | STAR | Fullført | Ja, med avvik |
| SOAPIVOT_Søknadsalternativ_pivotert | STAR | Avventer | Ja |
| SVP_Studentvurderingskombinasjonsprotokoll | STAR | | Ja, med avvik |
| EDS_SVP_Emne_dette_semester_Vurderingsprotokoll | STAR | | Ja |
| PHD_DRGRAD | STAR | | Ja, med avvik |
| GST_Gjennomstromming_student | STAR | | Ja, med avvik |
| FS_KLIENT_STATISTIKK | STAR (Sikt-intern kilde) | Ikke nødvendig | Ja |
| SOA_Soknadsalternativ | STAR | | Ja, med avvik |
| EIP_Emne_i_gradprotokoll | STAR | | Ja, med avvik |
| GSP_Gjennomstromming_studieprogram | STAR | | Ja, med avvik |
| SVPS_Studentvurderingskombinasjonsprotokoll_sensur | STAR | | Ja |
| EIPE_Emne_i_gradprotokoll_med_ekstern | STAR | | Ja, med avvik |
| SOAX_Søknadsalternativ_til_eksterne_institusjoner | STAR | | Ja, med avvik |
| EMNEINFO_RIKSREVISJON | STAR (Sikt-intern kilde) | Ikke nødvendig | Ja |
| SVPS_Studentvurderingskombinasjonsprotokoll_sensur_test | STAR | | Ja |
| SAKSBEHANDLER | STAR (Sikt-intern kilde) | Ikke nødvendig | Ja |
| Studieprogramstudent_registerkort | STAR | | Ja, med avvik |
| SVPDEL_Sensur_testkilde | STAR | | Ja |
| SVPDEL_Studentvurderingskombinasjonsprotokoll_delmener | STAR | | Ja |
| GSPI_Gjennomstrømning_studieprogram_individ | STAR | | Ja |
| DIM_DBH_STUDIEPROGRAM | STAR | | Ja, med avvik |
| GST_Gjennomstromming_student_UiO | STAR | | Ja, med avvik |
| EDS_Emne_dette_semester_vurderingsprotokoll | STAR | | Ja |
| STUDIEBAROMETER | STAR | | Ja |
| Studiebarometeret | STAR | Ikke nødvendig | Ikke nødvendig |
| SVPA_Studentvurderingskombinasjonsprotokoll_aggregert | STAR | | Ja |
| Tableau_statistikk | STAR (Sikt-intern kilde) | Ikke nødvendig | Ikke nødvendig |
| SPSR_Rekruttering | STAR | | Ja, med avvik |
| VKK_Vurderklage | STAR | | Ja |
| GSTHK_uten_tilganskontroll | STAR | | Ja, med avvik |
| Språk_knyttet_til_emne | STAR | | Ja |
| Digitale_vitnemål | STAR | | Ja |
| UTE_Utestenging | STAR (RUST) | Ikke nødvendig | Ja, med avvik |
| SOKNAD_ASK_FS-og-Excel | ASK (Hkdir) | Ikke nødvendig | Ja |
| SOST_KVOTE_STUDIUM | SO-datavarehus | Ikke nødvendig | Ja |
| Fak statistikk søknadsalternativ | SO-datavarehus | Ikke nødvendig | Ja |
| SOA_Søknadsalternativ | SO-datavarehus | Ikke nødvendig | Ja, med avvik |
| SOST_SOKNALT | SO-datavarehus | Ikke nødvendig | Ja |
| Fak statistikk søknadsalternativ_test | SO-datavarehus | Ikke nødvendig | Ikke nødvendig |
| SOA_SOKNALT | SO-datavarehus | Ikke nødvendig | Ja, med avvik |
| DOK_VGDOK | SO-datavarehus (NVB) | Ikke nødvendig | Ja, med avvik |
| SOAPS_SOKNALT_pluss_siste_VM | SO-datavarehus (NVB + SO) | Ikke nødvendig | Ja |
| Studieoversikt test | SO-datavarehus | Ikke nødvendig | Ja |