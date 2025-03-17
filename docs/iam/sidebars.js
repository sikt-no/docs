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
      'iam/internal_processing_sikt',
      {
        type: 'category',
        label: 'Integrasjoner',
        items: [
          'iam/integrasjoner/Local_processing_aho',
          'iam/integrasjoner/Local_Processing_hivolda',
          'iam/integrasjoner/Local_processing_nmbu',
        ],
      },
    ],
  },
  'iam/referanser',
];
