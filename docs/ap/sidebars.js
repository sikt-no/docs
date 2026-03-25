const fs = require('fs');
const path = require('path');

const transformasjonerDir = path.join(__dirname, 'hr', 'transformasjoner');

const transformasjonDocIds = fs
  .readdirSync(transformasjonerDir)
  .filter((file) => file.endsWith('.md'))
  .map((file) => `ap/hr/transformasjoner/${file.replace(/\.md$/, '')}`)
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

const byPrefix = (prefix) =>
  transformasjonDocIds.filter((docId) =>
    path.basename(docId).startsWith(`${prefix}_`),
  );

module.exports = [
  'ap/index',
  {
    type: 'category',
    label: 'HR',
    items: [
      {
        type: 'category',
        label: 'Transformasjoner',
        items: [
          {
            type: 'category',
            label: 'sap_10',
            items: byPrefix('sap_10'),
          },
          {
            type: 'category',
            label: 'sap_20',
            items: byPrefix('sap_20'),
          },
          {
            type: 'category',
            label: 'sap_30',
            items: byPrefix('sap_30'),
          },
        ],
      },
    ],
  },
];
