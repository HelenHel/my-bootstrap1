import React, {useState} from 'react'

const ItemFav = (props) => {

  const [added, setAdded] = useState(false); 
  const onClickAdd = () =>{
    setAdded(!added)
    let id = props.id;
    let myId = props.myId;
    let title = props.title;
    let description = props.description;
    let price = props.price;
    let img = props.img;
    props.onPlus({id, myId, title, description, price, img});
  } 
  const onDelete=()=>{
    props.onDeleteFav(props.id);
  }

  return (
    <div className='conteiner py-3'>
      <main>
        <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
          <div className='col px-3 py-3'>
            <div className='card md-6 rounded'>
              <div className='card-header py-2 px-3'>
                <button type='button' className='w-100 btn btn-lg btn-primary' onClick = {onDelete}>
                  X
                </button>
                
                <p>{props.title}</p>
                <img className='rounded' width={'85%'} src={props.img}/>
                <p>{props.description}</p>
                <p>{props.price}</p>

                <div>
                  <button type='button' className='w-100 btn btn-lg btn-outline-dark' onClick={onClickAdd}>
                  {
                    added ?
                    <img 
                    width={15}
                    src={added ? '/img/icon.png': ''}
                    alt="" />: 'Добавить в КОРЗИНУ'
                  }                
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ItemFav