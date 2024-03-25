import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBvsUC7OREUDxljh0Qcd1ov-6wrPHB9OhY',
	authDomain: 'todoproject-7d744.firebaseapp.com',
	projectId: 'todoproject-7d744',
	storageBucket: 'todoproject-7d744.appspot.com',
	messagingSenderId: '28370357108',
	appId: '1:28370357108:web:fc72f7ced05eba00aefa21',
	databaseURL: 'https://todoproject-7d744-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
