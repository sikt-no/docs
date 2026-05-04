# Migrerte tabeller fra STAR-datavarehus

## Testoversikt

Vi jobber kontinuerlig med intern testing av dataene og tabellene vi har migrert fra STAR. 
Vil du hjelpe oss å validere at data stemmer for din institusjon? Ta kontakt med tonje.bakke@sikt.no 

| Tabeller | Testet | Rettet |
|---|---|---|
| dim_fag | x | x |
| dim_vurderingsordning | x | x |
| dim_vurdkombenhet | x | x |
| dim_vurdresstatus | x | x |
| dim_grad | x | x |
| dim_studieprogram_rapportering | x | x |
| dim_campus | x | x |
| dim_sted | x | x |
| dim_institusjon | x | TBV |
| dim_studieretning | x | |
| dim_person | | |
| dim_studieprogram | x | |
| dim_dokumentasjonstatus | x | x |
| dim_h_kvote | x | x |
| dim_kvote | x | x |
| dim_h_kvoterunde | x | x |
| dim_skole | x | x |
| dim_skolebakgrunn | x | x |
| dim_tilbudsstatus | x | x |
| dim_tilbudsvarstatus | x | x |
| dim_opptakstudieprogram | x | x |
| dim_opptakstudieprogramtermin | x | x |
| dim_brevsperre | x | x |
| dim_dbh_finansieringskategori | x | x |
| dim_dbh_kurs_emne | x | x |
| dim_dbh_kurs_kvalifikasjon | x | x |
| dim_dbh_kurs_program | x | x |
| dim_diagnosealvor | x | x |
| dim_dispensasjon | x | x |
| dim_fagtype | x | x |
| dim_grunnlag | x | x |
| dim_institusjon_so (sodm.dim_institusjon) | x | x |
| dim_kompregelverk | x | x |
| dim_kryss | x | x |
| dim_kvote_so (sodm.dim_kvote) | x | x |
| dim_laerested | x | x |
| dim_laerestedtype | x | x |
| dim_land_so (sodm.dim_land) | x | x |
| dim_landsdel | x | x |
| dim_loep | x | x |
| dim_moett | x | x |
| dim_nuskoder | x | x |
| dim_opptak | x | x |
| dim_opptak_sodb (sopgdm.dim_opptak) | x | x |
| dim_opptaksorgan_so (sodm.dim_opptaksorgan) | x | x |
| dim_opptaksrunde | x | x |
| dim_opptaksrunde_sodb (sopgdm.dim_opptaksrunde) | x | x |
| dim_person_so (sodm.dim_person) | x | x |
| dim_realkompkryss | x | x |
| dim_skoletype | x | x |
| dim_soknaltstatus | x | x |
| dim_sost_soeker | x | x |
| dim_sost_studium | x | x |
| dim_sost_tid | x | x |
| dim_stat_sesong | x | x |
| dim_stat_soeker | x | x |
| dim_stat_studium | x | x |
| dim_stat_tid | x | x |
| dim_studieniva | x | x |
| dim_studietype | x | x |
| dim_studium | x | x |
| dim_svaralttype | x | x |
| dim_tallkarakter | x | x |
| dim_tilbudtype | x | x |
| dim_utdanningsprogram | x | x |
| dim_utdanningstype | x | x |
| dim_utdomraade | x | x |
| dim_verdensdel | x | x |
| dim_vgdokstatus | x | x |
| dim_vgdoktype | x | x |
| dim_vitnemaalstatus | x | x |
| fak_dbh_drgrad_avlagt_ind | x | x |
| fak_dbh_gjennomstr_studprog | x | x |
| fak_dbh_stud_eksamen_ind | x | x |
| fak_dbh_stud_oppnadd_kval_ind | x | x |
| fak_drgrad_semester | x | x |
| fak_emne_dette_semester | x | x |
| fak_gjennomstr_student | x | x |
| fak_gjennomstr_studprog_ind | x | x |
| fak_oppnadd_grad_prot | x | x |
| fak_personfagprofil | x | x |
| fak_personfagprofil_uio_v | x | x |
| fak_personkvalgrunnlag | x | x |
| fak_soeknadsalternativ | x | x |
| fak_soknad | x | x |
| fak_soknadsalternativ | x | x |
| fak_soknadsalternativ_pivot | x | x |
| fak_sost_kvote | x | x |
| fak_sost_soknalt | x | x |
| fak_stat_soknalt | x | x |
| fak_studentvurdkombprotokoll | x | x |
| fak_svp_delemner | x | x |
| fak_svp_sensur | x | x |
| fak_tilsattdata | x | x |
| fak_utvperson | x | x |
| fak_vgdok | x | x |
| fak_vurdkombklage | x | x |
| fak_vurdkombprotlogg_klage | x | x |
| dim_alder | x | x |
| dim_dbh_avdeling | | |
| dim_dbh_studieprogram | x | x |
| dim_eksamenssted | x | x |
| dim_emne | | |
| dim_fag_so (sodm.dim_fag) | | |
| dim_forslagvedtak | | |
| dim_fylke | | |
| dim_gradkodeliste | | |
| dim_institusjonsstatus_dv | | |
| dim_kommisjon | x | |
| dim_kommune | x | x |
| dim_kvalgrunnlag | x | |
| dim_kvoterunde | x | |
| dim_kvoterunde_so (sodm.dim_kvoterunde) | | |
| dim_land | | |
| dim_mottstatus | | |
| dim_opptaksorgan | | |
| dim_poststed | | |
| dim_semester | | |
| dim_soeker | | |
| dim_soknadstatus | | |
| dim_spesieltgrunnlagstatus | | |
| dim_spprogregeltermin | | |
| dim_sprak | | |
| dim_studentgrunnlag | | |
| dim_studierettstatus | | |
| dim_studium_sodb (sopgdm.dim_studium) | | |
| dim_tidligopptakstatus | | |
| dim_tilbudsgaranti_b | | |
| dim_tilbudsgaranti_b_so (sodm.dim_tilbudsgaranti_b) | | |
| dim_tilbudsgaranti_s | | |
| dim_tilbudsgaranti_s_so (sodm.dim_tilbudsgaranti_s) | | |
| dim_tilbudsgaranti_t | | |
| dim_tilbudsgaranti_t_so (sodm.dim_tilbudsgaranti_t) | | |
| dim_tilbudstattype | | |
| dim_tilbudstatus_so (sodm.dim_tilbudstatus) | | |
| dim_tilbudsvar | | |
| dim_utestengstatus_lovhjemmel | | |
| dim_utvekslingsprogram | | |
| dim_utvekslingstatus | | |
| dim_vilkarstatus | | |
| dim_vurderingsform | | |
| dim_vurderingskombinasjon | | |
| dim_vurderingstid | | |
| dim_xstatus | | |
| fak_dbh_stud_utveksling_ind | | |
| fak_drgrad | | |
| fak_ekstres_i_gradprot | | |
| fak_emne_i_gradprot | | |
| fak_gjennomstr_studprog | | |
| fak_soknalt | | |
| fak_studieprogramstudent | | |
| fak_studieprogramstudent_unikv | | |
| fak_undervisningsmelding | | |
| fak_utestenging | | |
| fak_vgdok_unik_foerstevm_v | | |
| fak_vgdok_unik_sistevm_v | | |
