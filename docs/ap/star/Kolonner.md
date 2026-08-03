# Tabeller med kolonnenavn og datatype

## dim_alder

| Column | Data type |
|---|---|
| alder | BYTE |
| alder5navn | STRING |
| alder8navn | STRING |
| alder6navn | STRING |
| ssbalder | STRING |
| dato_lastet | TIMESTAMP |

## dim_brevsperre

| Column | Data type |
|---|---|
| bre_id | LONG |
| brevsperrekode | STRING |
| brevsperrenavn | STRING |
| brevsperre | STRING |
| dato_lastet | TIMESTAMP |

## dim_campus

| Column | Data type |
|---|---|
| cam_id | LONG |
| institusjonsnr_eier | INT |
| campuskode | STRING |
| campusnavn | STRING |
| campusnavn_nynorsk | STRING |
| campusnavn_engelsk | STRING |
| landnr | SHORT |
| fylkesnr | BYTE |
| kommunenr | BYTE |
| dato_opprettet | TIMESTAMP |
| saksbehinit_opprettet | STRING |
| dato_endret | TIMESTAMP |
| saksbehinit_endret | STRING |
| orgnr | INT |
| status_default | STRING |
| dato_lastet | TIMESTAMP |

## dim_dbh_avdeling

| Column | Data type |
|---|---|
| avd_id | LONG |
| nivaa | DECIMAL |
| nivaa_tekst | STRING |
| nsdinstkode | DECIMAL |
| institusjonsnr_eier | INT |
| institusjonsnavn | STRING |
| avdelingskode | STRING |
| avdelingsnavn | STRING |
| gyldig_fra | STRING |
| gyldig_til | STRING |
| fagkode_avdeling | STRING |
| fagnavn_avdeling | STRING |
| fakultetskode | STRING |
| fakultetsnavn | STRING |
| avdelingskode_3_siste_siffer | STRING |
| dato_lastet | TIMESTAMP |

## dim_dbh_finansieringskategori

| Column | Data type |
|---|---|
| dfk_id | LONG |
| finansieringskategori | STRING |
| finansieringskategori_navn | STRING |
| type_utdanning | STRING |
| belop | DECIMAL |
| basis | DECIMAL |
| studiepoeng_belop | DECIMAL |
| kandidater_enkel | DECIMAL |
| kandidater_dobbel | DECIMAL |
| arstall | DECIMAL |
| dato_lastet | TIMESTAMP |

## dim_dbh_kurs_emne

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| arstall_rapp | INT |
| terminkode_rapp | STRING |
| arstall | INT |
| emnekode | STRING |
| gendato | TIMESTAMP |
| institusjonskode | STRING |
| avdelingskode | STRING |
| studieprogramkode | STRING |
| emnenavn | STRING |
| studieniva | STRING |
| studiepoeng | DECIMAL |
| nuskode | STRING |
| undervisningssprak | STRING |
| stedkode | STRING |
| fagkode | STRING |
| fagnavn | STRING |
| terminkode | STRING |
| nsd_gruppe_bsk | STRING |
| nsd_kode_bsk | STRING |
| nsd_gruppe | STRING |
| ste_id | LONG |
| semester | INT |
| aktivitetstatus | INT |
| oppgave | INT |
| aktivitetstatus_bsk | STRING |
| oppgave_bsk | STRING |
| dato_lastet | TIMESTAMP |

## dim_dbh_kurs_kvalifikasjon

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| arstall_rapp | INT |
| terminkode_rapp | STRING |
| arstall | INT |
| semester | INT |
| kvalifikasjonskode | STRING |
| kvalifikasjonsnavn | STRING |
| gendato | TIMESTAMP |
| institusjonskode | STRING |
| avdelingskode | STRING |
| stedkode | STRING |
| gradgivende | INT |
| studiumkode | STRING |
| studieniva | STRING |
| nuskode | STRING |
| terminkode | STRING |
| nsd_kode_bsk | STRING |
| nsd_gruppe | STRING |
| nsd_gruppe_bsk | STRING |
| ste_id | LONG |
| gradgivende_bsk | STRING |
| dato_lastet | TIMESTAMP |

## dim_dbh_kurs_program

| Column | Data type |
|---|---|
| ste_id | LONG |
| tilbudstype | STRING |
| institusjonsnr_eier | INT |
| arstall_rapp | INT |
| terminkode_rapp | STRING |
| arstall | INT |
| semester | INT |
| gendato | TIMESTAMP |
| institusjonskode | STRING |
| avdelingskode | STRING |
| studieprogramkode | STRING |
| studieprogramnavn | STRING |
| studiumkode | STRING |
| studieniva | STRING |
| andel_heltid | DECIMAL |
| studiepoeng | DECIMAL |
| prosentandel_egenfinans | INT |
| nuskode | STRING |
| organisering | INT |
| prosentandel_praksis | INT |
| undervisningssprak | STRING |
| videreutdanning | INT |
| tilbys_fra | STRING |
| tilbys_til | STRING |
| justering | INT |
| godkjenningsinstans | INT |
| godkjentdato | STRING |
| studieprogramnavn_engelsk | STRING |
| stedkode | STRING |
| kandidatkode | STRING |
| studiepoeng_krav | DECIMAL |
| terminkode | STRING |
| organisering_bsk | STRING |
| videreutdanning_bsk | STRING |
| nsd_kode_bsk | STRING |
| nsd_gruppe | STRING |
| nsd_gruppe_bsk | STRING |
| godkjenningsinstans_bsk | STRING |
| dato_lastet | TIMESTAMP |

## dim_dbh_studieprogram

| Column | Data type |
|---|---|
| dsp_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnavn | STRING |
| arstall | DECIMAL |
| terminkode | STRING |
| studieprogramkode | STRING |
| studieprogramnavn | STRING |
| avdelingskode | STRING |
| avdelingsnavn | STRING |
| avdelingskode_ssb | STRING |
| semester | DECIMAL |
| semesternavn | STRING |
| studiumkode | STRING |
| studnavn | STRING |
| nivaakode | STRING |
| nivaanavn | STRING |
| andel_av_heltid | DECIMAL |
| studiepoeng | DECIMAL |
| prosent_egenfinansiering | DECIMAL |
| nus_kode | STRING |
| organisering | STRING |
| andel_praksis | DECIMAL |
| underv_spraak | STRING |
| navn | STRING |
| videreutd | DECIMAL |
| kursnavn | STRING |
| tilbys_fra | STRING |
| tilbys_til | STRING |
| nytt_studietilbud | DECIMAL |
| godkjenningsinstans | DECIMAL |
| godkjent_av | STRING |
| godkjenningsdato | STRING |
| kvalifikasjonskode | STRING |
| studiepoengkrav_kvalifikasjon | DECIMAL |
| finansieringskategori | STRING |
| finansieringskategori_navn | STRING |
| spr_id | LONG |
| sem_id | LONG |
| uttelling | DECIMAL |
| uttellingstekst | STRING |
| nsdinstkode | DECIMAL |
| dato_lastet | TIMESTAMP |

## dim_diagnosealvor

| Column | Data type |
|---|---|
| dia_id | LONG |
| diagnosealvorkode | STRING |
| diagnosealvornavn | STRING |
| diagnosealvor | STRING |
| dato_lastet | TIMESTAMP |

## dim_dispensasjon

| Column | Data type |
|---|---|
| dis_id | LONG |
| dispensasjonkode | STRING |
| dispensasjonnavn | STRING |
| dispensasjon | STRING |
| dato_lastet | TIMESTAMP |

## dim_dokumentasjonstatus

| Column | Data type |
|---|---|
| dst_id | LONG |
| dokumentasjonstatuskode | STRING |
| dokumentasjonstatusnavn | STRING |
| status_utgatt | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| dokumentasjonstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_eksamenssted

| Column | Data type |
|---|---|
| eks_id | LONG |
| institusjonsnr_eier | INT |
| eksamenstedkode | STRING |
| eksstednavn_bokmal | STRING |
| status_aktiv | STRING |
| eksamenssted | STRING |
| dato_lastet | TIMESTAMP |

## dim_emne

| Column | Data type |
|---|---|
| emn_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| emnekode | STRING |
| versjonskode | STRING |
| ste_adm_id | LONG |
| ste_stud_id | LONG |
| stn_id | LONG |
| emnenavnfork | STRING |
| emnenavn_bokmal | STRING |
| status_tregang_grense | STRING |
| karregelkode | BYTE |
| vektingstall | DECIMAL |
| vekttypekode | STRING |
| status_er_hovedoppgave | STRING |
| status_und_ubegrenset | STRING |
| status_eksordnstud_pakrevd | STRING |
| institusjonsnr_reglement | INT |
| faknr_reglement | BYTE |
| instituttnr_reglement | BYTE |
| gruppenr_reglement | BYTE |
| institusjonsnr_kontroll | INT |
| faknr_kontroll | BYTE |
| instituttnr_kontroll | BYTE |
| gruppenr_kontroll | BYTE |
| studienivakode | SHORT |
| terminkode_eks_forste | STRING |
| arstall_eks_forste | SHORT |
| studieprogramkode_rapportering | STRING |
| kodeverditype | STRING |
| nuskode | INT |
| studiepoeng | DECIMAL |
| oblig | STRING |
| vurdkomb | STRING |
| fagkode_sortering | STRING |
| nus_id | LONG |
| fremmedsprak | STRING |
| emne | STRING |
| institusjonsnr_samarbeid | INT |
| institusjonsnavn_samarbeid | STRING |
| emnetypekode | STRING |
| undpraksistypekode | STRING |
| arstall_und_siste | SHORT |
| arstall_eks_siste | SHORT |
| dato_lastet | TIMESTAMP |

## dim_fag

| Column | Data type |
|---|---|
| fag_id | LONG |
| institusjonsnr_eier | INT |
| fagkode | STRING |
| fagnavn_norsk | STRING |
| institusjonsnr_administrerer | INT |
| faknr_administrerer | BYTE |
| instituttnr_administrerer | BYTE |
| gruppenr_administrerer | BYTE |
| status_aktiv | STRING |
| fag | STRING |
| dato_lastet | TIMESTAMP |

## dim_fag_so

| Column | Data type |
|---|---|
| fag_id | LONG |
| fagkode | STRING |
| fag | STRING |
| felles_spraak | STRING |
| inaktiv | STRING |
| omfang | DECIMAL |
| sentral_sensur | STRING |
| sentral_oppgave | STRING |
| omfang_overstyrbart | STRING |
| fagnavn | STRING |
| fagnavn_nynorsk | STRING |
| aarstall_fra | SHORT |
| terminkode_fra | STRING |
| felles_eksamen | STRING |
| privatist_eksamen | STRING |
| reformkode | STRING |
| fagtypekode | STRING |
| fagnavn_grep | STRING |
| fagnavn_grep_kortform | STRING |
| fagnavn_grep_kortform_nynorsk | STRING |
| fagnavn_grep_kortform_samisk | STRING |
| fagnavn_grep_nno | STRING |
| fagnavn_grep_nob | STRING |
| fagnavn_grep_sme | STRING |
| omfang_grep_vitnemaal | SHORT |
| omfang_grep_netto | SHORT |
| omfang_grep_totalt | SHORT |
| fagtypenavn | STRING |
| dato_lastet | TIMESTAMP |

## dim_fagstatus

| Column | Data type |
|---|---|
| fas_id | LONG |
| fagstatuskode | STRING |
| fagstatusnavn | STRING |
| fagstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_fagtype

| Column | Data type |
|---|---|
| fat_id | LONG |
| fagtypekode | STRING |
| fagtypenavn | STRING |
| fagtype | STRING |
| dato_lastet | TIMESTAMP |

## dim_forslagvedtak

| Column | Data type |
|---|---|
| fve_id | LONG |
| forslagvedtakkode | STRING |
| forslagvedtaknavn | STRING |
| kodeverditype | STRING |
| forslagvedtak | STRING |
| dato_lastet | TIMESTAMP |

## dim_fylke

| Column | Data type |
|---|---|
| fyl_id | LONG |
| fylkesnr | BYTE |
| fylkesnavn | STRING |
| fylke | STRING |
| folketall1997 | INT |
| folketall1987 | INT |
| landsdelkode | STRING |
| fylkeskode | STRING |
| skolesystem_vitnemaal | STRING |
| er_fylke | STRING |
| folketall2007 | INT |
| folketall2011 | INT |
| landareal | INT |
| dato_lastet | TIMESTAMP |

## dim_grad

| Column | Data type |
|---|---|
| grd_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| gradkode | STRING |
| ste_fag_id | LONG |
| stn_id | LONG |
| gradnavn_hankjonn | STRING |
| gradnavn_hunkjonn | STRING |
| gradnavn_forkortet | STRING |
| institusjonsnr_fagansvarlig | INT |
| faknr_fagansvarlig | BYTE |
| instituttnr_fagansvarlig | BYTE |
| gruppenr_fagansvarlig | BYTE |
| studienivakode | SHORT |
| karregelkode | BYTE |
| gradnavn_engelsk | STRING |
| terminkode_forste_tilbud | STRING |
| arstall_forste_tilbud | SHORT |
| terminkode_siste_tilbud | STRING |
| arstall_siste_tilbud | SHORT |
| studiumkode_rapportering | STRING |
| status_utgatt | STRING |
| nuskode | INT |
| status_grad | STRING |
| status_vitnemalsgivende | STRING |
| status_lovbeskyttet_tittel | STRING |
| nus_id | LONG |
| grad | STRING |
| gradlistekode | STRING |
| dato_lastet | TIMESTAMP |

## dim_gradkodeliste

| Column | Data type |
|---|---|
| gkl_id | LONG |
| gradlistekode | STRING |
| gradnavn_bokmal | STRING |
| gradtypekode | STRING |
| status_karakter | STRING |
| gradforkortelse | STRING |
| gradliste | STRING |
| dato_lastet | TIMESTAMP |

## dim_grunnlag

| Column | Data type |
|---|---|
| gru_id | LONG |
| grunnlagkode | STRING |
| grunnlagnavn | STRING |
| grunnlag | STRING |
| brukeskode_i_gsk | STRING |
| brukeskode_i_rangr | STRING |
| forbedring_tillatt | STRING |
| dato_endret | TIMESTAMP |
| prionr_sort | SHORT |
| gskvedtakrangering | BYTE |
| aarstall_utgaatt | SHORT |
| foedtselsaar_utgaatt | SHORT |
| dato_lastet | TIMESTAMP |

## dim_h_kvote

| Column | Data type |
|---|---|
| kvo_h_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| arstall | SHORT |
| terminkode | STRING |
| studietypenr | SHORT |
| kvotetilhkode | STRING |
| kvoterangkode | STRING |
| kvotenavn | STRING |
| status_nom | STRING |
| poengtall_grense_iar_hoved | DECIMAL |
| poengtall_grense_iar_vara | DECIMAL |
| poengtall_grense_iar_slutt | DECIMAL |
| dato_lastet | TIMESTAMP |

## dim_h_kvoterunde

| Column | Data type |
|---|---|
| kvr_h_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| arstall | SHORT |
| terminkode | STRING |
| studietypenr | SHORT |
| kvotetilhkode | STRING |
| kvoterangkode | STRING |
| opptaksrundekode | STRING |
| status_nom | STRING |
| dato_lastet | TIMESTAMP |

## dim_institusjon

| Column | Data type |
|---|---|
| ins_id | LONG |
| institusjonsnr | INT |
| institusjon_akronym | STRING |
| institusjonsnavn_bokmal | STRING |
| institusjonsnavn_engelsk | STRING |
| status_godkjent_betsted | STRING |
| status_aktiv | STRING |
| landnr | SHORT |
| institusjonstypekode | STRING |
| bynavn | STRING |
| landnavn_norsk | STRING |
| landnavn_engelsk | STRING |
| verdensdel | STRING |
| status_eos | STRING |
| institusjon | STRING |
| institusjonsgruppe | STRING |
| dato_lastet | TIMESTAMP |

## dim_institusjon_so

| Column | Data type |
|---|---|
| ins_id | LONG |
| institusjons_id | LONG |
| institusjonskategori_id | STRING |
| institusjonsnavn | STRING |
| institusjonskortnavn | STRING |
| url | STRING |
| epost | STRING |
| telefon | STRING |
| institusjonsnr | DECIMAL |
| er_saksbehandler | STRING |
| institusjonsstatus_id | STRING |
| dato_lastet | TIMESTAMP |

## dim_institusjonsstatus_dv

| Column | Data type |
|---|---|
| institusjonsnr | INT |
| institusjon_akronym | STRING |
| institusjonsnavn_bokmal | STRING |
| produksjonsstatus | STRING |
| institusjonstypekode | STRING |
| institusjon | STRING |
| dato_lastet | TIMESTAMP |

## dim_karakter

| Column | Data type |
|---|---|
| kar_id | LONG |
| karakterkode | STRING |
| karakternavn | STRING |
| karakter | STRING |
| er_gyldig | STRING |
| dato_lastet | TIMESTAMP |

## dim_kommisjon

| Column | Data type |
|---|---|
| kms_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| emnekode | STRING |
| versjonskode | STRING |
| vurdkombkode | STRING |
| arstall | SHORT |
| vurdtidkode | STRING |
| kommislopenr | SHORT |
| kommisjonsnavn | STRING |
| status_automatisk_fordeling | STRING |
| antall_sensorer | INT |
| antall_interne_sensorer | INT |
| antall_eksterne_sensorer | INT |
| antall_kvinnelige_sensorer | INT |
| antall_mannlige_sensorer | INT |
| dato_lastet | TIMESTAMP |

## dim_kommune

| Column | Data type |
|---|---|
| kom_id | LONG |
| kommunekode | STRING |
| kommunenavn | STRING |
| kommune | STRING |
| fylkesnr | BYTE |
| kommunetall | BYTE |
| folketall1987 | INT |
| folketall1997 | INT |
| totalareal | INT |
| landareal | INT |
| er_kommune | STRING |
| sykefravaer2003_kvartal1 | DECIMAL |
| snittinntekt | INT |
| fylkeskode | STRING |
| fylkesnavn | STRING |
| folketall2011 | INT |
| dato_lastet | TIMESTAMP |

## dim_kompregelverk

| Column | Data type |
|---|---|
| krv_id | LONG |
| kompregelkode | STRING |
| kompregeltype | STRING |
| handbok_tekst | STRING |
| handbok_fortekstkode | STRING |
| dato_endret | TIMESTAMP |
| er_vgdokberegnbart | STRING |
| kompregelverk | STRING |
| dato_lastet | TIMESTAMP |

## dim_kryss

| Column | Data type |
|---|---|
| kry_id | LONG |
| krysskode | STRING |
| kryssforklaring | STRING |
| kryss | STRING |
| dato_lastet | TIMESTAMP |

## dim_kvalgrunnlag

| Column | Data type |
|---|---|
| kgr_id | LONG |
| institusjonsnr_eier | INT |
| kvalgrunnlagkode | STRING |
| kvalgrunnlagnavn | STRING |
| kvalgrunnlag | STRING |
| dato_lastet | TIMESTAMP |

## dim_kvote

| Column | Data type |
|---|---|
| kvo_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| studietypenr | SHORT |
| kvotetilhkode | STRING |
| kvoterangkode | STRING |
| kvotenavn | STRING |
| status_nom | STRING |
| poengtall_grense_iar_hoved | DECIMAL |
| poengtall_grense_iar_vara | DECIMAL |
| poengtall_grense_iar_slutt | DECIMAL |
| dato_lastet | TIMESTAMP |

## dim_kvote_so

| Column | Data type |
|---|---|
| kvo_id | LONG |
| aar | LONG |
| laerestednr | SHORT |
| studietypenr | SHORT |
| kvotetilhkode | STRING |
| kvoterangkode | STRING |
| kvotenavn | STRING |
| kvote | STRING |
| brevkvotekode | STRING |
| dato_endret | TIMESTAMP |
| kvotesummkode_overstyr | STRING |
| prioritetkode | BYTE |
| kvotetilhkode_flyt | STRING |
| kvoterangkode_flyt | STRING |
| usynligpoengkode | STRING |
| rangvpkode | STRING |
| usynligventelistekode | STRING |
| poenggrense_ifjor_handbok | DECIMAL |
| alle_ifjor_handbok | STRING |
| kvotesvar_default | STRING |
| kvotespmkode_default | STRING |
| dato_lastet | TIMESTAMP |

## dim_kvoterunde

| Column | Data type |
|---|---|
| kvr_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| studietypenr | SHORT |
| kvotetilhkode | STRING |
| kvoterangkode | STRING |
| opptaksrundekode | STRING |
| status_nom | STRING |
| dato_lastet | TIMESTAMP |

## dim_kvoterunde_so

| Column | Data type |
|---|---|
| kvr_id | LONG |
| aar | LONG |
| laerestednr | SHORT |
| studietypenr | SHORT |
| kvotetilhkode | STRING |
| kvoterangkode | STRING |
| opptrundekode | STRING |
| poeng_grense_ifjor | DECIMAL |
| poeng_grense_iaar | DECIMAL |
| studieplasser_tilbgar | INT |
| studieplasser_tilbud | INT |
| ventelistenr | INT |
| ventelistenr_max | INT |
| dato_lastet | TIMESTAMP |

## dim_laerested

| Column | Data type |
|---|---|
| las_id | LONG |
| laerestednr | SHORT |
| laerestedkode | STRING |
| laerestednavn | STRING |
| laerested | STRING |
| adrlinje1_offentlig | STRING |
| adrlinje2_offentlig | STRING |
| adrpostnr_offentlig | STRING |
| adrpoststed_offentlig | STRING |
| dato_endret | TIMESTAMP |
| fylkesnr | BYTE |
| kommunetall | BYTE |
| telefon_offentlig | STRING |
| telefaks_offentlig | STRING |
| laerestedtypekode | STRING |
| url | STRING |
| antall_studenter | STRING |
| antall_lesesalsplasser | STRING |
| antall_hybler | STRING |
| antall_barnehageplasser | STRING |
| bygningsareal | STRING |
| tilpasset_funksjonsh | STRING |
| fadderordning | STRING |
| samskipnad | STRING |
| adresse_samskipnad | STRING |
| telefon_samskipnad | STRING |
| studentdemokrati | STRING |
| adresse_studentdemokrati | STRING |
| telefon_studentdemokrati | STRING |
| studentavis | STRING |
| adresse_studentavis | STRING |
| telefon_studentavis | STRING |
| videreutdanning | STRING |
| beskrivelse | STRING |
| laerestedkode_offentlig | STRING |
| laerestednavn_samisk | STRING |
| laerestedkortnavn | STRING |
| laerestedkortnavn_samisk | STRING |
| laerestedtilleggsnavn | STRING |
| laerestedtilleggsnavn_samisk | STRING |
| laerestednavn_nynorsk | STRING |
| er_solaerested | STRING |
| utdomr_sorteringkode | STRING |
| shb_topptekst | STRING |
| email_offentlig | STRING |
| shbsidetall | SHORT |
| fylke | STRING |
| kommune | STRING |
| laerestedtype | STRING |
| landsdel | STRING |
| poststed | STRING |
| fyl_id | LONG |
| kom_id | LONG |
| lat_id | LONG |
| lad_id | LONG |
| pos_id | LONG |
| aar | SHORT |
| dato_lastet | TIMESTAMP |

## dim_laerestedtype

| Column | Data type |
|---|---|
| lat_id | LONG |
| laerestedtypekode | STRING |
| laerestedtypenavn | STRING |
| laerestedtype | STRING |
| dato_lastet | TIMESTAMP |

## dim_land

| Column | Data type |
|---|---|
| lan_id | LONG |
| landnr | SHORT |
| landnavn_norsk | STRING |
| landnavn_engelsk | STRING |
| landkode | STRING |
| land | STRING |
| landnr_statsborger_i | SHORT |
| landnavn_norsk_statsborger_i | STRING |
| landnavn_engelsk_statsborger_i | STRING |
| landkode_statsborger_i | STRING |
| land_statsborger_i | STRING |
| status_aktiv | STRING |
| verdensdel | STRING |
| status_eos | STRING |
| vestlig | STRING |
| dato_lastet | TIMESTAMP |

## dim_land_so

| Column | Data type |
|---|---|
| lan_id | LONG |
| landkode | STRING |
| landnavn | STRING |
| land | STRING |
| landtall | SHORT |
| dato_endret | TIMESTAMP |
| utdsystekst | STRING |
| landnavn_engelsk | STRING |
| hovedstad | STRING |
| befolkning | LONG |
| hdirank_2001 | SHORT |
| landkode_internett | STRING |
| verdensdelkode | STRING |
| areal | DECIMAL |
| areal_land | DECIMAL |
| areal_vann | DECIMAL |
| corruption_index | DECIMAL |
| landtall_iso | SHORT |
| landkode_tbf | STRING |
| valutakode | STRING |
| bilkode | STRING |
| landnavn_ciawfb | STRING |
| bnp_pr_person_dollar | INT |
| bnp_vekst_prosent | DECIMAL |
| arbeidsledighet | DECIMAL |
| gjeld_dollar | LONG |
| militaerbudsjett_dollar | LONG |
| alder_forventet | DECIMAL |
| foedsler_pr_kvinne | DECIMAL |
| inflasjon | DECIMAL |
| industriproduksjonsvekst | DECIMAL |
| elproduksjon_kwt | LONG |
| elforbruk_kwt | LONG |
| oljeproduksjon_fpd | INT |
| oljeforbruk_fpd | INT |
| oljeeksport_fpd | INT |
| oljeimport_fpd | INT |
| oljereserver_fat | LONG |
| eksport_dollar | LONG |
| import_dollar | LONG |
| telefoner_fast | LONG |
| telefoner_mobil | LONG |
| jernbane_km | INT |
| internet_hosts | INT |
| internet_brukere | INT |
| veier_km | INT |
| investeringer_bnpprosent | DECIMAL |
| gini_index | DECIMAL |
| fattige_prosent | DECIMAL |
| naturgassproduksjon | LONG |
| naturgassforbruk | LONG |
| naturgasseksport | LONG |
| naturgassimport | LONG |
| naturgassreserver | LONG |
| hivaids_doedpraar | INT |
| hivaids_har | INT |
| hivaids_pct_voksne_15_49 | DECIMAL |
| alder_median | DECIMAL |
| alder_median_menn | DECIMAL |
| alder_median_kvinner | DECIMAL |
| flyplasser | INT |
| flyplasser_asfalt | SHORT |
| befolkningsvekst | DECIMAL |
| befolkning_foedsler_1000 | DECIMAL |
| befolkning_doedsfall_1000 | DECIMAL |
| befolkning_migrasjon_1000 | DECIMAL |
| alder_myndighet | BYTE |
| befolkning_midlerpst_laveste10 | DECIMAL |
| befolkning_midlerpst_hoyeste10 | DECIMAL |
| krever_opphtillatelse | STRING |
| landtypekode | STRING |
| flagg_png_base64 | STRING |
| dato_lastet | TIMESTAMP |

## dim_landsdel

| Column | Data type |
|---|---|
| lad_id | LONG |
| landsdelkode | STRING |
| landsdelnavn | STRING |
| landsdel | STRING |
| folketall1987 | INT |
| folketall1997 | INT |
| dato_lastet | TIMESTAMP |

## dim_loep

| Column | Data type |
|---|---|
| lop_id | LONG |
| loepskode | STRING |
| loepsnavn | STRING |
| loep | STRING |
| kravkode | STRING |
| grunnlagkode_gsk | STRING |
| loepstypekode | STRING |
| kravkode_fdy | STRING |
| uttelling_bonuspoeng | BYTE |
| kravkode_uten_karakterer | STRING |
| utdprogramkode | STRING |
| min_ant_ekskar_feil | BYTE |
| min_ant_ekskar_varsel | BYTE |
| reformkode | STRING |
| kravkode_spr | STRING |
| dato_lastet | TIMESTAMP |

## dim_merknad

| Column | Data type |
|---|---|
| mer_id | LONG |
| merknadkode | STRING |
| merknadtypekode | STRING |
| reformkode | STRING |
| antall_parametre | INT |
| parametertype | STRING |
| parametertype2 | STRING |
| merknad | STRING |
| dato_lastet | TIMESTAMP |

## dim_merknadkategori

| Column | Data type |
|---|---|
| mrk_id | LONG |
| merknadkategorikode | STRING |
| merknadkategorinavn | STRING |
| merknadkategori | STRING |
| dato_lastet | TIMESTAMP |

## dim_merknadtype

| Column | Data type |
|---|---|
| mrt_id | LONG |
| merknadtypekode | STRING |
| merknadtypenavn | STRING |
| merknadtype | STRING |
| dato_lastet | TIMESTAMP |

## dim_moett

| Column | Data type |
|---|---|
| mot_id | LONG |
| moettkode | STRING |
| moettnavn | STRING |
| moett | STRING |
| dato_lastet | TIMESTAMP |

## dim_mottstatus

| Column | Data type |
|---|---|
| mot_id | LONG |
| mottstatkode | STRING |
| mottstatnavn | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| mottstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_nuskoder

| Column | Data type |
|---|---|
| nus_id | LONG |
| nuskode | INT |
| nusstudienivanr | BYTE |
| nusfagfeltnr | BYTE |
| nusfaggruppenr | BYTE |
| nusutdgruppenr | BYTE |
| nusenkeltutdnr | BYTE |
| nusenkeltutdnavn | STRING |
| nusutdgruppenavn | STRING |
| nusfaggruppenavn | STRING |
| nusfagfeltnavn | STRING |
| nusstudienivanavn | STRING |
| beskrivelse | STRING |
| bachelor_master | STRING |
| nusenkeltutdnavn_engelsk | STRING |
| nusutdgruppenavn_engelsk | STRING |
| nusfaggruppenavn_engelsk | STRING |
| nusfagfeltnavn_engelsk | STRING |
| nusstudienivanavn_engelsk | STRING |
| dato_lastet | TIMESTAMP |

## dim_nvbfilfeiltype

| Column | Data type |
|---|---|
| nvt_id | LONG |
| feiltypenr | INT |
| feiltypekode | STRING |
| antall_parametre | INT |
| feiltekst | STRING |
| meldingskode | STRING |
| meldingsgrad | STRING |
| meldingssted | STRING |
| dato_lastet | TIMESTAMP |

## dim_opptak

| Column | Data type |
|---|---|
| opt_id | LONG |
| institusjonsnr_eier | INT |
| opptakstypekode | STRING |
| terminkode | STRING |
| arstall | SHORT |
| status_saksbehandlingsfasen | STRING |
| status_generer_regnr | STRING |
| institusjonsnr | INT |
| faknr | BYTE |
| instituttnr | BYTE |
| gruppenr | BYTE |
| opptakstypenavn | STRING |
| studierettstatkode | STRING |
| opptak | STRING |
| dato_lastet | TIMESTAMP |

## dim_opptak_sodb

| Column | Data type |
|---|---|
| opt_id | LONG |
| opptaks_id | LONG |
| opptaksnavn | STRING |
| opptaksstatus | STRING |
| opptakstype | STRING |
| dato_lastet | TIMESTAMP |

## dim_opptaksorgan

| Column | Data type |
|---|---|
| opo_id | LONG |
| opptorgankode | STRING |
| opptorgannavn | STRING |
| status_nom | STRING |
| institusjonsnr | INT |
| opptaksorgan | STRING |
| dato_lastet | TIMESTAMP |

## dim_opptaksorgan_so

| Column | Data type |
|---|---|
| opo_id | LONG |
| opptorgankode | STRING |
| opptomrkode | STRING |
| opptorgannavn | STRING |
| opptorgan | STRING |
| sendingstypekode_kan | STRING |
| adrlinje1 | STRING |
| adrlinje2 | STRING |
| adrpostnr | STRING |
| adrpoststed | STRING |
| antall_saksbeh | INT |
| brukernavn_katalog | STRING |
| datasystemkode | STRING |
| maxtak | INT |
| tegnsettkode | STRING |
| telefon | STRING |
| telefaks | STRING |
| email | STRING |
| opptansv | STRING |
| email_opptansv | STRING |
| telefon_opptansv | STRING |
| telefaks_opptansv | STRING |
| edbansv | STRING |
| email_edbansv | STRING |
| telefon_edbansv | STRING |
| telefaks_edbansv | STRING |
| infoansv | STRING |
| email_infoansv | STRING |
| telefon_infoansv | STRING |
| telefaks_infoansv | STRING |
| omslagsark_filkode | STRING |
| opptorgannavn_samisk | STRING |
| er_opptaksorgan | STRING |
| opptorgannavn_nynorsk | STRING |
| dato_lastet | TIMESTAMP |

## dim_opptaksrunde

| Column | Data type |
|---|---|
| opr_id | LONG |
| aar | LONG |
| opptrundekode | STRING |
| opptaksrundenavn | STRING |
| opptaksrunde | STRING |
| opptrundesort | STRING |
| rundetypekode | STRING |
| opptak | INT |
| dato_sendt | TIMESTAMP |
| dato_lastet | TIMESTAMP |

## dim_opptaksrunde_sodb

| Column | Data type |
|---|---|
| opr_id | LONG |
| opptaks_id | LONG |
| opptaksnavn | STRING |
| opptaksstatus | STRING |
| opptakstype | STRING |
| opptaksrunde_id | LONG |
| opptaksrundetype | STRING |
| dato_kjoert | TIMESTAMP |
| dato_frist | TIMESTAMP |
| start_opptaksparameter | TIMESTAMP |
| end_opptaksparameter | TIMESTAMP |
| dato_lastet | TIMESTAMP |

## dim_opptakstudieprogram

| Column | Data type |
|---|---|
| opm_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| studietypenr | SHORT |
| terminkode | STRING |
| arstall | SHORT |
| opptakstudprognavn | STRING |
| opptorgankode | STRING |
| opptakstudprogkortnavn | STRING |
| kompregelverkkode | STRING |
| rangeringsregelverkkode | STRING |
| vektingstall | DECIMAL |
| vekttypekode | STRING |
| semesterantall | BYTE |
| opptakstypekode | STRING |
| utdomradekode | STRING |
| studiumkategorikode | STRING |
| campuskode | STRING |
| studietypekode | STRING |
| studietypenavn | STRING |
| utdtypekode | STRING |
| status_nom | STRING |
| utdtypenavn | STRING |
| studiumkategorinavn | STRING |
| utdomradenavn | STRING |
| dato_lastet | TIMESTAMP |

## dim_opptakstudieprogramtermin

| Column | Data type |
|---|---|
| ost_id | LONG |
| institusjonsnr_eier | INT |
| opptakstypekode | STRING |
| terminkode | STRING |
| arstall | SHORT |
| institusjonsnr | INT |
| studietypenr | SHORT |
| tall_budsj_plasser | INT |
| tall_budsj_plasser_yvei | INT |
| tall_reserv_plasser | INT |
| studieprogramkode | STRING |
| terminkode_kull | STRING |
| arstall_kull | SHORT |
| studieretningkode | STRING |
| studieretningnavn_bokmal | STRING |
| dato_frist_sok | TIMESTAMP |
| klassekode | STRING |
| dato_lastet | TIMESTAMP |

## dim_person

| Column | Data type |
|---|---|
| per_id | LONG |
| institusjonsnr_eier | INT |
| personlopenr | INT |
| postnr_hjemsted | INT |
| adresseland_hjemsted | STRING |
| fylkesnr_hjemsted | INT |
| fylkesnavn_hjemsted | STRING |
| kommunenr_hjemsted | INT |
| kommunenavn_hjemsted | STRING |
| fylkomnr_hjemsted | STRING |
| kommunegruppenr_hjemsted | INT |
| kommunegruppenavn_hjemsted | STRING |
| kommunegruppekortnavn_hjemsted | STRING |
| regionnr_hjemsted | INT |
| regionnavn_hjemsted | STRING |
| fylkesnr_forstegang_reg | INT |
| fylkesnavn_forstegang_reg | STRING |
| kommunenr_forstegang_reg | INT |
| kommunenavn_forstegang_reg | STRING |
| fylkomnr_freg | STRING |
| kommunegruppenr_freg | INT |
| kommunegruppenavn_freg | STRING |
| kommunegruppekortnavn_freg | STRING |
| regionnr_freg | INT |
| regionnavn_freg | STRING |
| landnr_hjemland | INT |
| landnavn_norsk_hjemland | STRING |
| landnavn_engelsk_hjemland | STRING |
| landkode_hjemland | STRING |
| institusjonsnr_godkj_stkomp | INT |
| terminkode_godkj_stkomp | STRING |
| arstall_godkj_stkomp | INT |
| kjonn | STRING |
| kvalgrunnlagkode_genstudkomp | STRING |
| skolebakgrunnkode | STRING |
| studentgrunnlagkode | STRING |
| fodselsar | INT |
| sem_freg_id | LONG |
| sem_godk_id | LONG |
| gsktype | STRING |
| stgrltype | STRING |
| studtype | STRING |
| studentnr_tildelt | INT |
| snittkarakter_nvb | DECIMAL |
| ansattnr | STRING |
| person_lopenr_dv | LONG |
| ald_freg_id | LONG |
| snittkarakter_fs | DECIMAL |
| landnr_vdg_opplaring | INT |
| kvalgrunnlagkode_teknisk_fagsk | STRING |
| dato_lastet | TIMESTAMP |

## dim_person_so

| Column | Data type |
|---|---|
| per_id | LONG |
| aar | LONG |
| foedtdato | TIMESTAMP |
| person_lopenr_dv | LONG |
| adrpostnr_hjemsted | STRING |
| adrpoststed_hjemsted | STRING |
| dato_endret | TIMESTAMP |
| dato_soreg | TIMESTAMP |
| nordiskutdkrysskode | STRING |
| utenlutdkrysskode | STRING |
| steinerkrysskode | STRING |
| ibutdkrysskode | STRING |
| realkompkrysskode | STRING |
| fylkesnr_hjemsted | INT |
| kommunetall_hjemsted | INT |
| kjoennskode | STRING |
| landkode_statsborger | STRING |
| maalformkode | STRING |
| morsmaalkode | STRING |
| regnr | STRING |
| opptorgankode_ord_b | STRING |
| opptorgankode_primaer | STRING |
| dato_gsk_forkynt | TIMESTAMP |
| brevsperrekode | STRING |
| vitnemaalstatkode | STRING |
| smskrysskode | STRING |
| gskdispensasjonkode | STRING |
| tidligopptakkrysskode | STRING |
| norskutdkrysskode | STRING |
| diagnosealvorkode | STRING |
| landkode_utdanning | STRING |
| tidligopptakgrunnkode | STRING |
| opptaksevarselkode | STRING |
| opptorgankode_tra | STRING |
| lforkurspaameldingkode | STRING |
| lforkursstatuskode | STRING |
| lforkurslaerestednr | INT |
| lforkursstedkode | STRING |
| lforkurskandidatnr | STRING |
| lforkurskandidatnr2 | STRING |
| lforkursstatuskode_org | STRING |
| bre_id | LONG |
| dia_id | LONG |
| fyl_id | LONG |
| kom_id | LONG |
| kry_ibutd_id | LONG |
| kry_norskutd_id | LONG |
| kry_nordiskutd_id | LONG |
| kry_sms_id | LONG |
| kry_steiner_id | LONG |
| kry_tidligopptak_id | LONG |
| kry_utenlutd_id | LONG |
| lan_statsborger_id | LONG |
| lan_utdanning_id | LONG |
| opo_ord_b_id | LONG |
| opo_primaer_id | LONG |
| rea_id | LONG |
| ver_statsborger_id | LONG |
| ver_utdanning_id | LONG |
| vit_id | LONG |
| dato_lastet | TIMESTAMP |

## dim_poststed

| Column | Data type |
|---|---|
| pos_id | LONG |
| poststednr | STRING |
| poststednavn | STRING |
| poststed | STRING |
| fylkesnr | BYTE |
| kommunetall | BYTE |
| kode | STRING |
| breddegrad | LONG |
| lengdegrad | LONG |
| dato_lastet | TIMESTAMP |

## dim_realkompkryss

| Column | Data type |
|---|---|
| rea_id | LONG |
| krysskode | STRING |
| kryssforklaring | STRING |
| realkompkryss | STRING |
| dato_lastet | TIMESTAMP |

## dim_semester

| Column | Data type |
|---|---|
| sem_id | LONG |
| arstall | SHORT |
| terminkode | STRING |
| studiearnavn | STRING |
| artermin_inkr | DECIMAL |
| termin_fra_dato | TIMESTAMP |
| termin_til_dato | TIMESTAMP |
| artermin | STRING |
| dato_lastet | TIMESTAMP |

## dim_skole

| Column | Data type |
|---|---|
| sko_id | LONG |
| orgnr | STRING |
| skolenr | STRING |
| skolenr_vigo | STRING |
| skolenr_rvo | STRING |
| skolenavn | STRING |
| skole | STRING |
| fylkesnr | BYTE |
| kommunetall | BYTE |
| dato_opprettet | TIMESTAMP |
| skolekildekode | STRING |
| skoletypekode | STRING |
| har_eksamensrett | STRING |
| orgnr_filial_av | STRING |
| navn_kontaktperson | STRING |
| tittel_kontaktperson | STRING |
| adrlinje1 | STRING |
| adrlinje2 | STRING |
| adrpostnr | STRING |
| adrpoststed | STRING |
| adrlandnavn | STRING |
| telefonnr | STRING |
| telefaxnr | STRING |
| epostadresse | STRING |
| url | STRING |
| dato_endret | TIMESTAMP |
| karakteristikk | STRING |
| nace1 | STRING |
| statuskode | STRING |
| orgnr_utenlandsk | STRING |
| skolekortnavn | STRING |
| kommunenavn | STRING |
| fylkesnavn | STRING |
| skoletypenavn | STRING |
| dato_lastet | TIMESTAMP |

## dim_skolebakgrunn

| Column | Data type |
|---|---|
| skb_id | LONG |
| institusjonsnr_eier | INT |
| skolebakgrunnkode | STRING |
| skolebakgrunnnavn | STRING |
| status_skolepoeng_forventes | STRING |
| kvalgrunnlagkode_gsk | STRING |
| status_nom | STRING |
| kodeverditype | STRING |
| skolebakgrunn | STRING |
| dato_lastet | TIMESTAMP |

## dim_skoletype

| Column | Data type |
|---|---|
| skt_id | LONG |
| skoletypekode | STRING |
| skoletypenavn | STRING |
| skoletype | STRING |
| dato_lastet | TIMESTAMP |

## dim_soeker

| Column | Data type |
|---|---|
| soe_id | LONG |
| soeker_id | STRING |
| person_lopenr_dv | LONG |
| dsf_dato | TIMESTAMP |
| digital_kontakt_info_status | STRING |
| spraak | STRING |
| bekreftet | STRING |
| utlending | STRING |
| postnr | STRING |
| poststed | STRING |
| land | STRING |
| dokumentsamtykke | STRING |
| dato_fjernet | TIMESTAMP |
| dato_opprettet | TIMESTAMP |
| antall_dokumenter | SHORT |
| fodselsar | SHORT |
| kjonn | STRING |
| dato_lastet | TIMESTAMP |

## dim_soknadstatus

| Column | Data type |
|---|---|
| sst_id | LONG |
| soknadstatkode | STRING |
| soknadstatnavn | STRING |
| status_utgatt | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| soknadstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_soknaltstatus

| Column | Data type |
|---|---|
| sos_id | LONG |
| soknaltstatkode | STRING |
| soknaltstatnavn | STRING |
| soknaltstat | STRING |
| dato_lastet | TIMESTAMP |

## dim_sost_soeker

| Column | Data type |
|---|---|
| soid | INT |
| tid | STRING |
| foedtaar | INT |
| alder | INT |
| aldersgruppe | STRING |
| aldersgruppe2 | STRING |
| aldersgruppe3 | STRING |
| aldersgruppe4 | STRING |
| kjoenn | STRING |
| fylkesnr | INT |
| kommunetall | INT |
| kommunenr | STRING |
| fylke | STRING |
| kommune | STRING |
| postnr | STRING |
| regnr | STRING |
| forlkryss | STRING |
| realkryss | STRING |
| steinerkryss | STRING |
| utenlutdkryss | STRING |
| utenlstatsborgerkryss | STRING |
| utenlstatsborger | STRING |
| karakterpoeng | DECIMAL |
| konkpoeng | DECIMAL |
| skolepoeng | DECIMAL |
| alder_des | DECIMAL |
| dato_lastet | TIMESTAMP |

## dim_sost_studium

| Column | Data type |
|---|---|
| tid | STRING |
| laerestednr | INT |
| studietypenr | INT |
| studiekode | STRING |
| studkode | STRING |
| utdkatkode | STRING |
| utdtypekode | STRING |
| utdomrkode | STRING |
| utdomrtypekode | STRING |
| studkatkode | STRING |
| studiumkortnavn | STRING |
| studiumhandboknavn | STRING |
| studiumnavn | STRING |
| kjoennspoeng | STRING |
| vekttall | INT |
| studiepoeng | INT |
| studstatuskode | STRING |
| kompregelkode | STRING |
| rangregelkode | STRING |
| deltid | STRING |
| studieplasser_budsjettert | INT |
| studieplasser_reservert | INT |
| plasser | INT |
| laerestedkode | STRING |
| laerestednavn | STRING |
| fylkesnr | INT |
| kommunetall | INT |
| kommunenr | STRING |
| fylke | STRING |
| sfylke | STRING |
| kommune | STRING |
| fylkesnr_laerested | INT |
| kommunetall_laerested | INT |
| kommunenr_laerested | STRING |
| fylke_laerested | STRING |
| kommune_laerested | STRING |
| undervisningssted | STRING |
| undervisningssted_fylkesnr | INT |
| undervisningssted_kommunetall | INT |
| studiested | STRING |
| spr_id | LONG |
| ste_id | LONG |
| ost_id | LONG |
| opm_id | LONG |
| stid | INT |
| dato_lastet | TIMESTAMP |

## dim_sost_tid

| Column | Data type |
|---|---|
| tid | STRING |
| aar | INT |
| sesong | STRING |
| tid_innlastet | TIMESTAMP |
| username | STRING |
| dato_lastet | TIMESTAMP |

## dim_spesieltgrunnlagstatus

| Column | Data type |
|---|---|
| sgs_id | LONG |
| spesgrunnlagstatkode | STRING |
| spesgrunnlagstatnavn | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| spesieltgrunnlagstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_spprogregeltermin

| Column | Data type |
|---|---|
| prt_id | LONG |
| institusjonsnr_eier | INT |
| spprogresjonsregelkode | STRING |
| terminnr | BYTE |
| vektingstall_krav | DECIMAL |
| vekttypekode_krav | STRING |
| spprogresjonsregelnavn | STRING |
| studiepoeng_krav | DECIMAL |
| spprogregeltermin | STRING |
| dato_lastet | TIMESTAMP |

## dim_sprak

| Column | Data type |
|---|---|
| spk_id | LONG |
| sprakkode | STRING |
| spraknavn | STRING |
| sprakgruppe | STRING |
| sprak | STRING |
| dato_lastet | TIMESTAMP |

## dim_stat_sesong

| Column | Data type |
|---|---|
| opptakstype | STRING |
| sesong | STRING |
| sesongnavn | STRING |
| rekkefoelgenr | INT |
| dato_lastet | TIMESTAMP |

## dim_stat_soeker

| Column | Data type |
|---|---|
| soid | INT |
| id_applicant | STRING |
| tid | STRING |
| foedtaar | INT |
| alder | INT |
| alder_des | DECIMAL |
| aldersgruppe | STRING |
| aldersgruppe2 | STRING |
| aldersgruppe3 | STRING |
| aldersgruppe4 | STRING |
| kjoenn | STRING |
| fylkesnr | INT |
| kommunetall | INT |
| kommunenr | STRING |
| fylke | STRING |
| kommune | STRING |
| postnr | STRING |
| forlkryss | STRING |
| realkryss | STRING |
| steinerkryss | STRING |
| utenlutdkryss | STRING |
| utenlstatsborger | STRING |
| gskdispensasjon | STRING |
| karakterpoeng | DECIMAL |
| konkpoeng | DECIMAL |
| skolepoeng | DECIMAL |
| person_lopenr_dv | LONG |
| dato_lastet | TIMESTAMP |

## dim_stat_studium

| Column | Data type |
|---|---|
| stid | INT |
| tid | STRING |
| id_study_programme | LONG |
| laerestednr | INT |
| studietypenr | INT |
| studiekode | STRING |
| studkode | STRING |
| utdkatkode | STRING |
| utdtypekode | STRING |
| utdomrkode | STRING |
| utdomrtypekode | STRING |
| studkatkode | STRING |
| studiumkortnavn | STRING |
| studiumhandboknavn | STRING |
| studiumnavn | STRING |
| kjoennspoeng | STRING |
| vekttall | INT |
| studiepoeng | INT |
| studstatuskode | STRING |
| kompregelkode | STRING |
| rangregelkode | STRING |
| deltid | STRING |
| studieplasser_budsjettert | INT |
| studieplasser_reservert | INT |
| plasser | INT |
| laerestedkode | STRING |
| laerestednavn | STRING |
| fylkesnr | INT |
| kommunetall | INT |
| kommunenr | STRING |
| fylke | STRING |
| sfylke | STRING |
| kommune | STRING |
| fylkesnr_laerested | INT |
| kommunetall_laerested | INT |
| kommunenr_laerested | STRING |
| fylke_laerested | STRING |
| kommune_laerested | STRING |
| undervisningssted | STRING |
| undervisningssted_fylkesnr | INT |
| undervisningssted_kommunetall | INT |
| studiested | STRING |
| studiumhandboknavn_org | STRING |
| nettbasert | STRING |
| samlingsbasert | STRING |
| startmaaned | INT |
| laerestedkode_oppr | STRING |
| laerestednavn_oppr | STRING |
| aar | INT |
| studiumhandboknavn_oppr | STRING |
| studiekode_fagskole | STRING |
| studiekode_annen | STRING |
| dato_lastet | TIMESTAMP |

## dim_stat_tid

| Column | Data type |
|---|---|
| tid | STRING |
| aar | INT |
| opptakstype | STRING |
| sesong | STRING |
| id_admission | LONG |
| tid_oppdatert | TIMESTAMP |
| dato_lastet | TIMESTAMP |

## dim_sted

| Column | Data type |
|---|---|
| ste_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| faknr | SHORT |
| instituttnr | SHORT |
| gruppenr | SHORT |
| stedakronym | STRING |
| stednavn_bokmal | STRING |
| orgnivakode | STRING |
| adrlin1 | STRING |
| adrlin2 | STRING |
| postnr | SHORT |
| adrlin3 | STRING |
| stedkortnavn | STRING |
| fak_akronym | STRING |
| fak_navn | STRING |
| fak_kortnavn | STRING |
| int_akronym | STRING |
| int_navn | STRING |
| int_kortnavn | STRING |
| stedkode | STRING |
| sted | STRING |
| fakultet | STRING |
| institutt | STRING |
| landnr | SHORT |
| landnavn_engelsk | STRING |
| sted_kategori | STRING |
| ste_kode | STRING |
| dato_lastet | TIMESTAMP |

## dim_studentgrunnlag

| Column | Data type |
|---|---|
| sgr_id | LONG |
| institusjonsnr_eier | INT |
| studentgrunnlagkode | STRING |
| studentgrunnlagnavn | STRING |
| studentgrunnlag | STRING |
| dato_lastet | TIMESTAMP |

## dim_studieniva

| Column | Data type |
|---|---|
| stn_id | LONG |
| studienivakode | SHORT |
| studienivanavn | STRING |
| nsdnivakode | STRING |
| nsd_kode_bsk | STRING |
| erasmusnivakode | STRING |
| status_emne | STRING |
| status_studieprogram | STRING |
| status_kvalifikasjon | STRING |
| status_videreutdanning | STRING |
| nsd_gruppe_bsk | STRING |
| studieniva | STRING |
| nsdniva | STRING |
| dato_lastet | TIMESTAMP |

## dim_studieprogram

| Column | Data type |
|---|---|
| spr_id | LONG |
| institusjonsnr_eier | INT |
| studieprogramkode | STRING |
| ste_stud_id | LONG |
| stn_id | LONG |
| studieprognavn | STRING |
| institusjonsnr_studieansv | INT |
| faknr_studieansv | BYTE |
| instituttnr_studieansv | BYTE |
| gruppenr_studieansv | BYTE |
| status_grunnstudium | STRING |
| studienivakode | SHORT |
| tidsenhet_varighet | STRING |
| tall_varighet | INT |
| studiumkode | STRING |
| studiumnavn | STRING |
| institusjonsnr_forer_til | INT |
| gradkode_forer_til | STRING |
| status_utgatt | STRING |
| status_overstyr_emndet | STRING |
| prosenttall_egenfinans | SHORT |
| prosenttall_heltidandel | SHORT |
| vektingstall | DECIMAL |
| vekttypekode | STRING |
| nuskode | INT |
| malgruppekode | STRING |
| finanstypekode | STRING |
| arstall_forste_tilbud | SHORT |
| terminkode_forste_tilbud | STRING |
| arstall_siste_tilbud | SHORT |
| terminkode_siste_tilbud | STRING |
| finanskatkode | STRING |
| status_utdplan | STRING |
| semester_normert | SHORT |
| finansiering | STRING |
| deltid | STRING |
| sp_gruppe | STRING |
| spprogresjonsregelkode | STRING |
| nus_id | LONG |
| undorganiseringnavn | STRING |
| undorganiseringkode | STRING |
| fremmedsprak | STRING |
| studieprogram | STRING |
| studium | STRING |
| undorganisering | STRING |
| prosenttall_praksisdel | LONG |
| videreutdstatuskode | STRING |
| dato_lastet | TIMESTAMP |

## dim_studieprogram_rapportering

| Column | Data type |
|---|---|
| sra_id | LONG |
| institusjonsnr_eier | INT |
| studieprogramkode | STRING |
| terminkode | STRING |
| arstall | SHORT |
| opptaksramme | SHORT |
| dato_lastet | TIMESTAMP |

## dim_studieretning

| Column | Data type |
|---|---|
| str_id | LONG |
| institusjonsnr_eier | INT |
| studieretningkode | STRING |
| studieretningnavn_bokmal | STRING |
| studieretningnavn_nynorsk | STRING |
| studieretningnavn_engelsk | STRING |
| fagkode_inneholder | STRING |
| status_aktiv | STRING |
| betegnelsekode | STRING |
| studieretning | STRING |
| dato_lastet | TIMESTAMP |

## dim_studierettstatus

| Column | Data type |
|---|---|
| srs_id | LONG |
| institusjonsnr_eier | INT |
| studierettstatkode | STRING |
| studierettstatnavn | STRING |
| kodeverditype | STRING |
| status_aktiv | STRING |
| status_behold_ved_overgang | STRING |
| studierettstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_studietype

| Column | Data type |
|---|---|
| stt_id | LONG |
| studietypenr | SHORT |
| studietypekode | STRING |
| studietypenavn | STRING |
| dato_endret | TIMESTAMP |
| utdtypekode | STRING |
| semesterantall | BYTE |
| vekttall | SHORT |
| studietype | STRING |
| dato_lastet | TIMESTAMP |

## dim_studium

| Column | Data type |
|---|---|
| stu_id | LONG |
| aar | LONG |
| laerestednr | SHORT |
| studietypenr | SHORT |
| adgtypekode | STRING |
| behandlertypekode | STRING |
| dato_endret | TIMESTAMP |
| deltid | STRING |
| kjoennspoeng | BYTE |
| kompregelkode | STRING |
| kvoterangkode_spe | STRING |
| kvotetilhkode_spe | STRING |
| nom | STRING |
| opptomrkode | STRING |
| opptorgankode | STRING |
| rangregelkode | STRING |
| semesterantall_fra | BYTE |
| semesterantall_til | BYTE |
| studieplasser_budsjettert | INT |
| studieplasser_reservert | INT |
| studiumhandboknavn | STRING |
| studiumkortnavn | STRING |
| studiumnavn | STRING |
| studkatkode | STRING |
| studstatuskode | STRING |
| tilleggsskjema | STRING |
| undervisningssted | STRING |
| undervisningssted_fylkesnr | BYTE |
| undervisningssted_kommunetall | BYTE |
| url | STRING |
| utbyggingsmulighet | STRING |
| utdkatkode | STRING |
| vekttall | SHORT |
| studiumnavn_samisk | STRING |
| studiumkortnavn_samisk | STRING |
| studiumhandboknavn_samisk | STRING |
| brevtekstkode | STRING |
| brevt_omsl_ordkode | STRING |
| brevt_omsl_realkode | STRING |
| studiumnavn_nynorsk | STRING |
| studiumkortnavn_nynorsk | STRING |
| laerestednr_gmlkode | SHORT |
| studietypenr_gmlkode | SHORT |
| utdomrkode | STRING |
| har_primaervmkvote | STRING |
| medisinskattestkode | STRING |
| studiepoeng | SHORT |
| utdtypekode | STRING |
| brevt_svar_vilkaar | STRING |
| laerestedkode | STRING |
| utdomrkode3 | STRING |
| har_tidligopptak | STRING |
| dato_soeknadsfrist | TIMESTAMP |
| utdomrkode2 | STRING |
| studietype | STRING |
| utdtype | STRING |
| utdomraade | STRING |
| stt_id | LONG |
| utt_id | LONG |
| uto_id | LONG |
| kompregelverk | STRING |
| krv_id | LONG |
| las_id | LONG |
| laerestednavn | STRING |
| laerested | STRING |
| har_lforkurs | STRING |
| dato_lastet | TIMESTAMP |

## dim_studium_sodb

| Column | Data type |
|---|---|
| stu_id | LONG |
| studium_id | LONG |
| studiumnavn | STRING |
| studiumnavn_nynorsk | STRING |
| studiumnavn_samisk | STRING |
| studienivaa_id | LONG |
| utdanningsomraade_id | STRING |
| institusjons_id | LONG |
| rangeringsregel_id | STRING |
| kravkode_id | STRING |
| saksbehandlertype_id | STRING |
| opptaks_id | LONG |
| url | STRING |
| undervisningssted_id | LONG |
| fulltid | STRING |
| onlin | STRING |
| kombinert_laering | STRING |
| studiepoengkrav | LONG |
| antall_semestre | LONG |
| antall_studieplasser | LONG |
| startmnd | LONG |
| kjoennspoeng | LONG |
| kjoenn | STRING |
| kansellert | STRING |
| studiumnr | LONG |
| har_tidlig_frist | STRING |
| tilbyr_tidlig_opptak | STRING |
| er_ny | STRING |
| utdanningsomraade_subtype | STRING |
| har_studieavgift | STRING |
| tilleggsinformasjon | STRING |
| tilbyr_ledighet | STRING |
| maks_ledighet | LONG |
| antall_tilbud | LONG |
| ledighet_brukt | LONG |
| antall_paa_venteliste | LONG |
| tilbyr_ledighet_siden_sist | STRING |
| studienivaanavn | STRING |
| utdanningsomraadenavn | STRING |
| rangeringsregelnavn | STRING |
| kravkodenavn | STRING |
| kravkodebeskrivelse | STRING |
| saksbehandlertype | STRING |
| undervisningssted | STRING |
| fylkesnr | STRING |
| kommunenr | STRING |
| opptaksnavn | STRING |
| opptaksstatus | STRING |
| opptakstype | STRING |
| tagnavn1 | STRING |
| tagnavn2 | STRING |
| tagnavn3 | STRING |
| ins_id | LONG |
| dato_lastet | TIMESTAMP |

## dim_svaralttype

| Column | Data type |
|---|---|
| svt_id | LONG |
| svaralttypekode | STRING |
| svaralttypenavn | STRING |
| svaralttype | STRING |
| dato_lastet | TIMESTAMP |

## dim_tallkarakter

| Column | Data type |
|---|---|
| tal_id | LONG |
| karaktertall | DECIMAL |
| karakternavn | STRING |
| karaktertall_dv | BYTE |
| dato_lastet | TIMESTAMP |

## dim_termin

| Column | Data type |
|---|---|
| ter_id | LONG |
| terminkode | STRING |
| terminnavn | STRING |
| termin | STRING |
| dato_lastet | TIMESTAMP |

## dim_tidligopptakstatus

| Column | Data type |
|---|---|
| tos_id | LONG |
| tidligopptakstatkode | STRING |
| tidligopptakstatnavn | STRING |
| tidligopptaktypekode | STRING |
| status_opptaksgivende | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| tidligopptakstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsgaranti_b

| Column | Data type |
|---|---|
| tgb_id | LONG |
| tilbudsgarantikode | STRING |
| tilbudsgarantinavn | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| status_settes_brolle | STRING |
| status_tilbudsgivende | STRING |
| tilbudsgaranti | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsgaranti_b_so

| Column | Data type |
|---|---|
| tgb_id | LONG |
| tilbgarantkode | STRING |
| tilbgarantnavn | STRING |
| tilbudsgaranti_b | STRING |
| er_tilbudsgivende | STRING |
| tilbgarbrevtekst | STRING |
| tilbgarbrevtekst_nynorsk | STRING |
| tilbgarbrevtekst_samisk | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsgaranti_s

| Column | Data type |
|---|---|
| tgs_id | LONG |
| tilbudsgarantikode | STRING |
| kodeverditype | STRING |
| tilbudsgarantinavn | STRING |
| status_nom | STRING |
| status_gir_tilbud | STRING |
| tilbudsgaranti | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsgaranti_s_so

| Column | Data type |
|---|---|
| tgs_id | LONG |
| tilbgarantkode | STRING |
| tilbgarantnavn | STRING |
| tilbudsgaranti_s | STRING |
| er_tilbudsgivende | STRING |
| tilbgarbrevtekst | STRING |
| tilbgarbrevtekst_nynorsk | STRING |
| tilbgarbrevtekst_samisk | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsgaranti_t

| Column | Data type |
|---|---|
| tgt_id | LONG |
| institusjonsnr_eier | INT |
| tilbudsgarantikode | STRING |
| tilbudsgarantinavn | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| status_gir_tilbud | STRING |
| tilbudsgarantibetkode | STRING |
| tilbudsgaranti | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsgaranti_t_so

| Column | Data type |
|---|---|
| tgt_id | LONG |
| tilbgarantkode | STRING |
| tilbgarantnavn | STRING |
| er_tilbudsgivende | STRING |
| tilbgarbrevtekst | STRING |
| tilbgarbrevtekst_nynorsk | STRING |
| tilbgarbrevtekst_samisk | STRING |
| betingelsekode | STRING |
| tilbudsgaranti_t | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsstatus

| Column | Data type |
|---|---|
| tst_id | LONG |
| institusjonsnr_eier | INT |
| tilbudstatkode | STRING |
| tilbudstatnavn | STRING |
| prioritetsnr | SHORT |
| status_nom | STRING |
| status_onsker_tilbud | STRING |
| status_tar_plass | STRING |
| status_gir_tilbud | STRING |
| tilbudsstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudstattype

| Column | Data type |
|---|---|
| tty_id | LONG |
| tilbudstattypekode | STRING |
| tilbudstattypenavn | STRING |
| status_nom | STRING |
| tilbudstattype | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudstatus_so

| Column | Data type |
|---|---|
| tis_id | LONG |
| tilbstatuskode | STRING |
| tilbstatusnavn | STRING |
| tilbstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsvar

| Column | Data type |
|---|---|
| tiv_id | LONG |
| svarkode | STRING |
| svarnavn | STRING |
| tilbudsvar | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudsvarstatus

| Column | Data type |
|---|---|
| tss_id | LONG |
| svarstatkode | STRING |
| svarstatnavn | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| tilbudsvarstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_tilbudtype

| Column | Data type |
|---|---|
| tit_id | LONG |
| tilbudtypekode | STRING |
| tilbudtypenavn | STRING |
| tilbudtype | STRING |
| dato_lastet | TIMESTAMP |

## dim_utdanningsprogram

| Column | Data type |
|---|---|
| utp_id | LONG |
| utdprogramkode | STRING |
| reformkode | STRING |
| utdprogramnavn | STRING |
| utdanningsprogram | STRING |
| dato_lastet | TIMESTAMP |

## dim_utdanningstype

| Column | Data type |
|---|---|
| utt_id | LONG |
| utdtypekode | STRING |
| utdtypenavn | STRING |
| utdomrkode | STRING |
| utdtype | STRING |
| dato_lastet | TIMESTAMP |

## dim_utdomraade

| Column | Data type |
|---|---|
| uto_id | LONG |
| utdomrkode | STRING |
| utdomrnavn | STRING |
| utdomraade | STRING |
| forklaring | STRING |
| dato_lastet | TIMESTAMP |

## dim_utestengstatus_lovhjemmel

| Column | Data type |
|---|---|
| ute_id | LONG |
| utestenginglovhjemmelkode | STRING |
| utestengstatuskode | STRING |
| utestenginglovhjemmelnavn | STRING |
| utestengstatusnavn_bokmal | STRING |
| status_eksport_rust | STRING |
| rustvedtaktypekode | STRING |
| status_opptak | STRING |
| status_godkj | STRING |
| status_und | STRING |
| status_vurd | STRING |
| dato_lastet | TIMESTAMP |

## dim_utvekslingsprogram

| Column | Data type |
|---|---|
| upr_id | LONG |
| institusjonsnr_eier | INT |
| utvprogramkode | STRING |
| kodeverditype | STRING |
| utvprogramnavn | STRING |
| status_fritak_semavgift | STRING |
| nsdutvprogramkode | STRING |
| status_aktiv | STRING |
| utvekslingsprogram | STRING |
| dato_lastet | TIMESTAMP |

## dim_utvekslingstatus

| Column | Data type |
|---|---|
| ust_id | LONG |
| utvekslingstatuskode | STRING |
| kodeverditype | STRING |
| utvekslingstatusnavn | STRING |
| status_nsdrapporter | STRING |
| status_avbrudd | STRING |
| utvekslingstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_verdensdel

| Column | Data type |
|---|---|
| ver_id | LONG |
| verdensdelkode | STRING |
| verdensdelnavn | STRING |
| verdensdel | STRING |
| dato_lastet | TIMESTAMP |

## dim_vgdokmerknadside

| Column | Data type |
|---|---|
| vgs_id | LONG |
| vgdokmerknadsidekode | STRING |
| vgdokmerknadsidenavn | STRING |
| vgdokmerknadside | STRING |
| dato_lastet | TIMESTAMP |

## dim_vgdokstatus

| Column | Data type |
|---|---|
| vga_id | LONG |
| vgdokstatuskode | STRING |
| vgdokstatusnavn | STRING |
| vgdokstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_vgdoktype

| Column | Data type |
|---|---|
| vgt_id | LONG |
| vgdoktypekode | STRING |
| vgdoktypenavn | STRING |
| vgdoktype | STRING |
| dato_lastet | TIMESTAMP |

## dim_vilkarstatus

| Column | Data type |
|---|---|
| vst_id | LONG |
| institusjonsnr_eier | INT |
| vilkarstatuskode | STRING |
| vilkarstatusnavn | STRING |
| begrensetstudierettstatkode | STRING |
| kodeverditype | STRING |
| vilkarstatusnavn_nynorsk | STRING |
| vilkarstatusnavn_engelsk | STRING |
| vilkarstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_vitnemaalstatus

| Column | Data type |
|---|---|
| vit_id | LONG |
| vitnemaalstatkode | STRING |
| vitnemaalstatnavn | STRING |
| vitnemaalstat | STRING |
| dato_lastet | TIMESTAMP |

## dim_vurderingsform

| Column | Data type |
|---|---|
| vfo_id | LONG |
| institusjonsnr_eier | INT |
| vurderingsformkode | STRING |
| vurdpresentasjon_bokmal | STRING |
| vurdpresentasjon_nynorsk | STRING |
| vurdpresentasjon_engelsk | STRING |
| vurdtype | STRING |
| status_eks_kontroll | STRING |
| kodeverditype | STRING |
| status_skriftlig | STRING |
| status_aktiv | STRING |
| status_beregn_sensurfrist | STRING |
| vurderingsform | STRING |
| dato_lastet | TIMESTAMP |

## dim_vurderingskombinasjon

| Column | Data type |
|---|---|
| vko_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| emnekode | STRING |
| versjonskode | STRING |
| vurdkombkode | STRING |
| vurdkombnavn_bokmal | STRING |
| vurdordningkode | STRING |
| vurdkombtypekode | STRING |
| karregelkode | BYTE |
| status_default | STRING |
| status_vurdering | STRING |
| terminkode_fra | STRING |
| arstall_fra | SHORT |
| terminkode_til | STRING |
| arstall_til | SHORT |
| tall_varighet | DECIMAL |
| tidsenhet_varighet | STRING |
| status_aktiv | STRING |
| sortrekkefolge | STRING |
| niva | SHORT |
| vurderingskombinasjon | STRING |
| vurderingsformkode | STRING |
| vfo_id | LONG |
| dato_lastet | TIMESTAMP |

## dim_vurderingsordning

| Column | Data type |
|---|---|
| vor_id | LONG |
| institusjonsnr_eier | INT |
| vurdordningkode | STRING |
| vurdordningnavn_bokmal | STRING |
| vurdordningnavn_nynorsk | STRING |
| vurdordningnavn_engelsk | STRING |
| vurderingsordning | STRING |
| dato_lastet | TIMESTAMP |

## dim_vurderingstid

| Column | Data type |
|---|---|
| vti_id | LONG |
| institusjonsnr_eier | INT |
| arstall | SHORT |
| vurdtidkode | STRING |
| vurdtidnavn_bokmal | STRING |
| vurdtidnavn_nynorsk | STRING |
| vurdtidnavn_engelsk | STRING |
| terminkode_gjelder_i | STRING |
| arstall_gjelder_i | SHORT |
| vurdstatuskode | STRING |
| rekkefolgenr | SHORT |
| status_eksterneksamen | STRING |
| dato_lastet | TIMESTAMP |

## dim_vurdkombenhet

| Column | Data type |
|---|---|
| vke_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| emnekode | STRING |
| versjonskode | STRING |
| vurdkombkode | STRING |
| arstall | SHORT |
| vurdtidkode | STRING |
| arstall_reell | SHORT |
| vurdtidkode_reell | STRING |
| vurdstatuskode | STRING |
| status_publiser | STRING |
| datasystemkode | STRING |
| datasystemkode_sensur | STRING |
| dato_eksamen | TIMESTAMP |
| dato_innlevering | TIMESTAMP |
| dato_frist_sensur | TIMESTAMP |
| dato_frist_kunngjoring | TIMESTAMP |
| dato_sensur_registrert | TIMESTAMP |
| dato_lastet | TIMESTAMP |

## dim_vurdresstatus

| Column | Data type |
|---|---|
| vrs_id | LONG |
| institusjonsnr_eier | INT |
| vurdresstatkode | STRING |
| vurdresstatnavn_bokmal | STRING |
| vurdresstatus | STRING |
| dato_lastet | TIMESTAMP |

## dim_xstatus

| Column | Data type |
|---|---|
| xst_id | LONG |
| xstatuskode | STRING |
| xstatusnavn | STRING |
| kodeverditype | STRING |
| status_nom | STRING |
| xstatus | STRING |
| dato_lastet | TIMESTAMP |

## fak_dbh_drgrad_avlagt_ind

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| arstall_rapp | SHORT |
| terminkode_rapp | STRING |
| arstall | SHORT |
| semester | BYTE |
| terminkode | STRING |
| personlopenr | INT |
| studieprogramkode | STRING |
| gendato | TIMESTAMP |
| institusjonskode | STRING |
| institusjonskode_arbgiv | STRING |
| avdelingskode | STRING |
| kvalifikasjonskode | STRING |
| vitenskapsdisiplin | STRING |
| finanskildekode | STRING |
| stipendiatstilling | BYTE |
| stipendiatstilling_bsk | STRING |
| organisering | BYTE |
| organisering_bsk | STRING |
| fratrekk | STRING |
| dato_finansiering | STRING |
| dato_innlevering | STRING |
| dato_disputas | STRING |
| stedkode | STRING |
| per_id | LONG |
| ste_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_dbh_gjennomstr_studprog

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| arstall_rapp | SHORT |
| terminkode_rapp | STRING |
| arstall | SHORT |
| terminkode | STRING |
| studieprogramkode | STRING |
| person_lopenr_dv | LONG |
| sem_rapp_id | LONG |
| sem_id | LONG |
| studiepoeng | DECIMAL |
| antall_kvalifikasjoner | DECIMAL |
| fylt_eks | STRING |
| fylt_okv | STRING |
| fylt_reg | STRING |
| stedkode | STRING |
| antall_egenf_studenter | DECIMAL |
| antall_egenf_heltidsekv | DECIMAL |
| antall_utvekslinger | DECIMAL |
| fylt_utv | STRING |
| spr_id | LONG |
| stn_id | LONG |
| ste_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_dbh_stud_eksamen_ind

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| personlopenr | INT |
| arstall_rapp | SHORT |
| terminkode_rapp | STRING |
| arstall | SHORT |
| semester | BYTE |
| terminkode | STRING |
| emnekode | STRING |
| avviklingsid | STRING |
| institusjonskode | STRING |
| avdelingskode | STRING |
| stedkode | STRING |
| gendato | TIMESTAMP |
| studentkategori | STRING |
| studieprogramkode | STRING |
| studiepoeng | DECIMAL |
| studierett | BYTE |
| studierett_bsk | STRING |
| karakter | STRING |
| bestgjentak | STRING |
| bestgjentak_bsk | STRING |
| arstall_eksamen | SHORT |
| semester_eksamen | BYTE |
| terminkode_eksamen | STRING |
| tidkode | STRING |
| campuskode | STRING |
| emn_id | LONG |
| per_id | LONG |
| sem_id | LONG |
| sem_eksamen_id | LONG |
| sem_rapp_id | LONG |
| spr_id | LONG |
| ste_id | LONG |
| stn_emn_id | LONG |
| stn_spr_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_dbh_stud_oppnadd_kval_ind

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| arstall_rapp | SHORT |
| terminkode_rapp | STRING |
| arstall | SHORT |
| semester | BYTE |
| kvalifikasjonskode | STRING |
| studieprogramkode | STRING |
| gendato | TIMESTAMP |
| institusjonskode | STRING |
| avdelingskode | STRING |
| stedkode | STRING |
| studieretningkode | STRING |
| dato_vitnemal | STRING |
| dato_oppnaelse | STRING |
| terminkode | STRING |
| personlopenr | INT |
| per_id | LONG |
| ste_id | LONG |
| studiepoeng_internt | DECIMAL |
| studiepoeng_eksternt | DECIMAL |
| studiepoeng_egen_inst | DECIMAL |
| studiepoeng_ekstern_innland | DECIMAL |
| studiepoeng_ekstern_utland | DECIMAL |
| studiepoeng_nye | DECIMAL |
| studiepoeng_ekstern_brukt | DECIMAL |
| dato_lastet | TIMESTAMP |

## fak_dbh_stud_registrert_ind

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| personlopenr | INT |
| arstall_rapp | SHORT |
| terminkode_rapp | STRING |
| arstall | SHORT |
| semester | BYTE |
| terminkode | STRING |
| studieprogramkode | STRING |
| gendato | TIMESTAMP |
| institusjonskode | STRING |
| avdelingskode | STRING |
| stedkode | STRING |
| studentkategori | STRING |
| status_studierett | STRING |
| studieprogramkode_ssb | STRING |
| hovedprogram | BYTE |
| hovedprogram_bsk | STRING |
| startdato | STRING |
| stkomp_grunnlag | STRING |
| studieprogresjon | SHORT |
| klassetrinn | STRING |
| studieretning | STRING |
| landnr_utdanning | SHORT |
| utd_plan | BYTE |
| utd_plan_bsk | STRING |
| landnr_utveksling | SHORT |
| institusjon_utveksling | INT |
| utv_inn_ut | BYTE |
| utv_inn_ut_bsk | STRING |
| utv_avtale | STRING |
| permisjon | BYTE |
| permisjon_bsk | STRING |
| opptatt | BYTE |
| opptatt_bsk | STRING |
| forstegangsreg | BYTE |
| forstegangsreg_bsk | STRING |
| per_id | LONG |
| ste_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_dbh_stud_utveksling_ind

| Column | Data type |
|---|---|
| utvekslingsavtale | STRING |
| dato_fra | STRING |
| dato_til | STRING |
| gendato | TIMESTAMP |
| institusjonskode | STRING |
| inn_ut | BYTE |
| stedkode | STRING |
| terminkode | STRING |
| personlopenr | INT |
| per_id | LONG |
| ste_id | LONG |
| inn_ut_bsk | STRING |
| institusjonsnr_eier | INT |
| arstall_rapp | SHORT |
| terminkode_rapp | STRING |
| arstall | SHORT |
| semester | BYTE |
| avdelingskode | STRING |
| landnr | SHORT |
| studieprogramkode | STRING |
| institusjonsnr_utv | STRING |
| dato_lastet | TIMESTAMP |

## fak_drgrad

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| studieprogramkode | STRING |
| arstall_start | SHORT |
| terminkode_start | STRING |
| studieretningkode | STRING |
| dato_studierett_tildelt | TIMESTAMP |
| dato_studierett_gyldig_til | TIMESTAMP |
| studierettstatkode | STRING |
| status_privatist | STRING |
| studentstatkode | STRING |
| reglementkode | STRING |
| dato_planlagt_slutt | TIMESTAMP |
| dato_beregnet_slutt | TIMESTAMP |
| dato_opptatt | TIMESTAMP |
| kjonn_student | STRING |
| personlopenr | INT |
| per_id | LONG |
| spr_id | LONG |
| ste_spr_id | LONG |
| stn_spr_id | LONG |
| str_id | LONG |
| sem_sps_start_id | LONG |
| sem_sps_kull_id | LONG |
| sem_spo_id | LONG |
| ste_sps_id | LONG |
| ste_arbeidsplass_id | LONG |
| ste_finanskilde_id | LONG |
| ste_arbeidsgiver_id | LONG |
| ste_opptaksgrunnlag_id | LONG |
| grd_id | LONG |
| gkl_id | LONG |
| fag_id_drkand_fag | LONG |
| fag_id_opptaksgrlag | LONG |
| nsdutdbakgrunnnivakode | STRING |
| gradlistekode | STRING |
| dato_oppnaelse | TIMESTAMP |
| dato_disputas | TIMESTAMP |
| dato_innlevert | TIMESTAMP |
| avhandltypkode | STRING |
| brutto_tid | DECIMAL |
| brutto_tid_estimert | DECIMAL |
| dato_fra_arbeidsforhold | TIMESTAMP |
| dato_til_arbeidsforhold | TIMESTAMP |
| status_hovedfinans_arbforhold | STRING |
| finanskildekode | STRING |
| arbpliktfaktor | DECIMAL |
| permisjonsfaktor | DECIMAL |
| utenomfaktor | DECIMAL |
| utvekslingsfaktor | DECIMAL |
| progresjonsfaktor | DECIMAL |
| antall_samarb_avtaler | DECIMAL |
| samarb_institusjonsnr1 | INT |
| status_gradgivende_inst1 | STRING |
| samarb_institusjonsnr2 | INT |
| status_gradgivende_inst2 | STRING |
| samarb_institusjonsnr3 | INT |
| status_gradgivende_inst3 | STRING |
| samarb_institusjonsnr4 | INT |
| status_gradgivende_inst4 | STRING |
| kjonn_veileder | STRING |
| veilederkatkode | STRING |
| internstatkode | STRING |
| dato_fra_veileder | TIMESTAMP |
| kjonn_forste_opp | STRING |
| kjonn_andre_opp | STRING |
| kjonn_tredje_opp | STRING |
| kjonn_leder | STRING |
| arbeidstittel | STRING |
| oppgavetittel_org | STRING |
| forskerskolekode | STRING |
| forskerskoletilkkode | STRING |
| dato_lastet | TIMESTAMP |

## fak_drgrad_semester

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| per_id | LONG |
| spr_id | LONG |
| sem_sps_start_id | LONG |
| sem_id | LONG |
| sem_id_kval | LONG |
| antall_kvalifikasjoner | BYTE |
| dato_lastet | TIMESTAMP |

## fak_ekstres_i_gradprot

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| personlopenr | INT |
| institusjonsnr | INT |
| gradkode | STRING |
| dato | TIMESTAMP |
| institusjonsnr_ekstres | INT |
| lopenr_ekstres | INT |
| reslopenr | BYTE |
| status_se_dok | STRING |
| emnekatkode | STRING |
| status_vitnemal | STRING |
| vektingstall_kvalifikasjon | DECIMAL |
| vekttypekode_kvalifikasjon | STRING |
| dato_opprettet | TIMESTAMP |
| saksbehinit_opprettet | STRING |
| dato_sist_endret | TIMESTAMP |
| saksbehinit_sist_endret | STRING |
| status_innpass | STRING |
| status_oppgave | STRING |
| studieretningkode | STRING |
| studieprogramkode | STRING |
| ekstreskategorikode | STRING |
| ekstregkildekode | STRING |
| studkode | STRING |
| studnavn_original | STRING |
| lopenr_inngar_i | INT |
| beskrivelsemodellkode | STRING |
| url | STRING |
| vektingstall | DECIMAL |
| vekttypekode | STRING |
| studienivaintervallkode | STRING |
| arstall | SHORT |
| eksttidkode | STRING |
| ekstkarregelkode | STRING |
| resultat_original | STRING |
| vurdresstatkode | STRING |
| subjectareakode | STRING |
| oppgavetittel_original | STRING |
| merknadtekst | STRING |
| journalnr | STRING |
| nuskode | STRING |
| status_mangler_siste_imp | STRING |
| lopenr_inngar_i_lokal | INT |
| studienivakode | SHORT |
| institusjonsnr_original | INT |
| spesialpensumtittel | STRING |
| per_id | LONG |
| grd_id | LONG |
| spr_id | LONG |
| str_id | LONG |
| ins_eks_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_emne_dette_semester

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| per_id | LONG |
| sem_id | LONG |
| emn_id | LONG |
| status_svp | DECIMAL |
| sem_id_peks | LONG |
| sem_id_efor | LONG |
| spr_id | LONG |
| spr_emn_id | LONG |
| spr_grad_id | LONG |
| spr_prio_id | LONG |
| spr_utpl_id | LONG |
| ste_adm_id | LONG |
| ste_spr_id | LONG |
| ste_spr_prio_id | LONG |
| ste_emn_stud_id | LONG |
| stn_emn_id | LONG |
| stn_spr_id | LONG |
| stn_spr_prio_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_emne_i_gradprot

| Column | Data type |
|---|---|
| stn_id | LONG |
| per_id | LONG |
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| personlopenr | INT |
| gradkode | STRING |
| dato | TIMESTAMP |
| institusjonsnr_emne | INT |
| emnekode_emne | STRING |
| versjonskode_emne | STRING |
| status_vitnemal | STRING |
| status_vekttall_pa_vitnemal | STRING |
| vektingstall_redusert | DECIMAL |
| vekttypekode_redusert | STRING |
| dato_opprettet | TIMESTAMP |
| saksbehinit_opprettet | STRING |
| studieprogramkode | STRING |
| emnekombinasjonskode | STRING |
| best_spoeng | DECIMAL |
| arstall | SHORT |
| terminkode | STRING |
| emn_id | LONG |
| sem_id | LONG |
| grd_id | LONG |
| spr_id | LONG |
| ald_id | LONG |
| ste_spr_id | LONG |
| ste_adm_id | LONG |
| ste_stud_id | LONG |
| studieretningkode | STRING |
| str_id | LONG |
| sem_id_start | LONG |
| sem_id_kull | LONG |
| dato_oppnaelse | TIMESTAMP |
| dato_lastet | TIMESTAMP |

## fak_gjennomstr_student

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| per_id | LONG |
| sem_id | LONG |
| personlopenr | INT |
| arstall | SHORT |
| terminkode | STRING |
| studieprogramkode_rapportering | STRING |
| studieprogramkode_kval | STRING |
| studentkategori | STRING |
| campuskode | STRING |
| antall_emner | INT |
| antall_studieprogram | INT |
| antall_kvalifikasjoner | INT |
| antall_studenter | INT |
| best_spoeng | DECIMAL |
| innpassede_poeng | DECIMAL |
| institusjonsnr_ekstres | INT |
| akk_best_spoeng | DECIMAL |
| akk_norm_spoeng | DECIMAL |
| permisjonsfaktor_hpr | DECIMAL |
| utvekslingsfaktor_hpr | DECIMAL |
| progresjonsfaktor_hpr | DECIMAL |
| aktivitetsfaktor_hpr | DECIMAL |
| semnr_kalender_hpr | SHORT |
| semnr_brutto_hpr | SHORT |
| semnr_netto_hpr | DECIMAL |
| antall_kvalifikasjoner_hpr | INT |
| semnr_kalender_kval | SHORT |
| ald_id | LONG |
| ald_freg_id | LONG |
| cam_id | LONG |
| sem_sps_start_id_hpr | LONG |
| sem_sps_kull_id_hpr | LONG |
| studierettstatkode_hpr | STRING |
| studentstatkode_hpr | STRING |
| ste_id_hpr | LONG |
| spr_id_hpr | LONG |
| stn_id_hpr | LONG |
| str_id_hpr | LONG |
| sem_sps_start_id_kval | LONG |
| sem_sps_kull_id_kval | LONG |
| studierettstatkode_kval | STRING |
| studentstatkode_kval | STRING |
| ste_id_kval | LONG |
| spr_id_kval | LONG |
| stn_id_kval | LONG |
| str_id_kval | LONG |
| grd_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_gjennomstr_studprog

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| per_id | LONG |
| spr_id | LONG |
| sem_id | LONG |
| personlopenr | INT |
| studieprogramkode | STRING |
| studieprogramkode_rapportering | STRING |
| terminkode | STRING |
| arstall | SHORT |
| studentkategori | STRING |
| campuskode | STRING |
| antall_emner | INT |
| antall_studieprogram | INT |
| antall_kvalifikasjoner | INT |
| antall_emner_bestatt | INT |
| antall_emner_stryk | INT |
| antall_emner_bestatt_gradert | INT |
| snittkarakter | DECIMAL |
| best_spoeng | DECIMAL |
| innpassede_poeng | DECIMAL |
| akk_best_spoeng | DECIMAL |
| akk_norm_spoeng | DECIMAL |
| permisjonsfaktor | DECIMAL |
| utvekslingsfaktor | DECIMAL |
| progresjonsfaktor | DECIMAL |
| aktivitetsfaktor | DECIMAL |
| semnr_kalender | INT |
| semnr_brutto | INT |
| semnr_netto | DECIMAL |
| institusjonsnr_ekstres | INT |
| utvut_utvpersonkatkode | STRING |
| utvut_dato_fra | TIMESTAMP |
| utvut_dato_til | TIMESTAMP |
| utvut_varighet_i_dager | DECIMAL |
| utvut_utvprogramkode | STRING |
| utvut_utvekslingstatuskode | STRING |
| utvut_oppholdtypekode | STRING |
| fylt_eig | STRING |
| fylt_ivp | STRING |
| fylt_ogp | STRING |
| fylt_rko | STRING |
| fylt_sek | STRING |
| fylt_spp | STRING |
| fylt_sps | STRING |
| fylt_ssp | STRING |
| fylt_svp | STRING |
| fylt_utp | STRING |
| ald_id | LONG |
| cam_id | LONG |
| grd_id | LONG |
| prt_id | LONG |
| sem_sps_start_id | LONG |
| ste_grd_id | LONG |
| ste_spr_adm_id | LONG |
| stn_grd_id | LONG |
| sem_nsdrapp_id | LONG |
| stn_spr_adm_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_gjennomstr_studprog_ind

| Column | Data type |
|---|---|
| personlopenr | INT |
| studieprogramkode | STRING |
| har_studierett | STRING |
| antall_studenter | INT |
| sem_reell_start_id | LONG |
| sem_sps_start_id | LONG |
| per_id | LONG |
| spr_id | LONG |
| ste_id | LONG |
| stn_id | LONG |
| institusjonsnr_eier | INT |
| sem_sps_kull_id | LONG |
| ste_opptaksgrunnlag_id | LONG |
| permisjonsindikator | STRING |
| utvekslingsindikator | STRING |
| progresjonsindikator | STRING |
| innpassingsindikator | STRING |
| tidligstartindikator | STRING |
| gradindikator | STRING |
| strykindikator | STRING |
| prioritetsnr | BYTE |
| sem_sps_tildelt_id | LONG |
| sem_sps_gyldig_til_id | LONG |
| studierettstatkode | STRING |
| studentstatkode | STRING |
| veilederkatkode | STRING |
| internstatkode | STRING |
| snittkarakter | DECIMAL |
| best_spoeng | DECIMAL |
| innpassede_poeng | DECIMAL |
| permisjonsfaktor | DECIMAL |
| utvekslingsfaktor | DECIMAL |
| progresjonsfaktor | DECIMAL |
| dato_studierett_tildelt | TIMESTAMP |
| dato_studierett_gyldig_til | TIMESTAMP |
| opptakstypekode | STRING |
| studieretningkode | STRING |
| str_id | LONG |
| ste_sps_id | LONG |
| brutto_tid | DECIMAL |
| ald_id | LONG |
| gradlistekode | STRING |
| gkl_id | LONG |
| xstatuskode_utenlandsk_utd | STRING |
| skolepoeng | DECIMAL |
| konkurransepoeng | DECIMAL |
| kvotetilhkode_tilbud | STRING |
| tilbudstatkode | STRING |
| semnr_kalender | INT |
| antall_registerkort | BYTE |
| passert_studierett_gyldig_til | STRING |
| antall_emner_planl_dette_sem | BYTE |
| studiepoeng_planl_dette_sem | DECIMAL |
| antall_emner_meldt_dette_sem | BYTE |
| studiepoeng_meldt_dette_sem | DECIMAL |
| sem_ogp_id | LONG |
| klassekode | STRING |
| utvinn_institusjonsnavn_ekst | STRING |
| utvinn_landnavn_engelsk_ekst | STRING |
| utvut_utvpersonkatkode | STRING |
| utvut_dato_fra | TIMESTAMP |
| utvut_dato_til | TIMESTAMP |
| utvut_varighet_i_dager | DECIMAL |
| utvut_institusjonsnr_ekst | INT |
| utvut_utvprogramkode | STRING |
| utvut_utvekslingstatuskode | STRING |
| utvut_arstall_nsdrapportert | SHORT |
| utvut_terminkode_nsdrapportert | STRING |
| utvut_oppholdtypekode | STRING |
| utvinn_dato_fra | TIMESTAMP |
| utvinn_dato_til | TIMESTAMP |
| utvinn_institusjonsnr_ekst | INT |
| upr_id | LONG |
| ust_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_nvbfilvgdokfeil

| Column | Data type |
|---|---|
| nvbfilid | INT |
| nvbfildelnr | INT |
| vgdoknr | STRING |
| feiltypenr | INT |
| parameter1 | STRING |
| parameter2 | STRING |
| parameter3 | STRING |
| parameter4 | STRING |
| parameter5 | STRING |
| parameter6 | STRING |
| parameter7 | STRING |
| parameter8 | STRING |
| filnavn_katalogid | INT |
| filnavn | STRING |
| ipnr | STRING |
| ipnavn | STRING |
| webleser | STRING |
| nvbbrukerid | INT |
| er_prodfil | STRING |
| er_nvbfil | STRING |
| tid_opprettet | TIMESTAMP |
| tid_importert | TIMESTAMP |
| skjema_navn | STRING |
| skjema_fylke | STRING |
| skjema_skole | STRING |
| skjema_epost | STRING |
| skjema_passord | STRING |
| skjema_kommentar | STRING |
| skjema_filnavn | STRING |
| ant_a | INT |
| ant_s | INT |
| ant_v | INT |
| ant_p | INT |
| ant_f | INT |
| ant_m | INT |
| ant_d | INT |
| ant_ukjent | INT |
| bytes | INT |
| md5 | STRING |
| tid_importert_foerste_gang | TIMESTAMP |
| prosent_importert | SHORT |
| kontrollversjon_importert | STRING |
| er_klfilformat | STRING |
| innloggingid | INT |
| systemnavn | STRING |
| systemversjon | STRING |
| linjetype | STRING |
| foerstegangsvm | STRING |
| reformkode | STRING |
| vgdoktypekode | STRING |
| aar | STRING |
| orgnr | STRING |
| utstedersted | STRING |
| dato_utstedt | STRING |
| skolenavn | STRING |
| rektornavn | STRING |
| underskrivernavn | STRING |
| foedtdato | STRING |
| gsk_ok | STRING |
| omfang | STRING |
| ordenkode | STRING |
| adferdkode | STRING |
| maalformkode | STRING |
| foedtdato_date | STRING |
| dispensasjonkode | STRING |
| vgdoknr_innsendt | STRING |
| loepskode | STRING |
| dis_id | LONG |
| lop_id | LONG |
| nvt_id | LONG |
| sko_id | LONG |
| utp_id | LONG |
| vga_id | LONG |
| vgt_id | LONG |
| person_lopenr_dv | LONG |
| kjoennskode | STRING |
| soeker_aar_sist | LONG |
| vgdok_avvist | STRING |
| dato_lastet | TIMESTAMP |

## fak_oppnadd_grad_prot

| Column | Data type |
|---|---|
| institusjonsnr | INT |
| gradkode | STRING |
| dato_oppnaelse | TIMESTAMP |
| gradstatkode | STRING |
| dato_utlev_vitn | TIMESTAMP |
| dato_sendt_utskrift | TIMESTAMP |
| tall_vitn_norsk_fatt | INT |
| tall_vitn_engelsk_fatt | INT |
| sprakkode_onsket_malform | STRING |
| status_innstilling | STRING |
| karaktertall | DECIMAL |
| karaktertall_muntlig | DECIMAL |
| karaktertall_skriftlig | DECIMAL |
| kvartiltegn | STRING |
| studieretningkode | STRING |
| saksbehinit_sist_endret | STRING |
| dato_sist_endret | TIMESTAMP |
| journalnr | STRING |
| endringsstatkode | STRING |
| studieprogramkode | STRING |
| avtalenr_doktorgrad | BYTE |
| dato_utlev_ds | TIMESTAMP |
| terminkode_nsdrapportert | STRING |
| arstall_nsdrapportert | SHORT |
| terminkode_start | STRING |
| arstall_start | SHORT |
| terminkode_kull | STRING |
| arstall_kull | SHORT |
| arstall_ssbrapportert | SHORT |
| institusjonsnr_eier | INT |
| dato_opprettet | TIMESTAMP |
| saksbehinit_opprettet | STRING |
| status_manuelt_ugyldig | STRING |
| institusjonsnr_original | INT |
| dokumenttypekode | STRING |
| per_id | LONG |
| sem_id | LONG |
| ste_id | LONG |
| spr_id | LONG |
| stn_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_personfagprofil

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| kravelementkode | STRING |
| karaktertall_stpkt | DECIMAL |
| karaktertall_eks | DECIMAL |
| status_annet_grunnlag | STRING |
| merknadtekst | STRING |
| status_bestatt | STRING |
| dato_endring | TIMESTAMP |
| status_gsk_krav | STRING |
| status_gyldig_opptak | STRING |
| kravelementkode_erstatning | STRING |
| vmnr_aut_beregning | STRING |
| status_tillegg_finnes | STRING |
| status_la_sta | STRING |
| vgdoknr_aut_beregning | STRING |
| dato_opprettet | TIMESTAMP |
| saksbehinit_opprettet | STRING |
| saksbehinit_endring | STRING |
| per_id | LONG |
| personlopenr | INT |
| kravelementnavn | STRING |
| prioritetsnr | SHORT |
| dato_lastet | TIMESTAMP |

## fak_personfagprofil_uio_v

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| per_id | LONG |
| personlopenr | INT |
| kravelementkode | STRING |
| karaktertall_stpkt | DECIMAL |
| status_bestatt | STRING |
| dato_lastet | TIMESTAMP |

## fak_personkvalgrunnlag

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| per_id | LONG |
| sem_id | LONG |
| personlopenr | INT |
| terminkode | STRING |
| arstall | SHORT |
| historikk_kategori | STRING |
| kvalgrunnlagkode | STRING |
| dato_lastet | TIMESTAMP |

## fak_soeknadsalternativ

| Column | Data type |
|---|---|
| soeknads_id | LONG |
| soeker_id | STRING |
| utdanningsbakgrunn | STRING |
| dato_opprettet_soeknad | TIMESTAMP |
| tidligopptakstype | DECIMAL |
| opptaks_id | LONG |
| dato_utd_bakgrunn | TIMESTAMP |
| landkode_utd_bakgrunn | STRING |
| prioritet | LONG |
| saksbehandler_id | LONG |
| dato_spesiell_vurdering | TIMESTAMP |
| opptaksrunde | STRING |
| skolepoeng_ordf | DECIMAL |
| konkurransepoeng_ord | DECIMAL |
| poeng_ord_ald | DECIMAL |
| poeng_ord_bon | DECIMAL |
| poeng_ord_fdy | DECIMAL |
| poeng_ord_pr | DECIMAL |
| poeng_ordf_pr | DECIMAL |
| poeng_ord_fhs | DECIMAL |
| poeng_ord_kjo | DECIMAL |
| poeng_ordf_kjo | DECIMAL |
| poeng_ord_kar | DECIMAL |
| poeng_ordf_kar | DECIMAL |
| poeng_ord_hoy | DECIMAL |
| poeng_ordf_hoy | DECIMAL |
| poeng_ord_hve | DECIMAL |
| poeng_ord_spr | DECIMAL |
| poeng_ordf_spr | DECIMAL |
| poeng_ord_mil | DECIMAL |
| poeng_ord_rea | DECIMAL |
| poeng_ordf_rea | DECIMAL |
| poeng_ord_pra | DECIMAL |
| poeng_ordf_pra | DECIMAL |
| opptaksrunde_id | LONG |
| tilbudstype | STRING |
| svartype | STRING |
| tilbudsforklaring_id | LONG |
| gsk_dispensasjon | STRING |
| ins_id | LONG |
| soe_id | LONG |
| regnr | STRING |
| opr_id | LONG |
| opt_id | LONG |
| er_utkast | STRING |
| er_trukket | STRING |
| opplasting_ferdig | STRING |
| spesiell_vurdering | STRING |
| studium_id | LONG |
| stu_id | LONG |
| status_aktiv | STRING |
| betinget_opptak | STRING |
| aktiv | STRING |
| konkurransepoeng_fag | DECIMAL |
| status_mott | STRING |
| venteliste_nr | LONG |
| poenggrense_dette_aar | DECIMAL |
| dato_lastet | TIMESTAMP |

## fak_soknad

| Column | Data type |
|---|---|
| sgr_id | LONG |
| institusjonsnr_eier | INT |
| personlopenr | INT |
| opptakstypekode | STRING |
| terminkode | STRING |
| arstall | SHORT |
| regnr | STRING |
| opptorgankode_ord_b_rolle | STRING |
| vektingstall_onsket | DECIMAL |
| vekttypekode_onsket | STRING |
| opptaksprovestatuskode | STRING |
| dst_id | LONG |
| per_id | LONG |
| tos_id | LONG |
| sgs_id | LONG |
| opt_id | LONG |
| sem_id | LONG |
| lan_id | LONG |
| opo_id | LONG |
| skb_id | LONG |
| ald_id | LONG |
| historikk_kategori | STRING |
| xstatuskode_utenlandsk_utd | STRING |
| dato_lastet | TIMESTAMP |

## fak_soknadsalternativ

| Column | Data type |
|---|---|
| xstatuskode_utenlandsk_utd | STRING |
| opptakstypekode | STRING |
| terminkode | STRING |
| arstall | SHORT |
| institusjonsnr | INT |
| studietypenr | SHORT |
| prioritetsnr | BYTE |
| status_kvalifisert | STRING |
| status_kvalifisert_beregnet | STRING |
| tilbudsgarantikode_b | STRING |
| tilbudsgarantikode_t | STRING |
| tilbudsgarantikode_so | STRING |
| kvotetilhkode_tilbud | STRING |
| kvoterangkode_tilbud | STRING |
| svarstatkode_svar_pa_tilbud | STRING |
| mottstatkode | STRING |
| studieprogramkode | STRING |
| skolepoeng | DECIMAL |
| stn_id | LONG |
| ste_id | LONG |
| sra_id | LONG |
| studieprogramkode_rapportering | STRING |
| studierettstatkode_hpr | STRING |
| ald_id | LONG |
| konkurransepoeng | DECIMAL |
| fve_id | LONG |
| kvo_id | LONG |
| mot_id | LONG |
| ost_id | LONG |
| tgb_id | LONG |
| tgs_id | LONG |
| tgt_id | LONG |
| tst_id | LONG |
| sst_id | LONG |
| srs_id | LONG |
| tty_id | LONG |
| tss_id | LONG |
| xst_id | LONG |
| sem_id | LONG |
| per_id | LONG |
| kgr_id | LONG |
| skb_id | LONG |
| sgr_id | LONG |
| opm_id | LONG |
| spr_id | LONG |
| historikk_kategori | STRING |
| intern_ekstern | STRING |
| lan_id | LONG |
| institusjonsnr_eier | INT |
| personlopenr | INT |
| kvr_id_so | LONG |
| dst_id | LONG |
| kvalgrunnlagkode | STRING |
| kvr_id | LONG |
| studieprogramvalgkode | STRING |
| opptaksrundekode | STRING |
| kvo_h_id | LONG |
| kvr_h_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_soknadsalternativ_pivot

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| personlopenr | INT |
| arstall | SHORT |
| terminkode | STRING |
| studieprogramkode1 | STRING |
| studieprognavn1 | STRING |
| studieprogramkode2 | STRING |
| studieprognavn2 | STRING |
| studieprogramkode3 | STRING |
| studieprognavn3 | STRING |
| studieprogramkode4 | STRING |
| studieprognavn4 | STRING |
| studieprogramkode5 | STRING |
| studieprognavn5 | STRING |
| studieprogramkode6 | STRING |
| studieprognavn6 | STRING |
| studieprogramkode7 | STRING |
| studieprognavn7 | STRING |
| studieprogramkode8 | STRING |
| studieprognavn8 | STRING |
| studieprogramkode9 | STRING |
| studieprognavn9 | STRING |
| studieprogramkode10 | STRING |
| studieprognavn10 | STRING |
| opptakstudprognavn1 | STRING |
| opptakstudprognavn2 | STRING |
| opptakstudprognavn3 | STRING |
| opptakstudprognavn4 | STRING |
| opptakstudprognavn5 | STRING |
| opptakstudprognavn6 | STRING |
| opptakstudprognavn7 | STRING |
| opptakstudprognavn8 | STRING |
| opptakstudprognavn9 | STRING |
| opptakstudprognavn10 | STRING |
| studieretningkode1 | STRING |
| studieretningnavn_bokmal1 | STRING |
| studieretningkode2 | STRING |
| studieretningnavn_bokmal2 | STRING |
| studieretningkode3 | STRING |
| studieretningnavn_bokmal3 | STRING |
| studieretningkode4 | STRING |
| studieretningnavn_bokmal4 | STRING |
| studieretningkode5 | STRING |
| studieretningnavn_bokmal5 | STRING |
| studieretningkode6 | STRING |
| studieretningnavn_bokmal6 | STRING |
| studieretningkode7 | STRING |
| studieretningnavn_bokmal7 | STRING |
| studieretningkode8 | STRING |
| studieretningnavn_bokmal8 | STRING |
| studieretningkode9 | STRING |
| studieretningnavn_bokmal9 | STRING |
| studieretningkode10 | STRING |
| studieretningnavn_bokmal10 | STRING |
| dato_lastet | TIMESTAMP |

## fak_soknalt

| Column | Data type |
|---|---|
| aar | LONG |
| regnr | STRING |
| laerestednr | SHORT |
| studietypenr | SHORT |
| person_lopenr_dv | LONG |
| foedtdato | TIMESTAMP |
| prioritetkode | BYTE |
| dato_b_oppd | TIMESTAMP |
| dato_endret | TIMESTAMP |
| dato_k_oppd | TIMESTAMP |
| dato_registrert | TIMESTAMP |
| dato_sistbeh | TIMESTAMP |
| dato_soreg | TIMESTAMP |
| dato_svarreg | TIMESTAMP |
| dato_brev_sendt | TIMESTAMP |
| dato_brev_frist | TIMESTAMP |
| dato_t_oppd | TIMESTAMP |
| fordelt_tilkode | STRING |
| kvalifkode | STRING |
| kvoterangkode_tilbud | STRING |
| kvotetilhkode_tilbud | STRING |
| moettkode | STRING |
| moett_laastkode | STRING |
| omslagsark_mottatt_t | STRING |
| opptorgankode_saksbeh | STRING |
| opptorgankode_studium | STRING |
| opptorgankode_tillkrav | STRING |
| opptrundekode_tilbud | STRING |
| soknaltstatkode | STRING |
| spevurdkrysskode | STRING |
| svarkode | STRING |
| svarkortkode_hoved | STRING |
| svarkortkode_vara | STRING |
| tilbgarantkode_b | STRING |
| tilbgarantkode_s | STRING |
| tilbgarantkode_t | STRING |
| tilbstatuskode | STRING |
| tilbudtypekode | STRING |
| tillkravkode | STRING |
| dato_slettet | TIMESTAMP |
| grunnlagkode_rso | STRING |
| kvalifkode_manuell | STRING |
| rangeringstall_hup | DECIMAL |
| tidligsoeknadkode | STRING |
| dato_omslagsark_mottatt_t | TIMESTAMP |
| opptorgankode | STRING |
| grunnlagkode_gsk | STRING |
| kravelemkode_mangel | STRING |
| kvalifkode_gsk | STRING |
| landkode_statsborger | STRING |
| dokumentstatkode | STRING |
| gskdispensasjonkode | STRING |
| landkode_utdanning | STRING |
| grunnlagkode | STRING |
| skolepoeng_ordf | DECIMAL |
| konkurransepoeng_ord | DECIMAL |
| poeng_ald | DECIMAL |
| poeng_bon | DECIMAL |
| poeng_fdy | DECIMAL |
| poeng_fhs | DECIMAL |
| poeng_fsk | DECIMAL |
| poeng_hoy | DECIMAL |
| poeng_kar | DECIMAL |
| poeng_kjo | DECIMAL |
| poeng_mil | DECIMAL |
| poeng_pra | DECIMAL |
| poeng_pro | DECIMAL |
| poeng_rea | DECIMAL |
| poeng_spr | DECIMAL |
| bestaattkode_bio1 | STRING |
| bestaattkode_bio12 | STRING |
| bestaattkode_bmfkl | STRING |
| bestaattkode_fys1 | STRING |
| bestaattkode_fys12 | STRING |
| bestaattkode_geo12 | STRING |
| bestaattkode_gsk | STRING |
| bestaattkode_iko | STRING |
| bestaattkode_info12 | STRING |
| bestaattkode_kje1 | STRING |
| bestaattkode_kje12 | STRING |
| bestaattkode_kok | STRING |
| bestaattkode_ntk | STRING |
| bestaattkode_pfmat | STRING |
| bestaattkode_pmfkl | STRING |
| bestaattkode_r1m | STRING |
| bestaattkode_r1r2 | STRING |
| bestaattkode_r1r2m | STRING |
| bestaattkode_r2 | STRING |
| bestaattkode_sa1 | STRING |
| bestaattkode_s1s2 | STRING |
| bestaattkode_tek12 | STRING |
| resultattall_ffmat | DECIMAL |
| resultattall_norh | DECIMAL |
| resultattall_norsk | DECIMAL |
| resultattall_r24 | DECIMAL |
| fyl_id | LONG |
| gru_id | LONG |
| kom_id | LONG |
| kry_id | LONG |
| kry_ibutd_id | LONG |
| kry_norskutd_id | LONG |
| kry_nordiskutd_id | LONG |
| kry_sms_id | LONG |
| kry_steiner_id | LONG |
| kry_tidligopptak_id | LONG |
| kry_utenlutd_id | LONG |
| kvo_id | LONG |
| kvr_id | LONG |
| lan_statsborger_id | LONG |
| lan_utdanning_id | LONG |
| las_id | LONG |
| mot_id | LONG |
| opo_ord_b_id | LONG |
| opo_primaer_id | LONG |
| opo_sak_id | LONG |
| opo_stu_id | LONG |
| opo_til_id | LONG |
| opr_id | LONG |
| per_id | LONG |
| rea_id | LONG |
| sos_id | LONG |
| stu_id | LONG |
| svt_id | LONG |
| tgb_id | LONG |
| tgs_id | LONG |
| tgt_id | LONG |
| tis_id | LONG |
| tiv_id | LONG |
| tit_id | LONG |
| ver_statsborger_id | LONG |
| ver_utdanning_id | LONG |
| vit_id | LONG |
| historikk_kategori | STRING |
| dato_lastet | TIMESTAMP |

## fak_sost_kvote

| Column | Data type |
|---|---|
| stid | INT |
| kvotetilhkode | STRING |
| tid | STRING |
| poenggrense | STRING |
| venteliste | INT |
| dato_lastet | TIMESTAMP |

## fak_sost_soknalt

| Column | Data type |
|---|---|
| said | INT |
| soid | INT |
| stid | INT |
| foerstevalg | STRING |
| dokumentasjon | STRING |
| behandlet | STRING |
| kvalifisert | STRING |
| tilbud | STRING |
| svar | STRING |
| moett | STRING |
| tilbudsgaranti | STRING |
| prioritet | BYTE |
| tid | STRING |
| saksbehandler | STRING |
| realkompbehandlet | STRING |
| kvalif_uten_tilbud | STRING |
| kvalif_uten_tilbud_laerested | STRING |
| kvalif_uten_tilbud_utdomr | STRING |
| kvalif_uten_tilbud_utdtype | STRING |
| kvalif_uten_tilbud_utdkat | STRING |
| kvalif_uten_tilbud_fylke | STRING |
| konkpoeng | DECIMAL |
| skolepoeng | DECIMAL |
| andrevalg | STRING |
| dato_lastet | TIMESTAMP |

## fak_stat_soknalt

| Column | Data type |
|---|---|
| said | INT |
| tid | STRING |
| soid | INT |
| stid | INT |
| foerstevalg | STRING |
| andrevalg | STRING |
| dokumentasjon | STRING |
| behandlet | STRING |
| kvalifisert | STRING |
| tilbud | STRING |
| svar | STRING |
| moett | STRING |
| tilbudsgaranti | STRING |
| realkompbehandlet | STRING |
| prioritet | BYTE |
| saksbehandler | STRING |
| spevurdkryss | STRING |
| kvalif_uten_tilbud | STRING |
| kvalif_uten_tilbud_laerested | STRING |
| kvalif_uten_tilbud_utdomr | STRING |
| kvalif_uten_tilbud_utdtype | STRING |
| kvalif_uten_tilbud_utdkat | STRING |
| kvalif_uten_tilbud_fylke | STRING |
| konkpoeng | DECIMAL |
| skolepoeng | DECIMAL |
| kurskode | STRING |
| fnr | STRING |
| kvalifikasjonsgrunnlag | STRING |
| institusjon_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_studentvurdkombprotokoll

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| per_id | LONG |
| emn_id | LONG |
| institusjonsnr | INT |
| emnekode | STRING |
| versjonskode | STRING |
| vurdkombkode | STRING |
| arstall | SHORT |
| vurdtidkode | STRING |
| kandidatlopenr | INT |
| karaktertall | DECIMAL |
| vurdresstatkode | STRING |
| status_manuelt_ugyldig | STRING |
| status_gyldig | STRING |
| vektingstall_redusert | DECIMAL |
| vekttypekode_redusert | STRING |
| vektingstall_individuell | DECIMAL |
| vekttypekode_individuell | STRING |
| karaktertall_original | DECIMAL |
| poeng_tilbakemelding | SHORT |
| antall_bestatt | SHORT |
| antall_tellende | SHORT |
| institusjonsnr_undervisning | INT |
| vektingstall_timesort | DECIMAL |
| vekttypekode_timesort | STRING |
| studieprogramkode | STRING |
| kommislopenr | SHORT |
| fagkode | STRING |
| personlopenr | INT |
| arstall_reell | SHORT |
| vurdtidkode_reell | STRING |
| karregelkode | BYTE |
| terminkode_meld_foretatt | STRING |
| arstall_meld_foretatt | SHORT |
| terminkode_nsdrapportert | STRING |
| arstall_nsdrapportert | SHORT |
| vurdordningkode | STRING |
| spoeng_redusert | DECIMAL |
| spoeng_individuell | DECIMAL |
| spoeng_red_tid | DECIMAL |
| ste_adm_id | LONG |
| ste_stud_id | LONG |
| spr_prio_id | LONG |
| stn_spr_prio_id | LONG |
| emn_fordyp1_id | LONG |
| emn_fordyp2_id | LONG |
| vti_reell_id | LONG |
| spk_levert_id | LONG |
| vor_id | LONG |
| stn_spr_id | LONG |
| ald_id | LONG |
| ste_spr_id | LONG |
| ste_spr_prio_id | LONG |
| kms_id | LONG |
| vko_id | LONG |
| vti_id | LONG |
| vrs_id | LONG |
| spk_id | LONG |
| vke_id | LONG |
| spr_id | LONG |
| eks_id | LONG |
| sem_id | LONG |
| fag_id | LONG |
| sem_meld_id | LONG |
| sem_nsd_id | LONG |
| spr_grad_id | LONG |
| spr_utpl_id | LONG |
| stn_emn_id | LONG |
| ald_freg_id | LONG |
| parti | STRING |
| ny_gjentak | STRING |
| campuskode | STRING |
| cam_id | LONG |
| tal_id | LONG |
| spr_emn_id | LONG |
| vurdkombkode_del1 | STRING |
| karaktertall_del1 | DECIMAL |
| vurdresstatkode_del1 | STRING |
| vurdkombkode_del2 | STRING |
| karaktertall_del2 | DECIMAL |
| vurdresstatkode_del2 | STRING |
| vurdkombkode_del3 | STRING |
| karaktertall_del3 | DECIMAL |
| vurdresstatkode_del3 | STRING |
| str_id | LONG |
| dsp_id | LONG |
| dato_lastet | TIMESTAMP |
| studentkategori | STRING |

## fak_studieprogramstudent

| Column | Data type |
|---|---|
| dato_opprettet | TIMESTAMP |
| per_id | LONG |
| spr_id | LONG |
| srs_id | LONG |
| str_id | LONG |
| stn_spr_id | LONG |
| ste_spr_id | LONG |
| personlopenr | INT |
| dato_planlagt_slutt | TIMESTAMP |
| dato_beregnet_slutt | TIMESTAMP |
| sem_kull_id | LONG |
| ald_id | LONG |
| ste_id | LONG |
| institusjonsnr_eier | INT |
| studieprogramkode | STRING |
| terminkode_start | STRING |
| arstall_start | SHORT |
| terminkode_kull | STRING |
| arstall_kull | SHORT |
| studieretningkode | STRING |
| institusjonsnr_mal | INT |
| gradkode_mal | STRING |
| terminkode_slutt | STRING |
| arstall_slutt | SHORT |
| sem_id | LONG |
| dato_studierett_tildelt | TIMESTAMP |
| dato_studierett_gyldig_til | TIMESTAMP |
| studierettstatkode | STRING |
| status_privatist | STRING |
| studentstatkode | STRING |
| status_sperr_aut_oppd | STRING |
| dato_endring | TIMESTAMP |
| gradkode | STRING |
| dato_oppnaelse | TIMESTAMP |
| dato_utlev_vitn | TIMESTAMP |
| dato_opptatt | TIMESTAMP |
| campuskode | STRING |
| klassekode | STRING |
| dato_lastet | TIMESTAMP |

## fak_studieprogramstudent_unikv

| Column | Data type |
|---|---|
| dato_opprettet | TIMESTAMP |
| per_id | LONG |
| spr_id | LONG |
| srs_id | LONG |
| str_id | LONG |
| stn_spr_id | LONG |
| ste_spr_id | LONG |
| personlopenr | INT |
| dato_planlagt_slutt | TIMESTAMP |
| dato_beregnet_slutt | TIMESTAMP |
| sem_kull_id | LONG |
| ald_id | LONG |
| ste_id | LONG |
| institusjonsnr_eier | INT |
| studieprogramkode | STRING |
| terminkode_start | STRING |
| arstall_start | SHORT |
| terminkode_kull | STRING |
| arstall_kull | SHORT |
| studieretningkode | STRING |
| institusjonsnr_mal | INT |
| gradkode_mal | STRING |
| terminkode_slutt | STRING |
| arstall_slutt | SHORT |
| sem_id | LONG |
| dato_studierett_tildelt | TIMESTAMP |
| dato_studierett_gyldig_til | TIMESTAMP |
| studierettstatkode | STRING |
| status_privatist | STRING |
| studentstatkode | STRING |
| status_sperr_aut_oppd | STRING |
| dato_endring | TIMESTAMP |
| gradkode | STRING |
| dato_oppnaelse | TIMESTAMP |
| dato_utlev_vitn | TIMESTAMP |
| dato_opptatt | TIMESTAMP |
| campuskode | STRING |
| klassekode | STRING |
| rang | INT |
| dato_lastet | TIMESTAMP |

## fak_svp_delemner

| Column | Data type |
|---|---|
| institusjonsnr | INT |
| emnekode | STRING |
| versjonskode | STRING |
| vurdkombkode | STRING |
| arstall | SHORT |
| vurdtidkode | STRING |
| karaktertall | DECIMAL |
| vurdresstatkode | STRING |
| per_id | LONG |
| institusjonsnr_eier | INT |
| emn_id | LONG |
| ste_adm_id | LONG |
| ste_stud_id | LONG |
| stn_emn_id | LONG |
| vko_id | LONG |
| vke_id | LONG |
| vti_id | LONG |
| vrs_id | LONG |
| spr_id | LONG |
| ste_spr_id | LONG |
| stn_spr_id | LONG |
| tal_id | LONG |
| sem_id | LONG |
| spoeng_red_tid | DECIMAL |
| dato_opprettet | TIMESTAMP |
| personlopenr | INT |
| dato_eksamen_innlevering | TIMESTAMP |
| dato_lastet | TIMESTAMP |

## fak_svp_sensur

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| emnekode | STRING |
| versjonskode | STRING |
| vurdkombkode | STRING |
| arstall | SHORT |
| vurdtidkode | STRING |
| karaktertall | DECIMAL |
| vurdresstatkode | STRING |
| dato_opprettet | TIMESTAMP |
| personlopenr | INT |
| per_id | LONG |
| emn_id | LONG |
| ste_adm_id | LONG |
| ste_stud_id | LONG |
| stn_emn_id | LONG |
| vko_id | LONG |
| vke_id | LONG |
| vti_id | LONG |
| vrs_id | LONG |
| spr_id | LONG |
| ste_spr_id | LONG |
| stn_spr_id | LONG |
| tal_id | LONG |
| sem_id | LONG |
| spoeng_red_tid | DECIMAL |
| dato_eksamen_innlevering | TIMESTAMP |
| dato_lastet | TIMESTAMP |

## fak_tilsattdata

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| arstall | SHORT |
| dato_fra | TIMESTAMP |
| dato_til | TIMESTAMP |
| terminkode | STRING |
| arstall_tilsyn | SHORT |
| studieprogramkode | STRING |
| emnekode | STRING |
| versjonskode | STRING |
| emnenavn_bokmal | STRING |
| studieprognavn | STRING |
| vektingstall | DECIMAL |
| institusjonsnr_studieansv | INT |
| faknr_studieansv | BYTE |
| instituttnr_studieansv | BYTE |
| gruppenr_studieansv | BYTE |
| stillingstittel_norsk | STRING |
| institusjonsnr_ansatt | INT |
| faknr_ansatt | BYTE |
| instituttnr_ansatt | BYTE |
| gruppenr_ansatt | BYTE |
| etternavn | STRING |
| fornavn | STRING |
| emailadresse | STRING |
| telefonnr | STRING |
| rollekode | STRING |
| rollenavn | STRING |
| imsrollekode | BYTE |
| imsrollenavn | STRING |
| ste_studieprogram_id | LONG |
| ste_fagperson_id | LONG |
| campuskode | STRING |
| personrolletilknytning | STRING |
| rollenr | INT |
| dato_lastet | TIMESTAMP |

## fak_undervisningsmelding

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| poengtall_sum_poeng | DECIMAL |
| terminkode_planlagt_eksamen | STRING |
| arstall_planlagt_eksamen | SHORT |
| status_genere_eks_melding | STRING |
| status_forhandspameldt | STRING |
| prioritetsnr | BYTE |
| soknadstatkode | STRING |
| status_kvalifisert | STRING |
| tilbudstatkode | STRING |
| opptaksrundekode | STRING |
| status_svar_pa_tilbud | STRING |
| opptakkodetegn | STRING |
| tall_loddtrekningnr | INT |
| status_fremmote_und | STRING |
| ventelistenr | SHORT |
| status_betinget_kvalifisert | STRING |
| tall_pamrekkefolge | INT |
| status_publiser_opptak | STRING |
| status_opptatt | STRING |
| emn_id | LONG |
| sem_id | LONG |
| per_id | LONG |
| emnekode | STRING |
| versjonskode | STRING |
| terminkode | STRING |
| arstall | SHORT |
| dato_lastet | TIMESTAMP |

## fak_utestenging

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| utestengstatuskode | STRING |
| studklassifkode | STRING |
| dato_fra | TIMESTAMP |
| dato_til | TIMESTAMP |
| status_importert | STRING |
| status_kontrollert | STRING |
| studieprogramkode | STRING |
| journalnr | STRING |
| dato_meldt_rust | TIMESTAMP |
| status_slett | STRING |
| dato_kontrollert | TIMESTAMP |
| saksbehinit_kontrollert | STRING |
| dato_opprettet | TIMESTAMP |
| saksbehinit_opprettet | STRING |
| dato_endret | TIMESTAMP |
| saksbehinit_endret | STRING |
| utestenginglovhjemmelkode | STRING |
| dato_vedtak | TIMESTAMP |
| status_behandlet | STRING |
| merknadtekst | STRING |
| personlopenr | INT |
| per_id | LONG |
| spr_id | LONG |
| ste_id | LONG |
| stn_id | LONG |
| ute_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_utvperson

| Column | Data type |
|---|---|
| terminkode_til | STRING |
| institusjonsnr_int | INT |
| arstall_til | SHORT |
| tidsenhet_varighet | STRING |
| tall_varighet | INT |
| faknr_int | BYTE |
| instituttnr_int | BYTE |
| gruppenr_int | BYTE |
| institusjonsnr_ekst | INT |
| faknr_ekst | BYTE |
| instituttnr_ekst | BYTE |
| saksbehinit_opprettet | STRING |
| gruppenr_ekst | BYTE |
| studieprogramkode | STRING |
| studienivaintervallkode | STRING |
| dato_opprettet | TIMESTAMP |
| saksbehinit_endring | STRING |
| dato_fra | TIMESTAMP |
| dato_endring | TIMESTAMP |
| arstall_nsdrapportert | SHORT |
| terminkode_nsdrapportert | STRING |
| avtaleid | STRING |
| avtalenavn | STRING |
| status_nsdrapporter | STRING |
| upr_id | LONG |
| ust_id | LONG |
| gkl_id | LONG |
| per_id | LONG |
| ste_id | LONG |
| spr_id | LONG |
| vst_id | LONG |
| sem_fra_id | LONG |
| sem_til_id | LONG |
| personlopenr | INT |
| utvekslingstatuskode | STRING |
| ald_id | LONG |
| stn_id | LONG |
| innpassede_poeng | DECIMAL |
| oppholdtypekode | STRING |
| ste_id_spr | LONG |
| str_id | LONG |
| ins_ekst_id | LONG |
| lan_ekst_id | LONG |
| status_opptak_v | STRING |
| institusjonsnr_eier | INT |
| dato_til | TIMESTAMP |
| utvpersonkatkode | STRING |
| utvprogramkode | STRING |
| status_innreisende | STRING |
| terminkode_fra | STRING |
| arstall_fra | SHORT |
| avtaleid_utvavtalepart | STRING |
| institusjonsnr_utvavtalepart | INT |
| instituttnr_utvavtalepart | INT |
| gruppenr_utvavtalepart | BYTE |
| faknr_utvavtalepart | BYTE |
| dato_til_utvavtale | TIMESTAMP |
| dato_fra_utvavtale | TIMESTAMP |
| dato_lastet | TIMESTAMP |

## fak_vgdok

| Column | Data type |
|---|---|
| loep_gsk_status | STRING |
| kjoennskode | STRING |
| soeker_aar_sist | SHORT |
| resultattall_ffmat | DECIMAL |
| resultattall_kar | DECIMAL |
| resultattall_norh | DECIMAL |
| resultattall_norsk | DECIMAL |
| resultattall_r24 | DECIMAL |
| resultattall_rea | DECIMAL |
| resultattall_spr | DECIMAL |
| gsk_beregnet | STRING |
| resultattall_ffeng | DECIMAL |
| snittkarakter_nvb | DECIMAL |
| resultatkode_pfeng | STRING |
| person_lopenr_dv | LONG |
| vgdoknr | STRING |
| foerstegangsvm | STRING |
| reformkode | STRING |
| vgdoktypekode | STRING |
| aar | SHORT |
| orgnr | STRING |
| utstedersted | STRING |
| dato_utstedt | TIMESTAMP |
| skolenavn | STRING |
| rektornavn | STRING |
| underskrivernavn | STRING |
| gsk_ok | STRING |
| omfang | DECIMAL |
| loepskode | STRING |
| promrkodekombinasjon | STRING |
| omfang_uketimer | DECIMAL |
| nvbfilid | INT |
| antall_tallkarakterer | BYTE |
| sum_tallkarakterer | DECIMAL |
| snitt_tallkarakterer | DECIMAL |
| nvbfildelnr | SHORT |
| importnr | BYTE |
| vgt_id | LONG |
| sko_id | LONG |
| har_pbpby4 | STRING |
| lop_id | LONG |
| dis_id | LONG |
| vga_id | LONG |
| utp_id | LONG |
| foedtdato | TIMESTAMP |
| vgdokstatuskode | STRING |
| tid_opprettet | TIMESTAMP |
| tid_importert | TIMESTAMP |
| resultatkode_bio1 | STRING |
| resultatkode_bio12 | STRING |
| resultatkode_fys1 | STRING |
| resultatkode_fys12 | STRING |
| resultatkode_geo12 | STRING |
| resultatkode_gsk | STRING |
| resultatkode_iko | STRING |
| resultatkode_info12 | STRING |
| resultatkode_kje1 | STRING |
| resultatkode_kje12 | STRING |
| resultatkode_kok | STRING |
| resultatkode_ntk | STRING |
| resultatkode_pfmat | STRING |
| resultatkode_r1m | STRING |
| resultatkode_r1r2 | STRING |
| resultatkode_r1r2m | STRING |
| resultatkode_r2 | STRING |
| resultatkode_sa1 | STRING |
| resultatkode_s1s2 | STRING |
| resultatkode_tek12 | STRING |
| dato_lastet | TIMESTAMP |

## fak_vgdok_unik_foerstevm_v

| Column | Data type |
|---|---|
| vgdoknr | STRING |
| foerstegangsvm | STRING |
| reformkode | STRING |
| vgdoktypekode | STRING |
| aar | SHORT |
| orgnr | STRING |
| utstedersted | STRING |
| dato_utstedt | TIMESTAMP |
| skolenavn | STRING |
| rektornavn | STRING |
| underskrivernavn | STRING |
| foedtdato | TIMESTAMP |
| gsk_ok | STRING |
| omfang | DECIMAL |
| loepskode | STRING |
| vgdokstatuskode | STRING |
| promrkodekombinasjon | STRING |
| omfang_uketimer | DECIMAL |
| nvbfilid | INT |
| antall_tallkarakterer | BYTE |
| sum_tallkarakterer | DECIMAL |
| snitt_tallkarakterer | DECIMAL |
| nvbfildelnr | SHORT |
| importnr | BYTE |
| gsk_beregnet | STRING |
| tid_opprettet | TIMESTAMP |
| tid_importert | TIMESTAMP |
| resultatkode_bio1 | STRING |
| resultatkode_bio12 | STRING |
| resultatkode_fys1 | STRING |
| resultatkode_fys12 | STRING |
| resultatkode_geo12 | STRING |
| resultatkode_gsk | STRING |
| resultatkode_iko | STRING |
| resultatkode_info12 | STRING |
| resultatkode_kje1 | STRING |
| resultatkode_kje12 | STRING |
| resultatkode_kok | STRING |
| resultatkode_ntk | STRING |
| resultatkode_pfeng | STRING |
| resultatkode_pfmat | STRING |
| resultatkode_r1m | STRING |
| resultatkode_r1r2 | STRING |
| resultatkode_r1r2m | STRING |
| resultatkode_r2 | STRING |
| resultatkode_sa1 | STRING |
| resultatkode_s1s2 | STRING |
| resultatkode_tek12 | STRING |
| resultattall_ffeng | DECIMAL |
| resultattall_ffmat | DECIMAL |
| resultattall_kar | DECIMAL |
| resultattall_norh | DECIMAL |
| resultattall_norsk | DECIMAL |
| resultattall_r24 | DECIMAL |
| resultattall_rea | DECIMAL |
| resultattall_spr | DECIMAL |
| person_lopenr_dv | LONG |
| loep_gsk_status | STRING |
| dis_id | LONG |
| lop_id | LONG |
| sko_id | LONG |
| utp_id | LONG |
| vga_id | LONG |
| vgt_id | LONG |
| kjoennskode | STRING |
| soeker_aar_sist | SHORT |
| har_pbpby4 | STRING |
| snittkarakter_nvb | DECIMAL |
| sekvens | INT |
| dato_lastet | TIMESTAMP |

## fak_vgdok_unik_sistevm_v

| Column | Data type |
|---|---|
| vgdoknr | STRING |
| foerstegangsvm | STRING |
| reformkode | STRING |
| vgdoktypekode | STRING |
| aar | SHORT |
| orgnr | STRING |
| utstedersted | STRING |
| dato_utstedt | TIMESTAMP |
| skolenavn | STRING |
| rektornavn | STRING |
| underskrivernavn | STRING |
| foedtdato | TIMESTAMP |
| gsk_ok | STRING |
| omfang | DECIMAL |
| loepskode | STRING |
| vgdokstatuskode | STRING |
| promrkodekombinasjon | STRING |
| omfang_uketimer | DECIMAL |
| nvbfilid | INT |
| antall_tallkarakterer | BYTE |
| sum_tallkarakterer | DECIMAL |
| snitt_tallkarakterer | DECIMAL |
| nvbfildelnr | SHORT |
| importnr | BYTE |
| gsk_beregnet | STRING |
| tid_opprettet | TIMESTAMP |
| tid_importert | TIMESTAMP |
| resultatkode_bio1 | STRING |
| resultatkode_bio12 | STRING |
| resultatkode_fys1 | STRING |
| resultatkode_fys12 | STRING |
| resultatkode_geo12 | STRING |
| resultatkode_gsk | STRING |
| resultatkode_iko | STRING |
| resultatkode_info12 | STRING |
| resultatkode_kje1 | STRING |
| resultatkode_kje12 | STRING |
| resultatkode_kok | STRING |
| resultatkode_ntk | STRING |
| resultatkode_pfeng | STRING |
| resultatkode_pfmat | STRING |
| resultatkode_r1m | STRING |
| resultatkode_r1r2 | STRING |
| resultatkode_r1r2m | STRING |
| resultatkode_r2 | STRING |
| resultatkode_sa1 | STRING |
| resultatkode_s1s2 | STRING |
| resultatkode_tek12 | STRING |
| resultattall_ffeng | DECIMAL |
| resultattall_ffmat | DECIMAL |
| resultattall_kar | DECIMAL |
| resultattall_norh | DECIMAL |
| resultattall_norsk | DECIMAL |
| resultattall_r24 | DECIMAL |
| resultattall_rea | DECIMAL |
| resultattall_spr | DECIMAL |
| person_lopenr_dv | LONG |
| loep_gsk_status | STRING |
| dis_id | LONG |
| lop_id | LONG |
| sko_id | LONG |
| utp_id | LONG |
| vga_id | LONG |
| vgt_id | LONG |
| kjoennskode | STRING |
| soeker_aar_sist | SHORT |
| har_pbpby4 | STRING |
| snittkarakter_nvb | DECIMAL |
| sekvens | INT |
| fylkesnavn | STRING |
| kommunenavn | STRING |
| dato_lastet | TIMESTAMP |

## fak_vgdokfag

| Column | Data type |
|---|---|
| vgdoknr | STRING |
| fagkode | STRING |
| fagtypekode | STRING |
| linjenr | BYTE |
| karakter_standpunkt | STRING |
| karakter_eksamen | STRING |
| eksamensformkode | STRING |
| omfang | DECIMAL |
| terminkode | STRING |
| aar | SHORT |
| fagstatuskode | STRING |
| status_forbedring | STRING |
| status_tillegg | STRING |
| status_aktiv | STRING |
| reformkode | STRING |
| foedtdato | TIMESTAMP |
| person_lopenr_dv | LONG |
| dato_utstedt | TIMESTAMP |
| gsk_beregnet | STRING |
| fag_id | LONG |
| fas_id | LONG |
| fat_id | LONG |
| kar_eksamen_id | LONG |
| kar_standpunkt_id | LONG |
| lop_id | LONG |
| mer_id | LONG |
| mrt_id | LONG |
| ter_id | LONG |
| resultatkode_bio1 | STRING |
| resultatkode_bio12 | STRING |
| resultatkode_fys1 | STRING |
| resultatkode_fys12 | STRING |
| resultatkode_geo12 | STRING |
| resultatkode_gsk | STRING |
| resultatkode_iko | STRING |
| resultatkode_info12 | STRING |
| resultatkode_kje1 | STRING |
| resultatkode_kje12 | STRING |
| resultatkode_kok | STRING |
| resultatkode_ntk | STRING |
| resultatkode_pfeng | STRING |
| resultatkode_pfmat | STRING |
| resultatkode_r1m | STRING |
| resultatkode_r1r2 | STRING |
| resultatkode_r1r2m | STRING |
| resultatkode_r2 | STRING |
| resultatkode_sa1 | STRING |
| resultatkode_s1s2 | STRING |
| resultatkode_tek12 | STRING |
| resultattall_ffeng | DECIMAL |
| resultattall_ffmat | DECIMAL |
| resultattall_kar | DECIMAL |
| resultattall_norh | DECIMAL |
| resultattall_norsk | DECIMAL |
| resultattall_r24 | DECIMAL |
| resultattall_rea | DECIMAL |
| resultattall_spr | DECIMAL |
| kjoennskode | STRING |
| soeker_aar_sist | LONG |
| har_pbpby4 | STRING |
| gsk_ok | STRING |
| vgdoktypekode | STRING |
| sko_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_vgdokmerknad

| Column | Data type |
|---|---|
| vgdoknr | STRING |
| merknadnr | BYTE |
| merknadkode | STRING |
| merknadparameter | STRING |
| merknadparameter2 | STRING |
| merknadkategorikode | STRING |
| sidekode | STRING |
| promrkode | STRING |
| linjenr | BYTE |
| merknadtekst | STRING |
| reformkode | STRING |
| dato_endret | TIMESTAMP |
| mer_id | LONG |
| mrk_id | LONG |
| mrt_id | LONG |
| vgs_id | LONG |
| foerstegangsvm | STRING |
| vgdoktypekode | STRING |
| aar | SHORT |
| orgnr | STRING |
| utstedersted | STRING |
| dato_utstedt | TIMESTAMP |
| skolenavn | STRING |
| rektornavn | STRING |
| underskrivernavn | STRING |
| foedtdato | TIMESTAMP |
| gsk_ok | STRING |
| omfang | DECIMAL |
| loepskode | STRING |
| vgdokstatuskode | STRING |
| promrkodekombinasjon | STRING |
| omfang_uketimer | DECIMAL |
| nvbfilid | INT |
| antall_tallkarakterer | BYTE |
| sum_tallkarakterer | DECIMAL |
| snitt_tallkarakterer | DECIMAL |
| nvbfildelnr | SHORT |
| importnr | BYTE |
| tid_opprettet | TIMESTAMP |
| tid_importert | TIMESTAMP |
| person_lopenr_dv | LONG |
| loep_gsk_status | STRING |
| dis_id | LONG |
| lop_id | LONG |
| sko_id | LONG |
| utp_id | LONG |
| vga_id | LONG |
| vgt_id | LONG |
| kjoennskode | STRING |
| soeker_aar_sist | SHORT |
| har_pbpby4 | STRING |
| dato_lastet | TIMESTAMP |

## fak_vurdkombklage

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| lopenr_sak | SHORT |
| emnekode | STRING |
| versjonskode | STRING |
| vurdkombkode | STRING |
| arstall | SHORT |
| vurdtidkode | STRING |
| dato_sendt_klage_kommisjon | TIMESTAMP |
| dato_sensurfrist | TIMESTAMP |
| dato_vedtak_formidlet | TIMESTAMP |
| journalnr | STRING |
| kommislopenr_ny | SHORT |
| status_sperr_karutskrift | STRING |
| karaktertall_oppr | DECIMAL |
| vurdklagevedtaktypekode | STRING |
| vurdresstatkode_oppr | STRING |
| dato_klage_mottatt | TIMESTAMP |
| dato_klagefrist | TIMESTAMP |
| klagetypekode | STRING |
| kommislopenr_oppr | SHORT |
| status_ferdigbehandlet | STRING |
| dato_opprettet | TIMESTAMP |
| saksbehinit_opprettet | STRING |
| dato_sist_endret | TIMESTAMP |
| saksbehinit_sist_endret | STRING |
| karaktertall_ny | DECIMAL |
| vurdresstatkode_ny | STRING |
| status_behandling2 | STRING |
| karaktertall_ny2 | DECIMAL |
| vurdresstatkode_ny2 | STRING |
| ald_id | LONG |
| tal_id | LONG |
| vrs_id | LONG |
| vke_id | LONG |
| vko_id | LONG |
| sem_id | LONG |
| per_id | LONG |
| emn_id | LONG |
| ste_adm_id | LONG |
| stn_emn_adm_id | LONG |
| vti_id | LONG |
| dato_lastet | TIMESTAMP |

## fak_vurdkombprotlogg_klage

| Column | Data type |
|---|---|
| institusjonsnr_eier | INT |
| institusjonsnr | INT |
| emnekode | STRING |
| versjonskode | STRING |
| vurdkombkode | STRING |
| arstall | SHORT |
| vurdtidkode | STRING |
| merknad_endring_sist | STRING |
| merknad_endring_forst | STRING |
| per_id | LONG |
| personlopenr | INT |
| emn_id | LONG |
| ste_adm_id | LONG |
| vko_id | LONG |
| vti_id | LONG |
| sem_id | LONG |
| dato_lastet | TIMESTAMP |
