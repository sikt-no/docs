module.exports = [
  'iam/index',
  'iam/gevinster',
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
      'iam/scim',
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
    label: 'Funksjonsbeskrivelser',
    items: [
      'iam/deputy',
    ],
  },
  {
    type: 'category',
    label: 'Integrasjoner',
    items: [
      'iam/integrasjoner/bergHansen_integrasjon',
    ],
  },
  'iam/referanser',
];
