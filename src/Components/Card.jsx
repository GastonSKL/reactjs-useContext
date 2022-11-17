import './Card.css'

export const Card = () => {
  return (
    <div className="card">
            <div className='card__bar'></div>
            <img src="https://images.pexels.com/photos/14186492/pexels-photo-14186492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card__img"  alt="img" />
            <p className="card__name">Pantalones</p>
            <div className="card__description">
                <p className="card__description-price">1000$</p>
                <button className='card__description-button'>Add</button>
            </div>
    </div>
  )
}
