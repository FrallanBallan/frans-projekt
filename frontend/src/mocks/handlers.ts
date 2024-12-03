import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:8008/warhammer', () => {
    return HttpResponse.json({
      data: [
        {
          id: '1',
          title: 'High Elf Lord-Celestant',
          price: 40,
          material: 'Metal',
          faction: 'High Elves',
        },
        {
          id: '2',
          title: 'High Elf Swordmasters',
          price: 35,
          material: 'Metal',
          faction: 'High Elves',
        },
        {
          id: '3',
          title: 'High Elf Dragon Princes',
          price: 45,
          material: 'Metal',
          faction: 'High Elves',
        },
      ],
    });
  }),
  http.get('http://localhost:8008/warhammer/unit/:id', (req) => {
    const { id } = req.params;

    const data = [
      {
        id: '1',
        title: 'High Elf Lord-Celestant',
        price: 40,
        material: 'Metal',
        faction: 'High Elves',
      },
      {
        id: '2',
        title: 'High Elf Swordmasters',
        price: 35,
        material: 'Metal',
        faction: 'High Elves',
      },
      {
        id: '3',
        title: 'High Elf Dragon Princes',
        price: 45,
        material: 'Metal',
        faction: 'High Elves',
      },
    ];
    const unit = data.find((u) => u.id === id);
    if (unit) {
      // return HttpResponse.json(unit);
      return HttpResponse.json({
        success: true,
        message: 'Successfull test',
        status: 200,
      });
    } else {
      return HttpResponse.json({ error: 'Unit not found' }, { status: 404 });
    }
  }),
];
