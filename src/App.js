import './scss/style.scss';
import { useState, useEffect } from 'react';

function App() {
	console.log('App called!!!');
	const [Num, setNum] = useState(0);
	const [Txt, setTxt] = useState(true);

	//의존성 배열 미등록시 컴포넌트가 재랜더링시 계속 호출
	useEffect(() => {
		console.log('컴포넌트 변경');
	});

	//의존성 배열을 비워두면 컴포넌트기 초기 마운트될때 한번만 실행
	useEffect(() => {
		console.log('초기에 한번만 호출');
	}, []);

	//의존성 배열에 특정 state등록시 해당 state값이 변경될때만 실행
	useEffect(() => {
		console.log('Txt State값이 변경될시에만 호출');
	}, [Txt]);

	return (
		<div className='wrap'>
			<button onClick={() => setNum(Num + 1)}>change number</button>
			<button onClick={() => setTxt(!Txt)}>{Txt ? '변경전' : '변경후'}</button>

			<h1>{Num}</h1>
		</div>
	);
}

export default App;
