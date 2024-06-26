import axios, { AxiosResponse } from "axios";
import Cookie from "js-cookie";
import ApiData from "../dtos/ApiData";
import ApiResponseError from "../dtos/ApiResponseError";

// importação do router para que possamos realizar o redirect caso o usuário recebe a mensagem da api de que não acesso ao recurso que tentou acessar.
import Router from "next/router";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// adição da função para setar os headers de autenticação na api e nos cookies do browser, iremos utilizar ela no interceptor da response (tanto no fluxo normal quando no fluxo de erro).
function setHeaders(res: AxiosResponse<any>) {
  if (res.headers["access-token"] && res.headers["access-token"] !== "") {
    const apiData: ApiData = {
      "access-token": res.headers["access-token"],
      client: res.headers.client,
      expiry: res.headers.expiry,
      "token-type": res.headers["token-type"],
      uid: res.headers.uid,
    };

    api.defaults.headers.common["access-token"] = apiData["access-token"];
    api.defaults.headers.common["client"] = apiData.client;
    api.defaults.headers.common["expiry"] = apiData.expiry;
    api.defaults.headers.common["token-type"] = apiData["token-type"];
    api.defaults.headers.common["uid"] = apiData.uid;

    Cookie.set("@api-data", JSON.stringify(apiData));
  }
}

api.interceptors.response.use(
  (res) => {
    setHeaders(res);
    return res;
  },
  (err) => {
    // caso um erro ocorra na response, um novo token é retornado, logo devemos atualizá-lo na api e nos cookies
    if (err.response) {
      setHeaders(err.response);

      const data = err.response.data;

      // aqui estamos tratando os erros no padrão que o rails nos devolve, se existem algum array de erros, iremos extrair o nome do campo e as mensagens para que as mesmas possam ser exibidas na tela utilizando um toast
      if (data && data.errors && data.errors.fields) {
        const errors = data.errors as ApiResponseError;

        const fieldsName = Object.keys(errors.fields);

        fieldsName.forEach((error) => {
          toast.error(error + ": " + errors.fields[error].join(`, `));
        });
      }
    }

    // caso a response tenha um status de não autorizado ou acesso negado, o usuário será redirecionado para o login.
    if (
      err.response &&
      (err.response.status === 401 || err.response.status === 403)
    ) {
      Router.push("/Auth/Login");
    }

    throw err;
  }
);

api.interceptors.request.use((req) => {
  if (req && req.url && req.url.includes("admin")) {
    const cookieData = Cookie.get("@api-data");
    if (cookieData) {
      const apiData: ApiData = JSON.parse(cookieData);
      req.headers["access-token"] = apiData["access-token"];
      req.headers["client"] = apiData.client;
      req.headers["expiry"] = apiData.expiry;
      req.headers["token-type"] = apiData["token-type"];
      req.headers["uid"] = apiData.uid;
    } else {
      throw new Error("Dados da API não encontrados nos cookies.");
    }
  }

  return req;
});

export default api;
