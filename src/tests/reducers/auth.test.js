import authReducer from '../../reducers/auth';
 
test('Should do login with UID', () =>{
    const uid ='1234';
    const action = {
        type: 'LOGIN',
        uid: uid
    };
    const state = authReducer(uid, action);
    expect(state.uid).toBe(uid);
})

test('Should do login with UID', () =>{
    const uid ='1234';
    const action = {
        type: 'LOGIN',
    };
    const state = authReducer(uid, action);
    expect(state.uid).toBeFalsy();
})
