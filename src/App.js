import './scss/style.scss';
import { useState } from 'react';
import Modal from './Modal';

function App() {
	const [Open, setOpen] = useState(false);

	return (
		<div className='wrap'>
			<button onClick={() => setOpen(!Open)}>{Open ? '팝업닫기' : '팝업열기'}</button>
			{Open && <Modal />}
		</div>
	);
}

export default App;
