import Commerce from './Commerces.jsx'
import './CommerceList.css'

const CommercesList = ({ commerces }) => {
    return (
        <div className='notes-list grid grid-cols-3 gap-10'>
            {commerces.map((commerce)=><Commerce key={commerce.id} id={commerce.id} tittle={commerce.tittle} text={commerce.text}/>)}
        </div>
    );
}

export default CommercesList;