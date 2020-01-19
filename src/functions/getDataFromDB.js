import firebase from './firebase'

const getDataFromDB = async (child) => {
	let ref = firebase.database().ref(),
		pucharRef = ref.child(child),
		pucharTemp = await pucharRef.once('value'),
		pucharPolskiValuesArray = await pucharTemp.val()

	return pucharPolskiValuesArray
}

export default getDataFromDB
