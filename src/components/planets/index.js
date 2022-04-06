import React, { Fragment } from "react";
import Planet from "./Planet";

function Planets() {
  return <Fragment>
    <h3>Planets list</h3>

    <Planet name="Saturno"
      description="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos,
      possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
      img_url="https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
      link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
    ></Planet>

    <Planet name="Plutão"
      description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo
       objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,
       uma região de corpos além da órbita de Netuno."
      img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
      link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
    ></Planet>
  </Fragment>
}

export default Planets;