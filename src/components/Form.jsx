import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import {  MapContainer, Marker, Popup, TileLayer, Tooltip, CircleMarker, Polygon} from 'react-leaflet'
import axios from 'axios';

const center=[59.87997910647834, 30.44647507711657]
const centerPolygon=[
  [59.895394933400325, 30.402701429055274],
  [59.859557203740856, 30.414374402270855],
  [59.862660072906735, 30.480979014147984],
  [59.8984944592873, 30.471365977382213]
]
const colorOptions={color:'purple'}

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data)
  }
   
    console.log(watch("example"));
  return (
  <div> 
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
      <h3>Заполните ЗАЯВКУ на обратную связь</h3>
      <div className='input-group md-3'>
        <input
        {...register('lastName',{
          required: true,
          maxLength: 50,
          pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Фамилия'/>
      </div>  
      {errors?.lastName?.type=='required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.lastName?.type=='maxLength'&&(
        <p>Поле может содержать не более 50 символов</p>
      )}
        {errors?.lastName?.type=='pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}  
    <div className='input-group md-3'>
      <input
        {...register('firstName',{
          required: true,
          maxLength: 50,
          pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Имя'/>
    </div>
      {errors?.firstName?.type=='required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.firstName?.type=='maxLength'&&(
        <p>Поле может содержать не более 50 символов</p>
      )}
      {errors?.firstName?.type=='pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
    <div className='input-group md-3'>
      <input
        {...register('patronymic',{
          required: true,
          maxLength: 50,
          pattern: /^[А-Яа-я]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Отчество'/>
    </div>
      {errors?.patronymic?.type=='required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.patronymic?.type=='maxLength'&&(
        <p>Поле может содержать не более 50 символов</p>
      )}
       {errors?.patronymic?.type=='pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
    <div className='input-group md-3'>
      <input
        {...register('email',{
          required: true,
          maxLength: 50,
          pattern: /^[A-Za-z0123456789@._-]+$/i
        })}
        type="text"
        className='form-control'
        placeholder='Email'/>
    </div>
      {errors?.email?.type=='required'&&(
        <p>Поле обязательно для заполнения</p>
      )}
      {errors?.email?.type=='maxLength'&&(
        <p>Поле может содержать не более 50 символов</p>
      )}
      {errors?.email?.type=='pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
    <div>
      <input className='btn btn-outline-dark' type="submit"/>
    </div>
    </form>
    <br></br>
    <MapContainer
    center={center}
    zoom={10}
    style={{
      width: '100vw',
      height: "500px"
    }}
    >
      <TileLayer 
        url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=7hM01U9jK2OZF08eQ4kj'
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <CircleMarker center={center} pathOptions={{color: 'black'}} radius={10} />
      <Marker position={center}>
        <Popup>Вы находитесь здесь</Popup>
        <Tooltip>При наведении</Tooltip>
      </Marker>
      <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
    </MapContainer>
  </div> 
  );
}
  
export default Form