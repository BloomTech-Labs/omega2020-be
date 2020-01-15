const db = require('../database/dbconfig.js');
const { add, findBy} = require('../users/users-model.js')
const Users = require('../users/users-model.js');

it('should set db env to testing', function() {
    expect(process.env.DB_ENV).toBe("testing");
})

describe('add()', function() {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('should insert a user', async function() {
        await add({password: 'bendoe', email: 'ben@doe.com'});
        const users = await db('users');
        expect(users).toHaveLength(1);
    })
    it('should return provided user', async function() {
        user = await add({password: 'johndoe', email: 'john@doe.com'});
        expect(user.email).toBe('john@doe.com');
        expect(user.id).toBeDefined();

    });
});

describe('findBy()', function() {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('should find a user', async function() {
        original = await add({password: 'johndoe', email: 'john@doe.com'});
        user = await Users.findBy({email: 'john@doe.com'})
        expect(user).toBeDefined();
        expect(user).toMatchObject([original]);
    })
    it('should return the correct user', async function() {
        original = await add({password: 'johndoe', email: 'john@doe.com'});
        user = await Users.findBy({email: 'john@doe.com'})
        expect(user).toMatchObject([original]);
    })
});