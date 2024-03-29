import React from "react";
import clear from "../../Assets/clear-icon.png";
import icon3 from "../../Assets/icon3.png";
import icon4 from "../../Assets/icon4.png";
import { useUserContext } from "../../Hooks/useUserContext";

export function PopUpGasStation() {
  const { addPosto, setAddPosto } = useUserContext(false);

  function adicionaPosto(e) {
    e.preventDefault();
    setAddPosto(!addPosto);
  }

  return (
    <body className="body-popup">
      <div class="popup-station-container">
        <div class="popup-name-container">
          <h2>Nome do Posto: </h2>
          <input type="text" placeholder="Gasolina"></input>
        </div>
        <div class="popup-location-container">
          <h2>Endereço: </h2>
          <input type="text" placeholder="Avenida Rio Branco, 1502"></input>
        </div>
        <div class="popup-fuel-container">
          <div class="popup-fuel-info-container">
            <h2>Nome do Combustível: </h2>
            <input type="text" placeholder="Gasolina"></input>
            <input type="text" placeholder="Etanol"></input>
            <input type="text" placeholder="Diesel"></input>
          </div>
          <div class="popup-price-fuel-container">
            <h2>Preço do Litro: </h2>
            <input type="text" placeholder="R$ "></input>
            <input type="text" placeholder="R$ "></input>
            <input type="text" placeholder="R$ "></input>
          </div>
        </div>
        <div class="popup-customize-fuel">
          <img src="/assets/plus2-icon.svg" alt=""></img>
          <p>Adicionar combustível comercializado</p>
        </div>
        <div class="popup-buttons">
          <button
            onClick={adicionaPosto}
            admin={addPosto}
            class="popup-cancel-button"
          >
            <p>Cancelar</p>
          </button>
          <button class="popup-save-button">
            <p>Salvar</p>
          </button>
        </div>
      </div>
      <div className="popup-nf">
        <div class="popup-logo-container">
          <h1>Notas Fiscais</h1>
        </div>
        <div class="popup-main-container">
          <div class="popup-note-containerr">
            <div class="popup-icon-container">
              <img src={icon3} alt=""></img>
            </div>
            <div class="popup-data-container">
              <p>25/06/22</p>
              <div class="popup-icons-container">
                <img class="popup-i1" src={icon4} alt=""></img>
                <img src={clear} alt=""></img>
              </div>
            </div>
          </div>
          <div class="popup-note-containerr">
            <div class="popup-icon-container">
              <img src={icon3} alt=""></img>
            </div>
            <div class="popup-data-container">
              <p>26/06/22</p>
              <div class="popup-icons-container">
                <img class="popup-i1" src={icon4} alt=""></img>
                <img src={clear} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
