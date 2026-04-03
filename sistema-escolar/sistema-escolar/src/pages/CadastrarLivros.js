import { useState } from "react";
import styles from './CadastrarLivros.module.css';
import { FaTrash } from "react-icons/fa";



function CadastrarLivros() {
    const [mensagem, setMensagem] = useState('');
    const [livros, setLivros] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    function adicionarLivro(e) {
        e.preventDefault();

        if (!titulo.trim() || !autor.trim()) return;

        setLivros([...livros, { id: Date.now(), titulo, autor }]);
        setMensagem('Livro cadastrado com sucesso!');
        setTitulo('');
        setAutor('');

        setTimeout(() => setMensagem(''), 3000);
    }

    function removerLivro(id) {
        setLivros(livros.filter(livro => livro.id !== id));
    }

    return (
        <div className={styles.container}>
            <h1>Cadastrar Livros</h1>

            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            <form onSubmit={adicionarLivro} className={styles.form}>
                <input
                    type="text"
                    placeholder="Título do livro"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Autor do livro"
                    value={autor}
                    onChange={e => setAutor(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>

            {livros.length === 0 ? (
                <p className={styles.vazio}>Nenhum livro cadastrado.</p>
            ) : (
                <ul className={styles.lista}>
                    {livros.map(livro => (
                        <li key={livro.id} className={styles.item}>
                            <strong>{livro.titulo}</strong> - {livro.autor}
                            <button onClick={() => removerLivro(livro.id)}><FaTrash /></button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CadastrarLivros;