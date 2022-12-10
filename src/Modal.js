import { useEffect } from 'react';

function Modal() {
	const style = {
		width: 300,
		height: 200,
		backgroundColor: '#222',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 40,
		color: '#fff',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	};

	useEffect(() => {
		console.log('modal mount');

		//clean-up함수
		//의존성 배열이 비어있는 useEffect의 콜백함수 안쪽에서 리턴되는 함수
		//리턴되는 함수는 컴포넌트가 unmount 될때만 호출
		return () => {
			console.log('modal unmount');
		};
	}, []);

	return <aside style={style}>Modal</aside>;
}

export default Modal;
