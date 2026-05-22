# Migrerte tabeller fra STAR-datavarehus

## Testoversikt

Vi jobber kontinuerlig med intern testing av dataene og tabellene vi har migrert fra STAR. TBV står for "to be verified". Det betyr at vi har rettet opp, men må kjøre flere tester for å verifisere at det ble korrekt.
Vil du hjelpe oss å validere at data stemmer for din institusjon? Ta kontakt med tonje.bakke@sikt.no

| Tabeller                                            | Testet | Rettet |
| --------------------------------------------------- | ------ | ------ |
| dim_alder                                           | x      | x      |
| dim_brevsperre                                      | x      | x      |
| dim_campus                                          | x      | x      |
| dim_dbh_avdeling                                    | x      | x      |
| dim_dbh_finansieringskategori                       | x      | x      |
| dim_dbh_kurs_emne                                   | x      | x      |
| dim_dbh_kurs_kvalifikasjon                          | x      | x      |
| dim_dbh_kurs_program                                | x      | x      |
| dim_dbh_studieprogram                               | x      | x      |
| dim_diagnosealvor                                   | x      | x      |
| dim_dispensasjon                                    | x      | x      |
| dim_dokumentasjonstatus                             | x      | x      |
| dim_eksamenssted                                    | x      | x      |
| dim_emne                                            | x      | x      |
| dim_fag                                             | x      | x      |
| dim_fag_so (sodm.dim_fag)                           | x      | x      |
| dim_fagstatus                                       | x      | x      |
| dim_fagtype                                         | x      | x      |
| dim_forslagvedtak                                   | x      | x      |
| dim_fylke                                           | x      | x      |
| dim_grad                                            | x      | x      |
| dim_gradkodeliste                                   | x      | x      |
| dim_grunnlag                                        | x      | x      |
| dim_h_kvote                                         | x      | x      |
| dim_h_kvoterunde                                    | x      | x      |
| dim_institusjon                                     | x      | x      |
| dim_institusjon_so (sodm.dim_institusjon)           | x      | x      |
| dim_institusjonsstatus_dv                           | x      | x      |
| dim_karakter                                        | x      | x      |
| dim_kommisjon                                       | x      | x      |
| dim_kommune                                         | x      | x      |
| dim_kompregelverk                                   | x      | x      |
| dim_kryss                                           | x      | x      |
| dim_kvalgrunnlag                                    | x      | x      |
| dim_kvote                                           | x      | x      |
| dim_kvote_so (sodm.dim_kvote)                       | x      | x      |
| dim_kvoterunde                                      | x      | x      |
| dim_kvoterunde_so (sodm.dim_kvoterunde)             | x      | x      |
| dim_laerested                                       | x      | x      |
| dim_laerestedtype                                   | x      | x      |
| dim_land                                            | x      | x      |
| dim_land_so (sodm.dim_land)                         | x      | x      |
| dim_landsdel                                        | x      | x      |
| dim_loep                                            | x      | x      |
| dim_merknad                                         | x      | x      |
| dim_merknadkategori                                 | x      | x      |
| dim_merknadtype                                     | x      | x      |
| dim_moett                                           | x      | x      |
| dim_mottstatus                                      | x      | x      |
| dim_nuskoder                                        | x      | x      |
| dim_nvbfilfeiltype                                  | x      | x      |
| dim_opptak                                          | x      | x      |
| dim_opptak_sodb (sopgdm.dim_opptak)                 | x      | x      |
| dim_opptaksorgan                                    | x      | x      |
| dim_opptaksorgan_so (sodm.dim_opptaksorgan)         | x      | x      |
| dim_opptaksrunde                                    | x      | x      |
| dim_opptaksrunde_sodb (sopgdm.dim_opptaksrunde)     | x      | x      |
| dim_opptakstudieprogram                             | x      | x      |
| dim_opptakstudieprogramtermin                       | x      | x      |
| dim_person                                          | x      | TBV    |
| dim_person_so (sodm.dim_person)                     | x      | x      |
| dim_poststed                                        | x      | x      |
| dim_realkompkryss                                   | x      | x      |
| dim_semester                                        | x      | x      |
| dim_skole                                           | x      | x      |
| dim_skolebakgrunn                                   | x      | x      |
| dim_skoletype                                       | x      | x      |
| dim_soeker                                          | x      | x      |
| dim_soknadstatus                                    | x      | x      |
| dim_soknaltstatus                                   | x      | x      |
| dim_sost_soeker                                     | x      | x      |
| dim_sost_studium                                    | x      | x      |
| dim_sost_tid                                        | x      | x      |
| dim_spesieltgrunnlagstatus                          | x      | x      |
| dim_spprogregeltermin                               | x      | x      |
| dim_sprak                                           | x      | x      |
| dim_stat_sesong                                     | x      | x      |
| dim_stat_soeker                                     | x      | x      |
| dim_stat_studium                                    | x      | x      |
| dim_stat_tid                                        | x      | x      |
| dim_sted                                            | x      | x      |
| dim_studentgrunnlag                                 | x      | x      |
| dim_studieprogram                                   | x      | x      |
| dim_studieprogram_rapportering                      | x      | x      |
| dim_studieretning                                   | x      | x      |
| dim_studierettstatus                                | x      | x      |
| dim_studieniva                                      | x      | x      |
| dim_studietype                                      | x      | x      |
| dim_studium                                         | x      | x      |
| dim_studium_sodb (sopgdm.dim_studium)               | x      | x      |
| dim_svaralttype                                     | x      | x      |
| dim_tallkarakter                                    | x      | x      |
| dim_termin                                          | x      | x      |
| dim_tidligopptakstatus                              | x      | x      |
| dim_tilbudsgaranti_b                                | x      | x      |
| dim_tilbudsgaranti_b_so (sodm.dim_tilbudsgaranti_b) | x      | x      |
| dim_tilbudsgaranti_s                                | x      | x      |
| dim_tilbudsgaranti_s_so (sodm.dim_tilbudsgaranti_s) | x      | x      |
| dim_tilbudsgaranti_t                                | x      | x      |
| dim_tilbudsgaranti_t_so (sodm.dim_tilbudsgaranti_t) | x      | x      |
| dim_tilbudsstatus                                   | x      | x      |
| dim_tilbudstattype                                  | x      | x      |
| dim_tilbudstatus_so (sodm.dim_tilbudstatus)         | x      | x      |
| dim_tilbudsvar                                      | x      | x      |
| dim_tilbudsvarstatus                                | x      | x      |
| dim_tilbudtype                                      | x      | x      |
| dim_utdanningsprogram                               | x      | x      |
| dim_utdanningstype                                  | x      | x      |
| dim_utdomraade                                      | x      | x      |
| dim_utestengstatus_lovhjemmel                       | x      | x      |
| dim_utvekslingsprogram                              | x      | x      |
| dim_utvekslingstatus                                | x      | x      |
| dim_verdensdel                                      | x      | x      |
| dim_vgdokmerknadsside                               | x      | x      |
| dim_vgdokstatus                                     | x      | x      |
| dim_vgdoktype                                       | x      | x      |
| dim_vilkarstatus                                    | x      | x      |
| dim_vitnemaalstatus                                 | x      | x      |
| dim_vurderingsform                                  | x      | x      |
| dim_vurderingskombinasjon                           | x      | x      |
| dim_vurderingsordning                               | x      | x      |
| dim_vurderingstid                                   | x      | x      |
| dim_vurdkombenhet                                   | x      | x      |
| dim_vurdresstatus                                   | x      | x      |
| dim_xstatus                                         | x      | x      |
| fak_dbh_drgrad_avlagt_ind                           |        |        |
| fak_dbh_gjennomstr_studprog                         |        |        |
| fak_dbh_stud_eksamen_ind                            | x      | x      |
| fak_dbh_stud_oppnadd_kval_ind                       |        | tbv    |
| fak_dbh_stud_utveksling_ind                         | x      | tbv    |
| fak_drgrad                                          | x      | tbv    |
| fak_drgrad_semester                                 |        |        |
| fak_ekstres_i_gradprot                              | x      | x      |
| fak_emne_dette_semester                             | x      | x      |
| fak_emne_i_gradprot                                 | x      | x      |
| fak_gjennomstr_student                              | x      | tbv    |
| fak_gjennomstr_studprog                             |        |        |
| fak_gjennomstr_studprog_ind                         |        |        |
| fak_nvbfilvgdokfeil                                 |        |        |
| fak_oppnadd_grad_prot                               |        |        |
| fak_personfagprofil                                 | x      | x      |
| fak_personfagprofil_uio_v                           |        |        |
| fak_personkvalgrunnlag                              | x      | x      |
| fak_soeknadsalternativ                              |        |        |
| fak_soknad                                          | x      | x      |
| fak_soknadsalternativ                               |        |        |
| fak_soknadsalternativ_pivot                         |        |        |
| fak_soknalt                                         | x      |        |
| fak_sost_kvote                                      | x      | x      |
| fak_sost_soknalt                                    | x      | x      |
| fak_stat_soknalt                                    | x      | tbv    |
| fak_studentvurdkombprotokoll                        |        |        |
| fak_studieprogramstudent                            |        |        |
| fak_studieprogramstudent_unikv                      |        |        |
| fak_svp_delemner                                    | x      |        |
| fak_svp_sensur                                      | x      |        |
| fak_tilsattdata                                     | x      | tbv    |
| fak_undervisningsmelding                            |        |        |
| fak_utestenging                                     | x      | x      |
| fak_utvperson                                       | x      | tbv    |
| fak_vgdok                                           | x      | x      |
| fak_vgdok_unik_foerstevm_v                          | x      | tbv    |
| fak_vgdok_unik_sistevm_v                            | x      | tbv    |
| fak_vgdokfag                                        | x      | tbv    |
| fak_vgdokmerkand                                    | x      | x      |
| fak_vurdkombklage                                   | x      | tbv    |
| fak_vurdkombprotlogg_klage                          | x      | x      |
