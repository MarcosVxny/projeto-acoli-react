import Tema from "./Tema";

interface Postagem {
  id: number;
  data: string;
  titulo: string;
  descricao: string;
  foto: string;
  tema?: Tema | null;
}

export default Postagem;
