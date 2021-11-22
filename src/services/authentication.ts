const delay = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const email = /^[\w-\.]+@itechart.com$/;
export const sigIn = async (password: string, userEmail: string) => {
	await delay(1000);
	if (email.test(userEmail) && password === 'admin') {
		return 'вход выполнен';
	}
	throw new Error('Data entry error');
};
