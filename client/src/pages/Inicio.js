import React from 'react';

function Inicio() {
  return (
    <div className='inicio'>

      <div class="containter">
        <div class="row align-items-center">
          <div class="col">
            <div class="card w-75">
              <div class="card-body text-center">
                <p class="card-text ">Inicio de sesión</p>
                <select class="fs-3" name="usuarios">
                  <option value="1">Usuario 1</option>
                  <option value="2">Usuario 2</option>
                  <option value="3">Usuario 3</option>
                  <option value="4">Usuario 4</option>
                </select>
                <br/>
                <a href="#" class="btn btn-primary active" role="button" data-bs-toogle="button" aria-pressed="true">Acceder</a>
              </div>
            </div>
          </div>
        </div>
      </div>  

    </div>
  )
}

export default Inicio