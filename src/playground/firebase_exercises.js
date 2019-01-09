

// database.ref('expenses').push({
//     description: 'Bikes',
//     note: 'For Dating',
//     amount:1400.77,
//     createdAt: 1400
// }.then(() =>{
//     console.log('Data 3 set successful');
// }).catch((error) =>{
//     console.log('Data 3 set failed', error)
// }))


// const notes = [{
//     id:12,
//     title: 'first note',
//     body: 'This is my note'
// },{
//     id:600,
//     title: 'another note',
//     body: 'second note'
// }]

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const returnedData = snapshot.val();
//     console.log(
//         returnedData.name + ' is a ' + 
//         returnedData.job.title + ' at ' +  
//         returnedData.job.company + '.');
// });

// setTimeout(() => {
//     database.ref('age').set(100);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(15);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) =>{
//         console.log('Error fetching data: ', error)
//     })

// database.ref('isSingle').remove().then(() =>{
//     console.log('isSingle Removed')
// }).catch((error) => {
//     console.log('Unable to Remove isSingle ', error)
// });

// database.ref().set({
//       name: "Kevin Brail",
//       age: 48,
//       isSingle: false,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: "Google"
//         },
//       location: {
//           city: 'Ossining',
//           country:'USA'
//       },
// }).then(() =>{
//     console.log('Inital data set successful');
// }).catch((error) =>{
//     console.log('Inital data set failed', error)
// })

// database.ref().update({
//     stressLevel:9,
//   //  'job/title': 'Manager',
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() =>{
//     console.log('Update successful.');
// }).catch((error) =>{
//     console.log('Update failed: ', error)
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) =>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//       })
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) =>{
//       expenses.push({
//           id:childSnapshot.key,
//           ...childSnapshot.val()
//       })
//     })
//   console.log(expenses);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const returnedData = snapshot.val();
//     console.log(
//         returnedData.name + ' is a ' + 
//         returnedData.job.title + ' at ' +  
//         returnedData.job.company + '.');
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Rent is too damn hight',
//     amount:100012,
//     createdAt: 1000023423
// }).then(() =>{
//   console.log('Inital data set successful');
// }).catch((error) =>{
//   console.log('Inital data set failed', error)
// })

