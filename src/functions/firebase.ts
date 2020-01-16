import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyBgRmQq_LukDvYzG20K-pS9oKXJWzxXDVo',
	authDomain: 'balbinasurma-dc3fe.firebaseapp.com',
	databaseURL: 'https://balbinasurma-dc3fe.firebaseio.com',
	projectId: 'balbinasurma-dc3fe',
	storageBucket: 'balbinasurma-dc3fe.appspot.com',
	messagingSenderId: '1055101871545',
	appId: '1:1055101871545:web:13d7e732f37f70cfbb4268'
}

firebase.initializeApp(firebaseConfig)

export default firebase
