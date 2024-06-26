import api from "./api";
import Category from "../dtos/Category";
import Meta from "../dtos/Meta";
// criação da interface que será retornada pela listagem de categorias da api.
// por padrão sempre será um array do recurso mas um objeto meta, contendo os dados para a páginação
interface CategoryIndexData {
  categories: Category[];
  meta: Meta;
}
const CategoriesService = {
  // função que irá realizar o fetch das categorias
  // recebemos a url do SWR e apenas retornamos os dados da reposta para ficar mais fácil a tratativa pelo componente de listagem
  index: (url: string) => {
    return api.get(url).then((response) => response.data);
  },
  // função para a crição de uma nova categoria
  create: (name: string) => {
    return api.post("/admin/v1/categories", { name });
  },
  // função para a atualização da categoria
  update: ({ id, name }: Category) => {
    return api.put(`/admin/v1/categories/${id}`, { name });
  },
  // função para remoção de uma categoria
  delete: (id: number) => {
    return api.delete(`/admin/v1/categories/${id}`);
  },
};
export default CategoriesService;
