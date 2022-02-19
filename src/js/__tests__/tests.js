import Character from "../main";
import Bowerman from "../main";
import Swordsman from "../main";
import Magician from "../main";
import Zombie from "../main";
import Undead from "../main";
import Daemon from "../main";


// test ('testing Character class', () => {
//     const hero = new Character('Bow', 'Magician');

//     const expected = {name: 'Bow', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40};
//     const received = hero;

//     expect(received).toEqual(expected)
// });

// test ('check damage func', () => {
//     const hero = new Bowerman('Zelda');
//     hero.damage(10)

//     const expected = {name: 'Zelda', type: 'Bowerman', health: 94, level: 1, attack: 10, defence: 40};
//     const received = hero;

//     expect(received).toEqual(expected)
// });

// test ('levelUp func', () => {
//     const hero = new Character('Zom', 'Daemon');
//     hero.levelUp();

//     const expected = {name: 'Zom', type: 'Daemon', health: 100, level: 2, attack: 12, defence: 48};
//     const received = hero;

//     expect(received).toEqual(expected)

// })

test ('check Bowerman class work', () => {
    const hero = new Bowerman('Bow', 'Bowerman')

    const expected = {name: 'Bow', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25};
    const received = hero;

    expect(received).toEqual(expected)
})

test ('check Swordsman class work', () => {
    const hero = new Swordsman('Bow', 'Swordsman')

    const expected = {name: 'Bow', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10};
    const received = hero;

    expect(received).toEqual(expected)
})

test ('check Magician class work', () => {
    const hero = new Magician('Bow', 'Magician')

    const expected = {name: 'Bow', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40};
    const received = hero;

    expect(received).toEqual(expected)
})

test ('check Undead class work', () => {
    const hero = new Undead('Bow', 'Undead')

    const expected = {name: 'Bow', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25};
    const received = hero;

    expect(received).toEqual(expected)
})

test ('check Zombie class work', () => {
    const hero = new Zombie('Bow', 'Zombie')

    const expected = {name: 'Bow', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10};
    const received = hero;

    expect(received).toEqual(expected)
})

test ('check Daemon class work', () => {
    const hero = new Daemon('Bow', 'Daemon')

    const expected = {name: 'Bow', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40};
    const received = hero;

    expect(received).toEqual(expected)
})


test ('check damage func work', () => {
    const hero = new Daemon('Bow', 'Daemon');
    hero.damage(10);

    const expected = {name: 'Bow', type: 'Daemon', health: 94, level: 1, attack: 10, defence: 40};
    const received = hero;

    expect(received).toEqual(expected)
})

test ('check levelUp func work', () => {
    const hero = new Daemon('Bow', 'Daemon');
    hero.levelUp();

    const expected = {name: 'Bow', type: 'Daemon', health: 100, level: 2, attack: 12, defence: 48};
    const received = hero;

    expect(received).toEqual(expected);
});

test ('check levelUp func err', () => {
    const hero = new Daemon('Bow', 'Daemon');
    hero.health = 0;
    const testErr = () => {hero.levelUp()}

   expect(testErr).toThrow('Нельзя повысить уровень умершего')
})

test ('check correcting name', () => {
    const hero =  () => {new Daemon('B', 'Daemon')};

    expect(hero).toThrow('Не корректное имя')
})

test ('check correcting hero type', () => {
    const hero = () => {new Daemon('Daem', 'aaaa')};

    expect(hero).toThrow('Не корректный тип')
})