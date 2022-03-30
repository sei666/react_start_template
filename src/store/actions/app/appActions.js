import { APP_SET_AUTH_USER } from './appTypes';

export const appSetAuthUser = (authUser) =>{
    return{
        type: APP_SET_AUTH_USER,
        payload:{
            authUser
        }
    }

}



// export const appAsyncSetAuthUser = () =>{
//     return function (dispatch){
//         getUserByToken()
//             .then(response => {
//                 if (response.data.token === "empty"){
//                     console.log(response.data, 'authUserCall');
//                     localStorage.setItem('token', "");
//                     // dispatch(appSetAuthUser('empty'));
//                 }
//                 else{
//                     console.log(response.data, "auth");
//                     dispatch(appSetAuthUser(response.data));
//                     dispatch(appAsyncSetFavoriteFeeds());
//                 }
//             })
//             .catch(e => {
//                 console.log('notAuth');
//                 console.log(e);
//                 // if (authUser){
//                 //     console.log("error notAuth");
//                 // }
//             });
//     }
// }
