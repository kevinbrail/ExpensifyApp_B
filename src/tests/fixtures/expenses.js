import moment from 'moment'

export default [{
    id:'1',
    description:'DESC1',
    note:"NOTE",
    amount: 2001,
    createdAt: 0
},{
    id:'2',
    description:'DESC2',
    note:"NOTE2",
    amount: 2002,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id:'3',
    description:'DESC3',
    note:"NOTE3",
    amount: 2003,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
