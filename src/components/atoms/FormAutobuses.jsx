import { useRef, useState } from 'react';
import Logo from '../../assets/imgs/bus.png';
import '../../assets/styles/Registro.css'

function FormAutobuses() {
    const formDataF = useRef();
    const [Number,setNumber] = useState('');
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formDataF.current);
        let URI = 'http://34.225.239.102/api/autobus/register';//default post
        // console.log(formData.get('tipo'));
        let options = {
            method:'POST',
            headers:{ "Content-Type":"application/json", },
            body:JSON.stringify({
                clave:formData.get('clave'),
                placa:formData.get('placa'),
                numasientos: formData.get('numasientos'),
                fecha:formData.get('fecha'),
                tipo:formData.get('tipo'),
                nombre:formData.get('nombre'),
                licencia:formData.get('licencia')
            })
        }
        fetch(URI,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }

    const handlerClickG = (e) => {
        e.preventDefault();
        let randomNumber = Math.floor(Math.random() * 1000000 + 1000000);
        console.log(randomNumber);
        setNumber(randomNumber)
    }


    return ( 
        <div className='contenedor-formAutobuses'>
            <form ref={formDataF}>
            <div className="div-formularios"><h1>AUTOBUSES</h1></div>
                <div className='div-formularios'>
                    <img src={Logo} alt="Logo" width={200}/>
                </div>
                <div className='div-formularios'>
                    <label htmlFor="">
                        Clave Autobus<br/>
                        <input type="text" name='clave' className='input-dobles' required/>
                    </label>
                    <label htmlFor="">
                        Placa Autobus<br/>
                        <input type="text" name='placa' className='input-dobles' required/>
                    </label>
                </div>
                <div className='div-formularios'>
                    <label htmlFor="">
                        Numero de asientos<br/>
                        <input type="number" name='numasientos' className='input-dobles' required/>
                    </label>
                    <label htmlFor="">
                        Fecha de alta<br/>
                        <input type="Date" name='fecha' className='input-dobles' required/>
                    </label>
                </div>
                <div className='div-formularios'>
                    <label htmlFor="">
                        Tipo<br/>
                        <select name="tipo" id="" className='input'>
                            <option value="turismo">Turismo</option>
                            <option value="lujo">Lujo</option>
                        </select>
                    </label>
                </div>
                <div className='div-formularios'>
                    <label htmlFor="">
                        Nombre del chofer<br/>
                        <input type="text" name='nombre' className='input' required/>
                    </label>
                </div>
                <div className='div-formularios'>
                    <label htmlFor="">
                        Numero de licencia<br/>
                        <input type="number" name='licencia' value={Number} className='input' required/>
                    </label>
                </div>
                <div className='div-formularios'>
                    <button onClick={handlerClickG}>Generar licencia</button>
                    <button onClick={handlerClick}>Alta de autobus</button>
                </div>
            </form>
        </div>
     );
}

export default FormAutobuses;