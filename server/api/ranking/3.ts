export default defineEventHandler(() => {
  return {
    id: 3,
    modul: 'A',
    modulDescription: 'A - Konzertmusik',
    klasse: 'KLASSE_2',
    klasseDescription: '2. Klasse',
    besetzung: 'HARMONIE',
    besetzungDescription: 'Harmonie',
    category: null,
    categoryDescription: null,
    location: {
      id: 18,
      identifier: 'salmensaal-schlieren',
      name: 'Salmensaal Schlieren',
      address: 'Uitikonerstrasse 17, 8952 Schlieren',
      latitude: 47.396055051974,
      longitude: 8.448625196597,
      googleMapsAddress: 'https://www.google.ch/maps/place/Uitikonerstrasse+17%2C+8952+Schlieren',
      googleMapsCoordinates: 'https://www.google.com/maps?q=47.396055051974,8.448625196597',
      type: 'WETTSPIELLOKAL',
      capacity: '70 Personen',
      modules: 'A (Konzertmusik) 2. Klasse, Harmonie und Brass Band und B (Unterhaltungsmusik) Oberstufe, Harmonie',
      sortOrder: 2,
      mapId: '1W',
      cloudflareId: '68f436aa-a3cf-42c2-fce8-e355110daf00',
      kuulaId: '5ZfQq',
      einspiellokal: null,
      instrumentendepotId: 8,
      instrumentendepotParademusikId: 6,
      instrumentendepot: null,
      juryfeedback: null,
      percussionEquipmentType: 'FULL',
      coordinates: {
        latitude: 47.396055051974,
        longitude: 8.448625196597,
      },
    },
    description: 'A - Konzertmusik, 2. Klasse, Harmonie (Salmensaal Schlieren)',
    status: 'FINAL',
    entries: [
      {
        rank: 1,
        vereinIdentifier: 'musikverein-dietlikon',
        vereinsName: 'Musikverein Dietlikon',
        score: 94.67,
        additionalInfo: null,
      },
      {
        rank: 2,
        vereinIdentifier: 'musikverein-harmonie-thalwil',
        vereinsName: 'Musikverein Harmonie Thalwil',
        score: 86,
        additionalInfo: null,
      },
      {
        rank: 3,
        vereinIdentifier: 'stadtmusik-duebendorf',
        vereinsName: 'Stadtmusik Dübendorf',
        score: 85,
        additionalInfo: null,
      },
      {
        rank: 4,
        vereinIdentifier: 'harmonie-am-bachtel',
        vereinsName: 'Harmonie am Bachtel',
        score: 84.67,
        additionalInfo: null,
      },
      {
        rank: 5,
        vereinIdentifier: 'musikgesellschaft-fehraltorf',
        vereinsName: 'Musikgesellschaft Fehraltorf',
        score: 82,
        additionalInfo: null,
      },
      {
        rank: 6,
        vereinIdentifier: 'musikverein-harmonie-altstetten',
        vereinsName: 'Musikverein Harmonie Altstetten',
        score: 76,
        additionalInfo: null,
      },
    ],
    final: true,
    notPending: true,
  }
})
