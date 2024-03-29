import './styles.css'

function Card(props) {
    return (
        <div key={props.key} index={props.key} className='Card' >
           <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

export default Card