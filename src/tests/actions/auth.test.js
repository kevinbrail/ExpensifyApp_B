import { login, logout } from '../../actions/auth'

test('Should genrate login action object with user id ', () => {
    const uid='1234';
    const action = login(uid);
    expect(action).toEqual ({
        type: 'LOGIN',
        uid: uid
    })
})

test('Should logout action object', () => {
    const action = logout();
    expect(action).toEqual ({
        type: 'LOGOUT',
    })
})
