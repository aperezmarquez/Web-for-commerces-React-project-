import Commerce from './Commerces.jsx'

const CommercesList = ({ commerces }) => {
    return (
        <div className='commerces-list grid grid-cols-3 gap-16'>
            {commerces.map((commerce)=><Commerce key={commerce.id} id={commerce.id} tittle={commerce.tittle} text={commerce.text}/>)}
        </div>
    );
}

export default CommercesList;