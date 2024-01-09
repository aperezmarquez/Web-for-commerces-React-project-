import Commerce from './Commerces.jsx'

const CommercesList = ({ commerces }) => {
    return (
        <div className='commerces-list grid grid-cols-3 gap-16'>
            {commerces.map((commerce)=><Commerce key={commerce.title} title={commerce.title} smDesc={commerce.smDesc} desc={commerce.desc} url={commerce.url}/>)}
        </div>
    );
}

export default CommercesList;