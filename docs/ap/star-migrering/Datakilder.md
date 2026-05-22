# Datakilder og datamodeller

Datakilder i Tableau er det vi kaller datamodeller i Analyseplattformen. Noen av disse tilgjengeliggjør vi begge steder, mens andre løfter vi kun til Tableau i første omgang.

For å ikke skape for mye rot i Tableau, har vi valgt å legge rapporter og datakilder til test i en egen mappe. Har du lyst til å bidra inn på testing send en e-post til tonje.bakke@sikt.no , så fikser vi tilgang!

## Hvordan teste en datakilde?

### Se på rådata først

Når du åpner en datakilde i Tableau, vil du se en tabell nederst på skjermen (_Data Source_-fanen). Her kan du bla gjennom dataene og sjekke at det ser fornuftig ut – riktige navn, datoer, tall osv.

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

| Datakilder                                                     | Site                      | Tilgjengelig i AP | Satt opp i Tableau |
| -------------------------------------------------------------- | ------------------------- | ----------------- | ------------------ |
| AKKUMULERT_DBH_DRGRAD_AVLAGT_V (FSDM)                          | STAR                      | Fullført          | Ja                 |
| AKKUMULERT_DBH_GJENNOMSTR_STUDPROG_V                           | STAR                      | Fullført          | Ja                 |
| AKKUMULERT_DBH_STUD_OPPNADD_KVAL                               | STAR                      | Fullført          | Til test           |
| Digitale_vitnemål                                              | STAR                      | Fullført          | Ja, med avvik      |
| DIM_DBH_STUDIEPROGRAM                                          | STAR                      | Fullført          | Ja                 |
| DOK_VGDOK                                                      | SO-datavarehus (NVB)      | Ikke nødvendig    | Ja, med avvik      |
| EDS_Emne_dette_semester_vurderingsprotokoll                    | STAR                      | Fullført          | Ja                 |
| EDS_SVP_Emne_dette_semester_Vurderingsprotokoll                | STAR                      | Fullført          | Ja                 |
| EIP_Emne_i_gradprotokoll                                       | STAR                      | Fullført          | Ja, med avvik      |
| EIPE_Emne_i_gradprotokoll_med_ekstern                          | STAR                      | Fullført          | Ja, med avvik      |
| EMK_Emnekombinasjoner                                          | STAR                      | Fullført          | Ja                 |
| EMNEINFO_RIKSREVISJON                                          | STAR (Sikt-intern kilde)  | Ikke nødvendig    | Ja                 |
| FAG_VGDOKFAG                                                   | SO-datavarehus (NVB)      | Ikke nødvendig    | Ja, med avvik      |
| Fak statistikk søknadsalternativ                               | SO-datavarehus            | Ikke nødvendig    | Ja                 |
| Fak statistikk søknadsalternativ_test                          | SO-datavarehus            | Ikke nødvendig    | Ikke nødvendig     |
| FAK_UNDERVISNINGSMELDING                                       | STAR                      | Fullført          | Ja                 |
| FEIL_NVBFILVGDOKFEIL                                           | SO-datavarehus (NVB)      | Ikke nødvendig    | Ja, med avvik      |
| Finans_doktorgrader                                            | STAR                      | Fullført          | Ja                 |
| Finans_kandidater                                              | STAR                      | Fullført          | Ja                 |
| Finans_studiepoengproduksjon                                   | STAR                      | Fullført          | Ja                 |
| Finans_utveksling                                              | STAR                      | Fullført          | Ja, med avvik      |
| FS_KLIENT_STATISTIKK                                           | STAR (Sikt-intern kilde)  | Ikke nødvendig    | Ja                 |
| GSP_Gjennomstromming_studieprogram                             | STAR                      | Fullført          | Ja, med avvik      |
| GSPI_Gjennomstrømning_studieprogram_individ                    | STAR                      | Fullført          | Ja                 |
| GSPKA_Gjennomstromming_studieprogram_kvalifikasjoner_aggregert | STAR                      | Fullført          | Ja                 |
| GST_Gjennomstromming_student                                   | STAR                      | Fullført          | Ja                 |
| GST_Gjennomstromming_student_UiO                               | STAR                      | Fullført          | Ja, med avvik      |
| GSTHK_Gjennomstromming_student_hovedprogram_og_kvalifikasjoner | STAR                      | Fullført          | Ja, med avvik      |
| GSTHK_uten_tilganskontroll                                     | STAR                      | Fullført          | Ja, med avvik      |
| GSTM_Studentmobilitet                                          | STAR                      | Fullført          | Ja                 |
| MRK_VGDOKMERKNAD                                               | SO-datavarehus (NVB)      | Ikke nødvendig    | Ja, med avvik      |
| PHD_DRGRAD                                                     | STAR                      | Fullført          | Ja                 |
| PHD_RAPPORTERINGSKONTROLL                                      | STAR                      | Fullfært          | Ja                 |
| SAKSBEHANDLER                                                  | STAR (Sikt-intern kilde)  | Ikke nødvendig    | Ja                 |
| SOA_Soknadsalternativ                                          | STAR                      | Fullført          | Ja, med avvik      |
| SOA_Søknadsalternativ                                          | SO-datavarehus            | Ikke nødvendig    | Ja, med avvik      |
| SOA_SOKNALT                                                    | SO-datavarehus            | Ikke nødvendig    | Ja, med avvik      |
| SOAPIVOT_Søknadsalternativ_pivotert                            | STAR                      | Fullført          | Ja                 |
| SOAPS_SOKNALT_pluss_siste_VM                                   | SO-datavarehus (NVB + SO) | Ikke nødvendig    | Ja                 |
| SOAX_Søknadsalternativ_til_eksterne_institusjoner              | STAR                      | Fullført          | Ja, med avvik      |
| Søkerlister                                                    | STAR                      | Fullført          | Ja                 |
| SOKNAD_ASK_FS-og-Excel                                         | ASK (Hkdir)               | Ikke nødvendig    | Ja                 |
| SOST                                                           | STAR                      | Fullført          | Ja, med avvik      |
| SOST_KVOTE_STUDIUM                                             | SO-datavarehus            | Ikke nødvendig    | Ja                 |
| SOST_POENGGRENSE                                               | STAR                      | Fullført          | Ja                 |
| SOST_SOKNALT                                                   | SO-datavarehus            | Ikke nødvendig    | Ja                 |
| Språk_knyttet_til_emne                                         | STAR                      | Fullført          | Ja                 |
| SPS_Studieprogramstudent                                       | STAR                      | Fullført          | Ja                 |
| SPSR_Rekruttering                                              | STAR                      | Fullført          | Ja                 |
| STUDIEBAROMETER                                                | STAR                      | Avventer          | Ja                 |
| Studiebarometeret                                              | STAR                      | Ikke nødvendig    | Ikke nødvendig     |
| Studieoversikt test                                            | SO-datavarehus            | Ikke nødvendig    | Ja                 |
| Studieprogram                                                  | STAR                      | Fullført          | Ja                 |
| Studieprogramstudent_registerkort                              | STAR                      | Fullført          | Ja, med avvik      |
| SVP_Studentvurderingskombinasjonsprotokoll                     | STAR                      | Fullført          | Ja, med avvik      |
| SVPA_Studentvurderingskombinasjonsprotokoll_aggregert          | STAR                      | Fullført          | Ja                 |
| SVPDEL_Sensur_testkilde                                        | STAR                      | Fullført          | Ja                 |
| SVPDEL_Studentvurderingskombinasjonsprotokoll_delmener         | STAR                      | Fullført          | Ja                 |
| SVPS_Studentvurderingskombinasjonsprotokoll_sensur             | STAR                      | Fullført          | Ja                 |
| SVPS_Studentvurderingskombinasjonsprotokoll_sensur_test        | STAR                      | Fullført          | Ja                 |
| Tableau_statistikk                                             | STAR (Sikt-intern kilde)  | Ikke nødvendig    | Ikke nødvendig     |
| TILSATTDATA                                                    | STAR                      | Fullført          | Ja, med avvik      |
| UTE_Utestenging                                                | STAR (RUST)               | Ikke nødvendig    | Ja, med avvik      |
| UTV_Utveksling                                                 | STAR                      | Fullført          | Ja                 |
| VKK_Vurderklage                                                | STAR                      | Fullført          | Ja                 |
| VPL_Vurderingsprotokoll_logg_klage                             | STAR                      | Fullført          | Ja                 |
