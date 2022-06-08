module.exports = [
  'iam/index',
  'iam/gevinster',
  {
    type: 'category',
    label: 'Prosjektinformasjon',
    items: [
      'iam/prosjekt', 
      'iam/uib-pilot',
    ],
  },
    {
    type: 'category',
    label: 'Prosessinformasjon',
    items: [
       'iam/ansvar',
    ],
  },
    {
    type: 'category',
    label: 'Produktinformasjon',
    items: [
      'iam/produkt',
      'iam/arkitektur',
      'iam/datamodell',
      'iam/kildedata',
      'iam/rest-api',
      'iam/passordpolicy',
      'iam/rapportering',
    ],
  },
    {
    type: 'category',
    label: 'Brukerinformasjon',
    items: [
      'iam/kontoaktivering',
      'iam/tilgangsstyring',
    ],
  },
  'iam/livssyklus',
  'iam/brukernavn',
  'iam/virksomhetsroller',
  {
    type: 'category',
    label: 'UiB Pilot',
    items: [
      'iam/uib-targets',
    ],
  },
  'iam/referanser',
];
