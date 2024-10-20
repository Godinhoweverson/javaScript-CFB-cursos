
import { Cxmsg } from "./cxmsg.js";

const callback_ok = () =>{

}

const callback_naook = () =>{
    const config ={
    cor:'#800',
    tipo:'ok',
    textos:null,
    comando_sn: null,
  }
  Cxmsg.mostrar(config, 'Login nao efetuado!', 'Usuario ou senha incorretos')
}
const config = {
  cor: '#048',
  endpoint:"https://055f7fe1-7b45-454c-8122-a94da5824767-00-25d7l54o1axbr.picard.replit.dev"
};

Login.login(callback_ok, callback_naook, config);