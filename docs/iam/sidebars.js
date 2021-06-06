module.exports = [
  'iam/index',
  'iam/gevinster',
  'iam/arkitektur',
  'iam/livssyklus',
  'iam/brukernavn',
  'iam/kildedata',
  'iam/virksomhetsroller',
  'iam/tilgangsstyring',
  'iam/ansvar',
  'iam/datamodell',
  'iam/kontoaktivering',
  'iam/passordpolicy',
  'iam/rapportering',
  {
    type: 'category',
    label: 'Integrasjon med målsystemer',
    items: [
      'iam/rest-api',
    ],
  },
  {
    type: 'category',
    label: 'UiB Pilot',
    items: [
      'iam/uib-pilot',
      'iam/uib-targets',
    ],
  },
  {
    type: 'category',
    label: 'Styringsdokumentasjon',
    items: [
      'iam/prosjekt',
    ],
  },
  'iam/produkt',
  'iam/referanser',
];
