import firebase from './firebase'

const getDataFromDB = async (child) => {
	let ref = firebase.database().ref(child),
		snapshot = await ref.once('value')

	return await snapshot.val()
}

export default getDataFromDB
