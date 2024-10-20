class Login {
  static logado = false;
  static matlogado = null;
  static nomelogado = null;
  static acessologado = null;
  static estilocss = null;
  static callback_ok = null;
  static callback_naook = null;
  static config = {
    cor: null,
    endpoint:null
    // "https://055f7fe1-7b45-454c-8122-a94da5824767-00-25d7l54o1axbr.picard.replit.dev/"
  };
 
  static login = (callback_ok, callback_naook, config) => {
    this.config = config;
    this.callback_ok = () =>{
      callback_ok()
    }

    this.callback_naook = () => {
      callback_naook()
    };
    this.estilocss =
      " .fundoLogin{display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0,0,0,0.75);}" +
      ".baseLogin{ display: flex; justify-content: center; align-items:stretch; width: inherit; height: 200px;}" +
      ".elementosLogin{ display: flex; justify-self:center; align-items: center; flex-direction: column; height: inherit; width: 50%;  background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px;}" +
      ".logoLogin{ display: flex; justify-self: center;  align-items: center;width: 50%; height: inherit; background-color: #bbb; padding: 10px; border-radius: 0px 10px 10px 0px;}" +
      ".campoLogin{display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; width: 100%; margin-bottom: 10px;}" +
      ".campoLogin label{font-size: 18px; width: 100%;}" +
      ".campoLogin input {font-size: 18px; padding: 5px; background-color: #fff; border-radius: 5px; width: 100%;}" +
      ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;}" +
      `.botoesLogin button{cursor: pointer;background-color: ${this.config.cor}; color: #fff;border-radius: 5px; padding: 10px;width: 100px;}`;

    const styleEstilo = document.createElement("style");
    styleEstilo.setAttribute("id", "id_estiloLogin");
    styleEstilo.setAttribute("rel", "stylesheet");
    styleEstilo.setAttribute("type", "text/css");
    styleEstilo.innerHTML = this.estilocss;
    document.head.appendChild(styleEstilo);

    const corpo = document.body;
    const fundoLogin = document.createElement("div");
    fundoLogin.setAttribute("id", "fundoLogin");
    fundoLogin.setAttribute("class", "fundoLogin");
    corpo.prepend(fundoLogin);

    const baseLogin = document.createElement("div");
    baseLogin.setAttribute("id", "baseLogin");
    baseLogin.setAttribute("class", "baseLogin");
    fundoLogin.appendChild(baseLogin);

    const elementosLogin = document.createElement("div");
    elementosLogin.setAttribute("id", "elementosLogin");
    elementosLogin.setAttribute("class", "elementosLogin");
    baseLogin.prepend(elementosLogin);

    const campoLogin = document.createElement("div");
    campoLogin.setAttribute("class", "campoLogin");
    elementosLogin.prepend(campoLogin);

    const labelLogin = document.createElement("label");
    labelLogin.innerHTML = "Username";
    campoLogin.prepend(labelLogin);

    const inputLogin = document.createElement("input");
    inputLogin.setAttribute("type", "text");
    inputLogin.setAttribute("name", "f_username");
    inputLogin.setAttribute("id", "f_username");
    campoLogin.appendChild(inputLogin);

    const campoLogin2 = document.createElement("div");
    campoLogin2.setAttribute("class", "campoLogin");
    elementosLogin.appendChild(campoLogin2);

    const labelLoginSenha = document.createElement("label");
    labelLoginSenha.innerHTML = "Senha";
    campoLogin2.appendChild(labelLoginSenha);

    const inputLoginSenha = document.createElement("input");
    inputLoginSenha.setAttribute("type", "password");
    inputLoginSenha.setAttribute("name", "f_senha");
    inputLoginSenha.setAttribute("id", "f_senha");
    campoLogin2.appendChild(inputLoginSenha);

    const botoesLogin = document.createElement("div");
    botoesLogin.setAttribute("class", "botoesLogin");
    elementosLogin.appendChild(botoesLogin);

    const btnLogin = document.createElement("button");
    btnLogin.setAttribute("id", "btn_login");
    btnLogin.innerHTML = "Login";
    btnLogin.addEventListener("click", (evt) => {
      this.verificaLogin();
    });
    botoesLogin.appendChild(btnLogin);

    const btnCancelar = document.createElement("button");
    btnCancelar.setAttribute("id", "btn_cancelar");
    btnCancelar.innerHTML = "Cancelar";
    btnCancelar.addEventListener("click", (evt) => {
       sessionStoragesetItem("logado", "false");
       sessionStoragesetItem("matlogado", "");
       sessionStoragesetItem("nomelogado", "");
       sessionStoragesetItem("acessologado", "");
      this.fechar();
    });
    botoesLogin.appendChild(btnCancelar);

    const logoLogin = document.createElement("div");
    logoLogin.setAttribute("id", "logoLogin");
    logoLogin.setAttribute("class", "logoLogin");
    baseLogin.appendChild(logoLogin);

    const headingLogo = document.createElement("h1");
    headingLogo.innerHTML = " CFB Cursos";
    logoLogin.appendChild(headingLogo);
  };

  static verificaLogin = () => {
    const mat = document.querySelector("#f_username").value;
    const pas = document.querySelector("#f_senha").value;

    const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          sessionStoragesetItem("logado", "true");
          sessionStoragesetItem("matlogado", mat);
          sessionStoragesetItem("nomelogado", res.nome);
          sessionStoragesetItem("acessologado", res.acesso);
          this.callback_ok();
          this.fechar();
        } else {
          sessionStoragesetItem("logado", "false");
          sessionStoragesetItem("matlogado", '');
          sessionStoragesetItem("nomelogado", '');
          sessionStoragesetItem("acessologado", '');
          this.callback_naook();
        }
      });
  };

  static fechar = () => {
    const fundoLogin = document.querySelector("#fundoLogin");
    fundoLogin.remove();
    const id_estiloLogin = document.querySelector("#id_estiloLogin");
    id_estiloLogin.remove();
  };
}
// export {Login}
