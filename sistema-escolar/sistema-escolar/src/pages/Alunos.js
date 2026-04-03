//pages

import { useEffect, useState } from "react";
import styles from './Alunos.module.css'

//desafio2
import dadosAlunos from '../alunos.json';

function Alunos({ darkMode }){    

    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');

    //carregando a lista por json
    useEffect(() => {
        setTimeout(() => {
            setAlunos(dadosAlunos);
            setLoading(false);
        }, 2000);
    }, []);

    /* antigo método de buscar os alunos
    useEffect( ()=> {

      
        const dados = [
            {id: 1, nome: 'Maria Silva', curso: 'Informática'},
            {id: 2, nome: 'João Souza', curso: 'Informática'},
            {id: 3, nome: 'Ana Costa', curso: 'Informática'},
            {id: 4, nome: 'José da Silva', curso: 'Informática'},
            {id: 5, nome: 'Fernanda Santos', curso: 'Informática'},
            {id: 6, nome: 'Gabriel Henrique', curso: 'Informática'},
        ]

        setTimeout(() =>{
            setAlunos(dados);
            setLoading(false);
        }, 2000);

    }, []);
    */



    const alunosFiltrados = alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(busca.toLowerCase())
    );

    if(loading){
        return <p className={styles.loading}>Carregando alunos...</p>
    }

    return(
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            <h1>Lista de Alunos</h1>

            <input
                type="text"
                placeholder="Buscar aluno pelo nome..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className={styles.input}
            />

            {alunosFiltrados.length === 0 ? (
                <p className={styles.vazio}>Nenhum aluno encontrado.</p>
            ) : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunosFiltrados.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
}

export default Alunos;