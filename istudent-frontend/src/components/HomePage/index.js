import "./index.css";
import Divider from '@mui/material/Divider';

function HomePage() {
    return (
        <main className="main-homepage">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
            </style>
            <img src="insper.png" className="insperCapa"/>
            <div className="img-text">
                <h2 className="text1"> Um espaço dos alunos, para os alunos</h2>
                <Divider orientation="vertical" variant='middle' sx={{ width: ".5px", height:"150px",  backgroundColor: '#ffffff', margin: 3 }} />
                <h2 className="text2"> O I-student surgiu de uma vontade de facilitar a vida do estudante Insper. Seja calouro ou veterano, temos algo para você! </h2>
            </div>
            <div className="text-main">
                <h1 className="text-title"> Mas o que é o I-student?</h1>
                <p className="text-description"> A união faz a força. É esse provérbio que deu origem para a ideia do I-student, um site em que os alunos do Insper pudessem compartilhar suas experiências dentro da faculdade. Aqui você pode encontrar:</p>
            </div>
            <div className="icons">
                <div className="content-light">
                    <img src="light-bulb.png" className="light-bulb"/>
                    <p> Toda matéria tem suas manhas. No I-student, você pode ver qual é a melhor estratégia para cada disciplina do sue curso.</p>
                </div>
                <div className="content-contract">
                    <img src="contract.png" className="contract"/>
                    <p> Ficar pedindo resumo pros outros é um saco, né? No I-student, você pode acessar os resumos de outras pessoas ou publicar o seu próprio.</p>
                </div>
            </div>
        </main>
    );
  }
  
  export default HomePage;