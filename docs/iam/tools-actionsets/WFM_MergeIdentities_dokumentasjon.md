
# WFM_MergeIdentities

Kategori: Workflow / Identitetsadministrasjon


## Formål

Slår sammen to identiteter til én ved å merge kildeidentitet (merge_from) inn i
målidentitet (merge_to). Deaktiverer den gamle identiteten i Portal LDAP, fjerner
tilganger og roller, og oppdaterer RIDB (master_persons og master_identifiers).

Brukes til:
- Sammenslåing av duplikatkontoer
- Konsolidering etter identitetskollisjoner
- Lokal opprydding etter sentral merge utført av Sikt


## Hvordan kjøre

### Input-parametere:
- merge_from_uhid (string, påkrevd): UH-ID for identiteten som fjernes
- merge_to_uhid (string, påkrevd): UH-ID for identiteten som beholdes
- local_merge_only (boolean, valgfri): true = kun lokal opprydding (IDW-merge
  allerede utført). Standard: false (sentral merge via IDW API)
- debug (boolean, valgfri): Ekstra logging av identifikatorer

### Eksempler:
- WFM_MergeIdentities("aaa-old-uhid", "bbb-target-uhid")
- WFM_MergeIdentities("aaa-old-uhid", "bbb-target-uhid", true)


## Resultat

Returnerer true ved suksess, false ved feil.

Ved vellykket kjøring:
- Gammel identitet er deaktivert i Portal LDAP (roller og entitlements fjernet)
- master_persons og master_identifiers oppdatert med målidentitetens uhid/uhun
- Reprosessering trigget via nullstilt process_id/processed_at
- Audit-event logget

Manuelle oppfølgingssteg logges:
1. Kjør PortalLdapSyncMismatchingEntitlements (remove) hvis merge_from er
   provisjonert til målsystemer
2. Kjør PDDeleteAccounts for å slette fra AD og Portal LDAP

Viktige feilscenarier:
- 403 fra IDW: Personen finnes ved flere institusjoner, Sikt må utføre merge
- Lokal merge: Avbryter hvis merge ikke er utført i IDW

Skrevet med hjelp av AI